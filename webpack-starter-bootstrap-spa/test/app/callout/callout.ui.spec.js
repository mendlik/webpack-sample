import { JSDOM } from 'jsdom';
import callout from '../../../src/app/callout';

describe('Callout', () => {
  const { document } = (new JSDOM()).window;

  it('should create callout element', () => {
    const element = callout(document);
    expect(element).toMatchSnapshot();
  });

  it('should resolve template params', () => {
    const element = callout(document);
    const header = element.querySelector('h5').outerHTML;
    expect(header).toEqual('<h5>Webpack Starter</h5>');
  });
});
