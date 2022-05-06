import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/detail.css';
import '../styles/header.css';
import '../styles/hero.css';
import '../styles/help-form.css';
import '../styles/responsive.css';
import '../public/images/heros/hero-image_2-large.jpg';
import '../public/images/heros/hero-image_2-small.jpg';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';

const app = new App({
  button: document.querySelector('#drawerMenu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
  help: document.querySelector('#helpButton'),
  skip: document.querySelector('#skipContent'),
});

window.addEventListener('load', ()=> {
  app.renderPage();
  swRegister();
});

window.addEventListener('hashchange', ()=>{
  app.renderPage();
});
