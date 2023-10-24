import ReactGA from 'react-ga4';

const PageViewTracker = (hitType = 'Page View', page = 'path', title = 'page title') => {
  const tracker = ReactGA.send({ hitType, page, title });
  return tracker;
};
export default PageViewTracker;
