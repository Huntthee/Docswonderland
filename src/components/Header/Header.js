import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <h1>Doc's Wonderland</h1>
        <img src="" alt="Server Header Image"/>
        <nav id="navigation">
          <li><a href="#">Home</a></li>
          <li><a href="#">Info</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Donate</a></li>
        </nav>
      </header>
    )
  }
}
export default Header;