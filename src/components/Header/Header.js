import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <h1>Doc's Wonderland</h1>
        <img src="images/rust-logo.svg" alt="Rust Game Logo"/>
        <nav id="navigation">
          <li><a href="#hero-section">Home</a></li>
          <li><a href="#info-section">Info</a></li>
          <li><a href="#events-section">Events</a></li>
          <li><a href="#donate-section">Donate</a></li>
        </nav>
      </header>
    )
  }
}

export default Header;