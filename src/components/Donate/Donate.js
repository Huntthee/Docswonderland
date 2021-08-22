import React from 'react';
import './Donate.css';

class Donate extends React.Component {
  render() {
    return (
      <section id="donate-section">
        <h2>Support the Server!</h2>
        <p>This server is NOT pay to win. Donations go towards server & website hosting. All amounts are appreciated!</p>
        <a href="https://www.paypal.me/DocH0lliday" target="_blank" rel="noreferrer">Donate</a>
      </section>
    )
  }
}

export default Donate;