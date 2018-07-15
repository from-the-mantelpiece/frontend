import React from 'react';

import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <span className='logo'></span>
        <span className='title'>
          {this.props.title}
        </span>
      </header>
    );
  }
}

export default Header;