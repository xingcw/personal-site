import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

import useAnalyticsEventTracker from '../../tracker/userAnalyticsEventTracker';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const gaEventTracker = useAnalyticsEventTracker('Navigation');
  return (
    <header id="header">
      <h1 className="index-link">
        {routes.filter((l) => l.index).map((l) => (
          <Link key={l.label} to={l.path} onClick={() => gaEventTracker(l.label)}>{l.label}</Link>
        ))}
      </h1>
      <nav className="links">
        <ul>
          {routes.filter((l) => !l.index).map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Hamburger />
    </header>
  );
};

export default Navigation;
