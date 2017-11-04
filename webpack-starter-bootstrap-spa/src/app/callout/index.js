import html from './callout.html';
import { parseHtmlNode } from '../util';
import config from '../../config';
import Greeter from './Greeter';
import style from './callout.scss';

const greeter = new Greeter(config.description);

const callout = () => {
  const resolvedHtml = html
    .replace('%{TITLE}', config.title)
    .replace('%{DESCRIPTION}', greeter.greet());
  const element = parseHtmlNode(resolvedHtml);
  element.classList.add(style.callout);
  return element;
};

export default callout;
