import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader;
new RevealOnScroll($('.features-item'), '85%');
new RevealOnScroll($('.testimonials'), '60%');