import React from 'react';
import PropTypes from 'prop-types';
import CardQuickForm from './card-quick-form';

class CardForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    let defaultState = {
      title: '',
      assignee: '',
      notes: '',
      priority: '',
      categoryId: this.props.categoryId,
    };
    
    this.state = this.props.card || defaultState;
  }

  handleChange(event) {
    this.setState( {[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handler(Object.assign({}, this.state));
  }

  render() {

    let hoverable = this.props.card ? 'hoverable' : '';

    return (
      <form className='cardForm' onSubmit={this.handleSubmit}>
        <label>
          <span>Issue Name:</span>
          <input 
            type='text'
            name='title'
            value={this.state.title || ''}
            onChange={this.handleChange}
          />
        </label>

        <label>
          <span>Assigned To:</span>
          <input
            type='text'
            name='assignee'
            value={this.state.assignee || ''}
            onChange={this.handleChange}
          />
        </label>

        <label>
          <span>Notes</span>
          <textarea 
            type='text'
            name='notes'
            value={this.state.notes || ''}
            onChange={this.handleChange}
          />
        </label>

        <label>
          <span>Priority</span>
          <select 
            name='priority'
            onChange={this.handleChange}
          >
            <option value='Normal'>Normal</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
            <option value='Critical'>Critical</option>
          </select>
        </label>

        <div className='buttons'>
          <button type='submit'>Save</button>
        </div>
      </form>
    );
  }
}

CardForm.propTypes = {
  categoryId: PropTypes.string,
  card: PropTypes.object,
  handler: PropTypes.func,
};

export default CardForm;