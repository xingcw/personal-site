import React from 'react';
import PropTypes from 'prop-types';
// import dayjs from 'dayjs';

const PubCell = ({ data }) => (
  <div className="cell-container">
    <article className="pub-post">
      <div className="project-content">
        <a href={data.video_link} className="image">
          <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
        </a>
        <div className="description">
          {/* <p>{data.desc}</p> */}
          <p><a href={data.title_link}>{data.title}</a></p>
          <p>{data.author}. {data.journal} ({data.date}).</p>
          <i>{data.comments}</i>
          {/* <h4><a href={data.subtitle_link}>{data.subtitle}</a>  |  {data.date}</h4> */}
          <h4><a href={data.title_link}>Paper</a> | <a href={data.video_link}>Demo</a> | <a href={data.code_link}>Code</a> | <a href={data.slides_link}>Slides</a></h4>
        </div>
      </div>
    </article>
  </div>
);

PubCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    title_link: PropTypes.string,
    video_link: PropTypes.string,
    slides_link: PropTypes.string,
    code_link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
  }).isRequired,
};

export default PubCell;
