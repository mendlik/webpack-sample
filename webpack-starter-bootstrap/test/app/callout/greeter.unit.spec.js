import Greeter from '../../../src/app/callout/Greeter';

describe('Greeter', () => {
  it('should greet with "Hello world!"', () => {
    const greeting = 'Hello world!';
    const greeter = new Greeter(greeting);
    expect(greeter.greet()).toBe(greeting);
  });
});
