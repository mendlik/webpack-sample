import footer from '../../src/app/footer';

describe('Footer', () => {
  it('should create footer element', () => {
    const element = footer();
    expect(element).toMatchSnapshot();
  });
});
