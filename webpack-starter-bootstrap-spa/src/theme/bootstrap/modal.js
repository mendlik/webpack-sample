import './util';
import './modal.global.scss';
import modal from 'exports-loader?Modal!bootstrap/js/dist/modal';

global.Modal = modal;

export default modal;
