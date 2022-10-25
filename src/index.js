import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import IPLocate from './ipAPI';

async function getLocation() {
  const response = await IPLocate.getLocation();
  if (response.main) {
    printElements(response);
  } else {
    printError(response);
  }
}

function printElements(response) {
  //`${reponse}`;
}

function printError(error) {
  //`${error}`;
}

function handle() {
  getLocation();
}

window.addEventListener('load', function() {
  handle();
})