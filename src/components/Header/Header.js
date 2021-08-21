import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <h1>Doc's Wonderland</h1>
        <img src="rust-logo.svg" alt="Rust Game Logo"/>
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