import React from 'react';
import style from './callout.scss';
import config from '../../config';

const Callout = () => (
  <div className={style.callout}>
    <h5>{config.title}</h5>
    <p>{config.description}</p>
  </div>
);

export default Callout;
