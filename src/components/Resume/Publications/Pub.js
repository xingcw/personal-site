import React from 'react';
import PropTypes from 'prop-types';

const Pub = ({ data }) => (
  <article className="pubs-container">
    <ul className="papers">
      <li>{data.author}  <a href={data.link}>{data.title}</a>  {data.other}</li>
    </ul>
  </article>
);

Pub.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    other: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pub;
