import './components/mathCalc.js';
import './spec/tests';
import './stylesheets/style.css'

function component() {
  let element = document.createElement('div');

  element.innerHTML = 'plain webpack'
  return element;
}
document.body.appendChild(component());