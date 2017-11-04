import './util';
import './button.global.scss';
import button from 'exports-loader?Button!bootstrap/js/dist/button';

global.Button = button;

export default button;
