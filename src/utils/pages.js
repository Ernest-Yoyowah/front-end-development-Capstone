
const pages = new Map();
import ab from '../views/aboutpage/AboutPage';

pages.set('home', { name: 'Home', path: '/', anchorable: true });
pages.set('about', { name: 'About', path: ab, anchorable: true });
pages.set('menu', { name: 'Menu', path: '/menu', anchorable: true });

export default pages;