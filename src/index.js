import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { vegArrObjectAM } from './js/produceLibAM';
//import { getVegetables } from './js/produceLibAM';
//import { VegetablesNZ, FruitsNZ, LegumesNZ } from './js/produceLIBNZ';
import IPLocate from './ipAPI';
import Recipe from './recipeAPI';

async function getLocation(response) {
  const response = await IPLocate.getLocation();
  let userState = response.state_prov;
  determineUserRegion(userState);
}
async function getRecipe(searchInput) {
  const response = await Recipe.getRecipe(searchInput);
  return response;
  //need event listener that display recipes for a specific produce which would be what the searchInput parameter becomes
  //need function to display recipe options
}

function determineUserRegion(userState) {
  if (userState.toLowerCase() === ('washington' || 'oregon' || 'idaho' || 'wyoming' || 'montana')) {
    region = 'northwest';
    // return produce <-- based on northwest region
  } else if (userState.toLowerCase() === ('texas' || 'nevada' || 'arizona' || 'colorado' || 'california' || 'utah' || 'new mexico' || 'oklahoma')) {
    region = 'southwest';
    // return produce <-- based on southwest region
  } else if (userState.toLowerCase() === ('north dakota' || 'south dakota' || 'nebraska' || 'kansas' || 'minnesota' || 'iowa' || 'indiana' || 'michigan' || 'wisconsin' || 'illinois' || 'ohio' || 'kentucky' || 'missouri' )) {
    region = 'midwest';
    //return produce <-- based on midwest region
  } else if (userState.toLowerCase() === ('west virginia' || 'virginia' || 'north carolina' || 'south carolina' || 'tennessee' || 'mississippi' || 'alabama' || 'georgia' || 'florida' || 'arkansas')) {
    region = 'south';
    // return produce <--based on south region
  } else if (userState.toLowerCase() === ('maine' || 'new hampshire' || 'vermont' || 'new york' || 'massachussetts' || 'connecticut' || 'rhode island' || 'new jersey' || 'pennsylvania' || 'maryland' || 'delaware')) {
    region = 'northeast';
    // return produce <-- based on northeast region
  } else {
    return error;
  }
  regionBasedProduce(region)
}

// function regionBasedProduce(regionResult) {
//   let regionResult = determineUserRegion();
//   if (regionResult == 'northwest') {

//   } else if (regionResult == 'southwest') {

//   } else if (regionResult == 'midwest') {

//   } else if (regionResult == 'south') {

//   } else if (regionResult == 'northeast') {

//   }
//   return produce;
// }

function printElements() {
  console.log(response.state_prov);
}

function handle() {
  getLocation();
}

window.addEventListener('load', function() {
  document.querySelector('form').addEventListener('submit', handle());
})



// function getProduce() {
//   for (let i=0; i < vegArrAM.length; i++) {
//     const vegetable = new VegetablesAM.vegArrAM[i];
//     console.log(vegetable.vegArrAM)
//     produceArray.push(vegetable);
//     console.log(vegetable);
//   }
// }
// getProduce();
const vegArrayInner = vegArrObjectAM;
console.log(vegArrayInner)

const displayProduce = (vegArrayInner) => {
  const displayDiv = document.querySelector('#card-content');
  const cardHTMLString = vegArrayInner.map ( vegArrayInner => `
  <li class="card">
    <h3 class="name">${vegArrayInner.vegName}</h3>
    <p> Seasons Available: ${vegArrayInner.vegSeason} <br>
    ${vegArrayInner.vegInfo}</p>
  </li>
  `).join('');
  displayDiv.innerHTML = cardHTMLString;
}

displayProduce(vegArrayInner);