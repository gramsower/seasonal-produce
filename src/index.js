import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { vegArrObjectAM } from './js/produceLibAM';
import { getVegetables } from './js/produceLibAM';
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

vegArrObjectAM.map;


// function getProduce() {
//   for (let i=0; i < vegArrAM.length; i++) {
//     const vegetable = new VegetablesAM.vegArrAM[i];
//     console.log(vegetable.vegArrAM)
//     produceArray.push(vegetable);
//     console.log(vegetable);
//   }
// }
// getProduce();

// const displayProduce = (vegetable) => {
//   const displayDiv = document.querySelector('#card-content');
//   const cardHTMLString = vegArr.map ( vegetable => `
//   <`)
// }