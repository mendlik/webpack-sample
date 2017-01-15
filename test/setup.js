// import 'babel-polyfill';
import chai from 'chai';
import sinon from 'sinon';
import jsdom from 'jsdom';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';
import * as testTypes from './testTypes';

chai.config.includeStack = true;
chai.config.showDiff = true;
chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiEnzyme());

global.document = jsdom.jsdom(`
<!DOCTYPE html>
<html>
  <body>
  </body>
</html>
`);
global.window = document.defaultView;
global.__DEV = false;
global.__TEST = true;
global.expect = chai.expect;
global.sinon = sinon;
global.shallow = shallow;
global.mount = mount;
global.render = render;

Object.assign(global, testTypes);
Object.keys(global.window)
  .filter(key => window.hasOwnProperty(key) && !(key in global))
  .forEach((key) => {
    global[key] = window[key];
  });
