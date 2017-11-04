import header from '../../src/app/header';

describe('Header', () => {
  it('should create a header', () => {
    const element = header();
    expect(element).toMatchSnapshot();
  });

  it('should contain "Navbar" text in brand link', () => {
    const element = header();
    const brand = element.querySelector('a.navbar-brand').outerHTML;
    expect(brand).toEqual('<a class="navbar-brand" href="#">Navbar</a>');
  });
});
