import React from 'react';
import './Info.css';

class Info extends React.Component {
  render() {
    return (
      <section id="info-section">
        <article>
          <h2>The Server</h2>
          <h4>~ Wipes Bi-Weekly ~</h4>
        </article>
        
        <article>
          <h3>Rules & Information</h3>
          <p>This server provides some quality of life mods and upgrades to the base game of Rust such as increased gather rates, remover tool and other perks.</p>
          <h4>Server Rules</h4>
          <ul>
            <li>~ Respect All Players ~</li>
            <li>~ No Hacking/Exploits ~</li>
            <li>~ No Griefing ~</li>
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