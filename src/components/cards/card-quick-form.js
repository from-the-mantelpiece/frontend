import React from 'react';
import PropTypes from 'prop-types';

import Card from './card';

class CardQuickForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: '',
      categoryId: this.props.categoryId,
    };
  }

  handleChange(event) {
    this.setState( {[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({title: ''});
    this.props.handler(Object.assign({}, this.state));
  }

  render() {
    return( 

      <form className='cardForm' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='add item'
          value={this.state.title}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

CardQuickForm.propTypes = {
  categoryId: PropTypes.string,
  handler: PropTypes.func,
};

export default CardQuickForm;