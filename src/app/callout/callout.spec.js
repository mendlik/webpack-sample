import callout from './index';

uiTest('callout ', () => {
  it('should contain a header', () => {
    expect(callout.querySelector('h5')).to.exist;
  });
  it('should contain a paragraph', () => {
    expect(callout.querySelector('p')).to.exist;
  });
});
