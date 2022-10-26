import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { vegArrObjectAM } from './js/produceLibAM';
//import { getVegetables } from './js/produceLibAM';
//import { VegetablesNZ, FruitsNZ, LegumesNZ } from './js/produceLIBNZ';
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