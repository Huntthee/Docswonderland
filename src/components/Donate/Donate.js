import React from 'react';
import './Donate.css';

class Donate extends React.Component {
  render() {
    return (
      <section id="donate-section">
        <h2>Support the Server!</h2>
        <p>This server is NOT pay to win. Donations go directly towards server hosting via group pay. All amounts are appreciated!</p>
        <a href="https://clients.fragnet.net/grouppay.php?hash=94a0a-858ca-21b7b-769e9-f02cf-e7e54-31" target="_blank" rel="noreferrer">Donate</a>
      </section>
    )
  }
}

export default Donate;