import 'regenerator-runtime';
import '../styles/main.css';
import '../public/images/heros/hero-image_2.jpg';
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
