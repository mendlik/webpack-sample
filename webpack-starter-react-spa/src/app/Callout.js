import React from 'react';
import config from '../config';
import Greeter from './Greeter';
import style from './Callout.scss';

const greeter = new Greeter('Hello world!');

const Callout = () => (
  <div className={style.callout}>
    <h5>{config.title}</h5>
    <p>{config.description}</p>
    <p className="greeting">{greeter.greet()}</p>
  </div>
);

export default Callout;
