import React from 'react';

class Info extends React.Component {
  render() {
    return (
      <section id="info-section">
        <h2>The Server</h2>
        <article>
          <h3>Information & Wipe Schedule</h3>
          <p>Some info here</p>
          <p>Wipes whenever</p>
        </article>
        <article>
          <h3>Active Admins</h3>
          <ul>
            <li>Doc Holliday</li>
            <li>DesertWhale</li>
            <li>Huntthee</li>
          </ul>
        </article>
        <article>
          <h3>Mods Enabled</h3>
          <ul>
            <li>Mod 1</li>
            <li>Mod 2</li>
            <li>Mod 3</li>
            <li>Mod 4</li>
          </ul>
        </article>
      </section>
    )
  }
}

export default Info;