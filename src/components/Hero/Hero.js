import React from 'react';
import './Hero.css';

class Hero extends React.Component {
  render() {
    return (
      <section id="hero-section">
        <img src="../Images/rust-logo.svg"/>
        <h2>A lightly modded Rust server</h2>
        <a href="#">Join the Discord</a>
      </section>
    )
  }
}

export default Hero;