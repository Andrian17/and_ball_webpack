import 'regenerator-runtime';
import '../public/style/style.css';
import swRegister from './utils/sw-register.js';

import main from './view/main';

// document.addEventListener('DOMContentLoaded', main);
window.addEventListener('load', () => {
  main();
  swRegister();
});
