import React from 'react';
import './Hero.css';

class Hero extends React.Component {
  render() {
    return (
      <section id="hero-section">
        <img src="../Images/rust-logo.svg" alt="Logo for the survival game, Rust." id="mobile-logo"/>
        <h2>A lightly modded Rust server</h2>
        <a href="https://discord.gg/wVAz49ruAf" target="_blank" rel="noreferrer">Join the Discord</a>
      </section>
    )
  }
}

export default Hero;