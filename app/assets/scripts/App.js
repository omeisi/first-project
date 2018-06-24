import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
var modal = new Modal();

new RevealOnScroll($('.features-item'), '85%');
new RevealOnScroll($('.testimonials'), '60%');
