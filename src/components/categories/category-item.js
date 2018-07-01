import React from 'react';
import PropTypes from 'prop-types';

import CategoryForm from './category-form';
import Cards from '../cards/card-container.js';

class CategoryItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="category">

        <header>
          <CategoryForm handler={this.props.handleUpdate} category={this.props.category} />
          <a href="#" onClick={() => this.props.handleDelete(this.props.category.id)}>x</a>
        </header>
        <Cards categoryId={this.props.category.id} />

      </div>
    );
  }

}

CategoryItem.propTypes = {
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func,
  category: PropTypes.object,
};

export default CategoryItem;