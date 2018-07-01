import '../style/app.scss';

import React from 'react';

import Categories from './categories/category-container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Categories/>
      </React.Fragment>
    );
  }
}

export default App;