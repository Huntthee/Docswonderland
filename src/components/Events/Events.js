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
        </article>
        <article>
          <h3>Duelist Mode Introduced</h3>
          <p>Face off 1v1 against your rivals with this Rust mod.</p>
        </article>
        <article>
          <h3>No Events Yet!</h3>
          <p>Upcoming events will appear here with a short description of the festivities to enjoy.</p>
        </article>
      </section>
    )
  }
}

export default Events;