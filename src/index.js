import './style.scss';

const app = document.getElementById('app');

const el = document.createElement('div');
el.innerHTML = '<h1>Hello World!</h1>';
el.style.border = '1px solid gold';
app.insertAdjacentElement('beforeend', el);
