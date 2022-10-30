import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { produceArrObject } from './js/produceLib';
import IPLocate from './js/ipAPI';
//import Recipe from './js/recipeAPI';


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
  } else if (userState === ('maine' || 'new hampshire' || 'vermont' || 'new york' || 'massachusetts' || 'connecticut' || 'rhode island' || 'new jersey' || 'pennsylvania' || 'maryland' || 'delaware')) {
    return 'northeast';
  } else {
    return 'Your location could not be determined, no region available';
  }
}

function determineUserSeason(date) {
  let month = date.slice(0, 2);
  let day = date.slice(3, 5);
  if (month === ('01' || '02')) {
    return 'winter';
  } else if (month === '03' && day <= '20') {
    return 'winter';
  } else if (month === '03') {
    return 'spring';
  } else if (month === ('04' || '05')) {
    return 'spring';
  } else if (month === '06' && day <= '20') {
    return 'spring';
  } else if (month === '06') {
    return 'summer';
  } else if (month === ('07' || '08')) {
    return 'summer';
  } else if (month === '09' && day <= '20') {
    return 'summer';
  } else if (month === '09') {
    return 'fall';
  } else if (month === ('10' || '11')) {
    return 'fall';
  } else if (month === '12' && day <= '20') {
    return 'fall';
  } else if (month === '12') {
    return 'winter';
  } else {
    return 'error getting the current season in your location';
  }
}

//function determineProduce(determineUserRegion, determineUserSeason) {
// let produceArray = [];
// produceArray.push(produce);
// }
// ??? think Jonathan was working on using switch cases that determines only the seasonal availability of produces and not region based availability


const prodArrToDisp = produceArrObject;
console.log(prodArrToDisp);

//function produceDisplay(determineProduce) { **not final function just a general idea**
// let produceArray = [];
// 
// for (let i = 0; i < prodArrToDisp.length; i++) {
//  for (let j = 0; j < determineProduce.length; j++) {
//   if (prodArrToDisp[i] === determineProduce[j]) {
//      produceArray.push(prodArrToDisp[i]);
//   }      
//  }
// }
//}
//function to compare produce we need to display (determined by region and season), put this result into displayProduce()

const displayProduce = (prodArrToDisp) => {
  const displayDiv = document.querySelector('#card-content');
  const cardHTMLString = prodArrToDisp.map (prodArrToDisp  => `
  <div class="card">
    <img class="card-img" src="${prodArrToDisp.img}" alt="produce image">
    <h3 class="name">${prodArrToDisp.name}</h3>
    <strong>Info:</strong> ${prodArrToDisp.info}</p>
  </div>
  `).join('');
  displayDiv.innerHTML = cardHTMLString;
};

displayProduce(prodArrToDisp);

function handle() {
  getLocation();
}

window.addEventListener('load', function() {
  handle();
});

// when browser loads it gets user's location and date (based on IP address) 
// then location is passed into a function that determines user's region 
// the date is passed into a function that determines season 
// both season and region are passed into a function that determines what produce are available in that season and region
// when it determines which produces to display, it passes it into a function that displays those produce and it's details
// then for each produce that's displayed
// STRETCH GOALS WITH RECIPE API
// it will make api recipe calls for each produce that is displayed
// it will display the recipes for each produce