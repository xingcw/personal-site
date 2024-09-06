import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/chunwei xing.png`} alt="" />
      </Link>
      <header>
        <h2>Chunwei Xing</h2>
        <p><a href="mailto:chxing@seas.upenn.edu">chxing@seas.upenn.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Chunwei. I am a first-year PhD student at <a href="https://jirl-upenn.github.io/">Janus Intelligent Robots Lab (JIRL)</a>, University of Pennsylvania. I am advised by <a href="https://antonilo.github.io/">Prof. Antonio Loquercio</a>. I am also a member of the <a href="https://www.grasp.upenn.edu/">GRASP Lab</a>.
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
