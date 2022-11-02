import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { produceArrObject, northEastFall, northEastSpring, northEastSummer, northEastWinter, northWestSpring, northWestSummer, northWestFall, northWestWinter, southWestFall, southWestSpring, southWestSummer, southWestWinter, midWestFall, midWestSpring, midWestSummer, midWestWinter, southFall, southSpring, southSummer, southWinter} from './js/produceLib';
import IPLocate from './js/ipAPI';
import { determineUserRegion } from './js/seasonality';
//import Recipe from './js/recipeAPI';

async function getLocation() {
  const response = await IPLocate.getLocation();
  let userState = response.state_prov;
  let dateReturned = response.time_zone.current_time;
  let date = dateReturned.slice(5, 10);
  determineProduce(determineUserRegion(userState), determineUserSeason(date));
}

function determineUserSeason(date) {
  let month = date.slice(0, 2);
  let day = date.slice(3, 5);
  let season;
  if (month === '01' || month === '02') {
    season =  'winter';
  } else if (month === '03' && day <= '20') {
    season = 'winter';
  } else if (month === '03') {
    season = 'spring';
  } else if (month === '04' || month === '05') {
    season = 'spring';
  } else if (month === '06' && day <= '20') {
    season = 'spring';
  } else if (month === '06') {
    season = 'summer';
  } else if (month === '07' || month === '08') {
    season = 'summer';
  } else if (month === '09' && day <= '20') {
    season = 'summer';
  } else if (month === '09') {
    season = 'fall';
  } else if (month === '10' || month === '11') {
    season = 'fall';
  } else if (month === '12' && day <= '20') {
    season = 'fall';
  } else if (month === '12') {
    season = 'winter';
  } else {
    season = 'error getting the current season in your location';
  }
  return season;
}

function determineProduce(region, season) {
  let produceArray = [];
  if (region === 'northwest' && season === 'fall') {
    produceArray = northWestFall;
  } else if (region === 'northwest' && season === 'winter') {
    produceArray = northWestWinter;
  } else if (region === 'northwest' && season === 'spring') {
    produceArray = northWestSpring;
  } else if (region === 'northwest' && season === 'summer') {
    produceArray = northWestSummer;
  } else if (region === 'southwest' && season === 'winter') {
    produceArray = southWestWinter;
  } else if (region === 'southwest' && season === 'spring') {
    produceArray = southWestSpring;
  } else if (region === 'southwest' && season === 'summer') {
    produceArray = southWestSummer;
  } else if (region === 'southwest' && season === 'fall') {
    produceArray = southWestFall;
  } else if (region === 'midwest' && season === 'winter') {
    produceArray = midWestWinter;
  } else if (region === 'midwest' && season === 'spring') {
    produceArray = midWestSpring;
  } else if (region === 'midwest' && season === 'fall') {
    produceArray = midWestFall;
  } else if (region === 'midwest' && season === 'summer') {
    produceArray = midWestSummer;
  } else if (region === 'south' && season === 'winter') {
    produceArray = southWinter;
  } else if (region === 'south' && season === 'spring') {
    produceArray = southSpring;
  } else if (region === 'south' && season === 'summer') {
    produceArray = southSummer;
  } else if (region === 'south' && season === 'fall') {
    produceArray = southFall;
  } else if (region === 'northeast' && season === 'winter') {
    produceArray = northEastWinter;
  } else if (region === 'northeast' && season === 'spring') {
    produceArray = northEastSpring;
  } else if (region === 'northeast' && season === 'summer') {
    produceArray = northEastSummer;
  } else if (region === 'northeast' && season === 'fall') {
    produceArray = northEastFall;
  } else {
    produceArray = produceArrObject;
  }
  displayProduce(produceArray);
}

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

function loadProduce(event) {
  event.preventDefault();
  getLocation();
}

// add event listener for click on produce card
// use template literal to call recipe API and return 5 recipes containing the selected produce

window.addEventListener('load', function() {
  document.querySelector("#produce").addEventListener("click", loadProduce);
});
