import React, { Fragment } from 'react';
import Parser from 'html-react-parser';
import './styles.css';
/* eslint-disable */
export default ({date, title, content}) => (
  <Fragment>
  <div className="post-container">
    <div className="post-left">{new Date(date).toLocaleDateString('sv-SE')}</div>
    <div className="post-center">
      <div className="post-title">
        <h3>{Parser(title.rendered)}</h3>
      </div>
      <div className="post-description">
        { Parser(content.rendered)}
      </div>
    </div>
    <div />
  </div>
  </Fragment>

	);

// convert to local date.
// {new Date(date).toLocaleDateString('sv-SE')}
