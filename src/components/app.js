import '../style/app.scss';

import React from 'react';

import Categories from './categories/category-container';
import Header from './header/header';
import Footer from './footer/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header title='From the Mantelpiece'/>
        <Categories/>
        <Footer>
          <div>From the floor</div>
        </Footer>
      </React.Fragment>
    );
  }
}

export default App;