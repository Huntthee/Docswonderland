import React from 'react';
import './Events.css';

class Events extends React.Component {
  render() {
    return (
      <section id="events-section">
        <article>
          <h2>Upcoming & Current Events</h2>
        </article>
        <article>
          <h3>Doc's Wonderland Returns!</h3>
          <p>Server LIVE Now!</p>
          <p>Doc's Wonderland returns to the server list and welcomes back past players!</p>
        </article>
        <article>
          <h3>Duelist Mode Introduced</h3>
          <p>Face off 1v1 against your rivals with this Rust mod.</p>
        </article>
        <article>
          <h3>Halloween is Near!</h3>
          <p>Look forward to month-long celebrations for October with the Rust Halloween Event!</p>
        </article>
      </section>
    )
  }
}

export default Events;