import './util';
import './alert.global.scss';
import alert from 'exports-loader?Alert!bootstrap/js/dist/alert';

global.Alert = alert;

export default alert;
