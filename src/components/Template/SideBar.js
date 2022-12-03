import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/chunwei xing.jpg`} alt="" />
      </Link>
      <header>
        <h2>Chunwei Xing</h2>
        <p><a href="mailto:chxing@ethz.ch">chxing@ethz.ch</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Chunwei. I am a Master student in Robotics, Systems and Control
        at <a href="https://ethz.ch/en.html">ETH Zurich</a>. I&apos;m interested in Reinforcement Learning and Robot Control,
        Robotic Perception, Computer Vision and Machine Learning. I&apos;m currently a master thesis student at <a href="https://rpg.ifi.uzh.ch/index.html">Robotics and Perception Group</a> at University of Zurich.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Chunwei Xing <Link to="/">xingcw.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
