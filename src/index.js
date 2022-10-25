import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import IPLocate from './ipAPI';

async function getLocation() {
  const response = await IPLocate.getLocation();
  printElements(response);
}

function printElements(response) {
  console.log(response.state_prov);
}

function handle() {
  getLocation();
}

window.addEventListener('load', function() {
  handle();
});

