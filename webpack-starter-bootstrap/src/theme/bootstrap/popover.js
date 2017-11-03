import './popper';
import './util';
import './tooltip';
import './popover.global.scss';
import popover from 'exports-loader?Popover!bootstrap/js/dist/popover';

// Requires popper: http://getbootstrap.com/docs/4.0/getting-started/introduction/#js
global.Popover = popover;

export default popover;
