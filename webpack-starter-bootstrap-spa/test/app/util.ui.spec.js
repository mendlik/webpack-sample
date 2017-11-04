import { parseHtmlNode } from '../../src/app/util';

describe('util', () => {
  it('should parse HTML text to an HTML node', () => {
    const html = '<div>A Sample DIV</div>';
    const node = parseHtmlNode(html);
    expect(node.outerHTML).toBe(html);
  });
});
