import React from 'react';
import PropTypes from 'prop-types';

import Pub from './Publications/Pub';

const Publications = ({ data }) => (
  <div className="publications">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>Publications</h3>
    </div>
    {data.map((pub) => (
      <Pub
        data={pub}
        key={pub.title}
      />
    ))}
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    other: PropTypes.string,
  })),
};

Publications.defaultProps = {
  data: [],
};

export default Publications;
