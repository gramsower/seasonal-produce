import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { produceArrObject } from './js/produceLib';
import IPLocate from './ipAPI';
import Recipe from './recipeAPI';

async function getLocation() {
  const response = await IPLocate.getLocation();
  let userState = response.state_prov;
  let dateReturned = response.time_zone.current_time;
  let date = dateReturned.slice(5, 10);
  determineUserRegion(userState);
}
async function getRecipe(searchInput) {
  const response = await Recipe.getRecipe(searchInput);
  return response;
  //need event listener that display recipes for a specific produce which would be what the searchInput parameter becomes
  //need function to display recipe options
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
    return 'Your location could not be determined, no region available';
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

const prodArrToDisp = produceArrObject;
console.log(prodArrToDisp);

const displayProduce = (prodArrToDisp) => {
  const displayDiv = document.querySelector('#card-content');
  const cardHTMLString = prodArrToDisp.map (prodArrToDisp  => `
  <div class="card">
    <h3 class="name">${prodArrToDisp.name}</h3>
    <p class="info-p"> Seasons Available: ${prodArrToDisp.season} <br>
    Info: ${prodArrToDisp.info}</p>
  </div>
  `).join('');
  displayDiv.innerHTML = cardHTMLString;
};

displayProduce(prodArrToDisp);