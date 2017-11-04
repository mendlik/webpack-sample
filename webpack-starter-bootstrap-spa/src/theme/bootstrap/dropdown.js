import './popper';
import './util';
import './dropdown.global.scss';
import dropdown from 'exports-loader?Dropdown!bootstrap/js/dist/dropdown';

// Requires popper: http://getbootstrap.com/docs/4.0/getting-started/introduction/#js
global.Dropdown = dropdown;

export default dropdown;
