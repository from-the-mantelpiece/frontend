import React from 'react';
import PropTypes from 'prop-types';

import CategoryItem from './category-item';

class CategoryList extends React.Component {

  render() {
    let cats = Array.isArray(this.props.cats) ? this.props.cats : [];
    return (
      <div id="kanban-categories">
        {
          cats.map((category, i) =>
            <CategoryItem
              key={category.id}
              handleDelete={this.props.handleDelete}
              handleUpdate={this.props.handleUpdate}
              category={category}
            />
          )
        }

      </div>
    );
  }

}

CategoryItem.propTypes = {
  cats: PropTypes.array,
};

export default CategoryList;