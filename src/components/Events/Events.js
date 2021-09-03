import React from 'react';
import './Events.css';

class Events extends React.Component {
  render() {
    return (
      <section id="events-section">
        <article>
          <h2>Upcoming Events</h2>
        </article>
        <article>
          <h3>Doc's Wonderland Returns!</h3>
          <p>LIVE Sept 3 2021</p>
        </article>
        <article>
          <h3>Duelist mode</h3>
          <p>Coming this weekend, face off 1v1 against your rivals with this Rust mod.</p>
        </article>
        <article>
          <h3>No Events</h3>
          <p>Upcoming events will appear here with a short description of the festivities to enjoy.</p>
        </article>
      </section>
    )
  }
}

export default Events;