import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './views/components/app-bar';
import './views/components/hero-element';
import './views/components/search-bar';
import './views/components/loader-restaurants';
import './views/components/foot-bar';
import '@fortawesome/fontawesome-free/js/all';
import App from './views/app';
import swRegister from './utils/sw-register';

const skipLink = document.querySelector('.skip-link');
const app = new App({
  open: document.querySelector('#menu_open'),
  drawer: document.querySelector('#drawer'),
  close: document.querySelector('#menu_close'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

skipLink.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('#maincontent').focus();
  }
});
