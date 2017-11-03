import './util';
import './carousel.global.scss';
import carousel from 'exports-loader?Carousel!bootstrap/js/dist/carousel';

global.Carousel = carousel;

export default carousel;
