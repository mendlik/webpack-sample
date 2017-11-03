import * as enzyme from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';

// See: http://airbnb.io/enzyme/docs/installation/index.html#working-with-react-16
enzyme.configure({ adapter: new EnzymeReactAdapter() });
