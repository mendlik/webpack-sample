export const parseHtmlNodes = html =>
  new DOMParser()
    .parseFromString(html, 'text/html')
    .body.childNodes;

export const parseHtmlNode = html =>
  parseHtmlNodes(html)[0];
