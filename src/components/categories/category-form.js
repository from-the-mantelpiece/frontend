import React from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.props.category || {title: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handler(Object.assign({}, this.state));
    if(!this.state.id) {
      this.setState({title: ''});
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return(
      <form className="categoryForm" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="title"
          value={this.state.title}
          placeholder="New Category Name"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

CategoryForm.propTypes = {
  handler: PropTypes.func,
  category: PropTypes.object,
};

export default CategoryForm;