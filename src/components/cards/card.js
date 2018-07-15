import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal';
import CardForm from './card-form';
import {renderIf} from '../../lib/utils';

class Card extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {editing: false};

    this.toggleModal = this.toggleModal.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  toggleModal() {
    let editing = ! this.state.editing;
    this.setState({editing});
  }

  handleUpdate(card) {
    this.props.handleUpdate(card);
    this.toggleModal();
  }

  render() {

    let {card, categoryId, handleDelete} = this.props;

    return (
      <div key={card.id} className='card'>

        <div>{card.title}</div>
      
        <div className='actions'>
          <a href='#' onClick={() => handleDelete(card)}>
            <i className=' fa fa-trash-o'></i>
          </a>
          <a href='#' onClick={this.toggleModal}>
            <i className='fa fa-cog'></i>
          </a>
        </div>

        {
          renderIf(
            this.state.editing,
            <Modal
              title='Edit Card'
              close={this.toggleModal}
            >
              <CardForm 
                handler={this.handleUpdate}
                card={card}
                categoryId={categoryId}
              />
            </Modal>
          )
        }
      </div>
    );
  }
}

Card.propTypes = {
  categoryId: PropTypes.string,
  card: PropTypes.object,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
};

export default Card;