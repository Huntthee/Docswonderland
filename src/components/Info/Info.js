import React from 'react';
import './Info.css';

class Info extends React.Component {
  render() {
    return (
      <section id="info-section">
        <article>
          <h2>The Server</h2>
          <h4>~ Wipes whenever ~</h4>
        </article>
        
        <article>
          <h3>Rules & Information</h3>
          <p>Some info here, a whole lot more info to test the padding of this container.</p>
          <h4>Server Rules</h4>
          <ul>
            <li>Rule 1</li>
            <li>Rule 2</li>
            <li>Rule 3</li>
            <li>Rule 4</li>
          </ul>
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