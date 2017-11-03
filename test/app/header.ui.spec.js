import header from '../../src/app/header';

describe('Header', () => {
  it('should create header element', () => {
    const element = header();
    expect(element).toMatchSnapshot();
  });
});
