import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';
import useAnalyticsEventTracker from '../tracker/userAnalyticsEventTracker';

const gaEventTracker = useAnalyticsEventTracker('Contact');

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Chunwei Xing via email @ chxing@seas.upenn.edu"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact" onClick={() => gaEventTracker('contact')}>Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
