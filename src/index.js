import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { vegArrObjectAM } from './js/produceLibAM';
//import { getVegetables } from './js/produceLibAM';
//import { VegetablesNZ, FruitsNZ, LegumesNZ } from './js/produceLIBNZ';
import IPLocate from './js/ipAPI';


async function getLocation() {
  const response = await IPLocate.getLocation();
  let userState = response.state_prov;
  let dateReturned = response.time_zone.current_time;
  let date = dateReturned.slice(5, 10);
  determineUserRegion(userState);
  determineUserSeason(date);
}

function determineUserRegion(userState) {
  if (userState === ('washington' || 'oregon' || 'idaho' || 'wyoming' || 'montana')) {
    return 'northwest';
  } else if (userState === ('texas' || 'nevada' || 'arizona' || 'colorado' || 'california' || 'utah' || 'new mexico' || 'oklahoma')) {
    return 'southwest';
  } else if (userState === ('north dakota' || 'south dakota' || 'nebraska' || 'kansas' || 'minnesota' || 'iowa' || 'indiana' || 'michigan' || 'wisconsin' || 'illinois' || 'ohio' || 'kentucky' || 'missouri')) {
    return 'midwest';
  } else if (userState === ('west virginia' || 'virginia' || 'north carolina' || 'south carolina' || 'tennessee' || 'mississippi' || 'alabama' || 'georgia' || 'florida' || 'arkansas')) {
    return 'south';
  } else if (userState === ('maine' || 'new hampshire' || 'vermont' || 'new york' || 'massachussetts' || 'connecticut' || 'rhode island' || 'new jersey' || 'pennsylvania' || 'maryland' || 'delaware')) {
    return 'northeast';
  } else {
    return 'error, no region available';
  }
}

function determineUserSeason(date) {
  let month = date.slice(0,2);
  let day = date.slice(3, 5);
 // console.log(day);
  if (month === ('10' || '11')) {
    return 'fall';
  } else if (month == ('1' || '2')) {
    return'winter';
  } else if (month == ('4' || '5')) {
    return 'spring';
  } else if (month == ('7' || '8')) {
    return 'summer';
  } else {
    return 'error retreiving season';
  }
}

//function printElements() {
//   console.log(response.state_prov);
// }

function handle() {
  getLocation();
}

window.addEventListener('load', function() {
  document.querySelector('form').addEventListener('submit', handle());
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
};

displayProduce(vegArrayInner);