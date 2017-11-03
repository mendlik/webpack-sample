import './popper';
import './util';
import './tooltip.global.scss';
import tooltip from 'exports-loader?Tooltip!bootstrap/js/dist/tooltip';

// Requires popper: http://getbootstrap.com/docs/4.0/getting-started/introduction/#js
global.Tooltip = tooltip;

export default tooltip;
