import React from 'react';

class Info extends React.Component {
  render() {
    return (
      <section id="info-section">
        <h2>The Server</h2>
        <article>
          <h3>Rules, Information & Wipe Schedule</h3>
          <p>Some info here</p>
          <h4>Server Rules</h4>
          <ul>
            <li>Rule 1</li>
            <li>Rule 2</li>
            <li>Rule 3</li>
            <li>Rule 4</li>
          </ul>
          <h4>Wipes whenever</h4>
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