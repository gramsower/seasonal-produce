import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { produceArrObject } from './js/produceLib';
import IPLocate from './ipAPI';

async function getLocation() {
  const response = await IPLocate.getLocation();
  let userState = response.state_prov;
  determineUserRegion(userState);
}

function determineUserRegion(userState) {
  if (userState === ('washington' || 'oregon' || 'idaho' || 'wyoming' || 'montana')) {
    // add code to alert user to their region
    // return produce <-- based on northwest region
  } else if (userState === ('texas' || 'nevada' || 'arizona' || 'colorado' || 'california' || 'utah' || 'new mexico' || 'oklahoma')) {
   // return produce <-- based on southwest region
  } else if (userState === ('north dakota' || 'south dakota' || 'nebraska' || 'kansas' || 'minnesota' || 'iowa' || 'indiana' || 'michigan' || 'wisconsin' || 'illinois' || 'ohio' || 'kentucky' || 'missouri' )) {
    //return produce <-- based on midwest region
  } else if (userState === ('west virginia' || 'virginia' || 'north carolina' || 'south carolina' || 'tennessee' || 'mississippi' || 'alabama' || 'georgia' || 'florida' || 'arkansas')) {
    // return produce <--based on south region
  } else if (userState === ('maine' || 'new hampshire' || 'vermont' || 'new york' || 'massachussetts' || 'connecticut' || 'rhode island' || 'new jersey' || 'pennsylvania' || 'maryland' || 'delaware')) {
    // return produce <-- based on northeast region
  } else {
    return 'Your location could not be determined';
  }
}

// function printElements() {
//   console.log(response.state_prov);
// }

function handle() {
  getLocation();
}

window.addEventListener('load', function() {
  document.querySelector('form').addEventListener('submit', handle());
})

const prodArrToDisp = produceArrObject;
console.log(prodArrToDisp);

const displayProduce = (prodArrToDisp) => {
  const displayDiv = document.querySelector('#card-content');
  const cardHTMLString = prodArrToDisp.map (prodArrToDisp  => `
  <li class="card">
    <h3 class="name">${prodArrToDisp.name}</h3>
    <p> Seasons Available: ${prodArrToDisp.seasons} <br>
    Info: ${prodArrToDisp.info}</p>
  </li>
  `).join('');
  displayDiv.innerHTML = cardHTMLString;
}

displayProduce(prodArrToDisp);