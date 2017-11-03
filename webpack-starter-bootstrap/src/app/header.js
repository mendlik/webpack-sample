import html from './header.html';
import { parseHtmlNode } from './util';

const header = () =>
  parseHtmlNode(html);

export default header;
