import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';
import PubCell from '../components/About/PubCell';
import data from '../data/publications';
import useAnalyticsEventTracker from '../tracker/userAnalyticsEventTracker';

// trackers for the on click event
const gaEventTracker = useAnalyticsEventTracker('About');

// uses babel to load contents of file
const markdown = raw('../data/about.md');

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main
    title="About"
    description="Learn about Chunwei Xing"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about" onClick={() => gaEventTracker('about')}>About Me</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
      {data.map((project) => (
        <PubCell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default About;
