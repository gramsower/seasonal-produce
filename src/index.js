import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { produceArrObject, northEastFall, northEastSpring, northEastSummer, northEastWinter, northWestSpring, northWestSummer, northWestFall, northWestWinter, southWestFall, southWestSpring, southWestSummer, southWestWinter, midWestFall, midWestSpring, midWestSummer, midWestWinter, southFall, southSpring, southSummer, southWinter} from './js/produceLib';
import IPLocate from './js/ipAPI';
// import Recipe from './js/recipeAPI';
// import determineSeason from './js/seasonality';


async function getLocation() {
  const response = await IPLocate.getLocation();
  let userState = response.state_prov;
  let dateReturned = response.time_zone.current_time;
  let date = dateReturned.slice(5, 10);
  determineUserRegion(userState);
  determineUserSeason(date);
}

function determineUserRegion(userState) {
  let region;
  if (userState.toLowerCase() === ('washington' || 'oregon' || 'idaho' || 'wyoming' || 'montana')) {
    region = 'northwest';
  } else if (userState.toLowerCase() === ('texas' || 'nevada' || 'arizona' || 'colorado' || 'california' || 'utah' || 'new mexico' || 'oklahoma')) {
    region = 'southwest';
  } else if (userState.toLowerCase() === ('north dakota' || 'south dakota' || 'nebraska' || 'kansas' || 'minnesota' || 'iowa' || 'indiana' || 'michigan' || 'wisconsin' || 'illinois' || 'ohio' || 'kentucky' || 'missouri')) {
    region = 'midwest';
  } else if (userState.toLowerCase() === ('west virginia' || 'virginia' || 'north carolina' || 'south carolina' || 'tennessee' || 'mississippi' || 'alabama' || 'georgia' || 'florida' || 'arkansas')) {
    region = 'south';
  } else if (userState.toLowerCase() === ('maine' || 'new hampshire' || 'vermont' || 'new york' || 'massachusetts' || 'connecticut' || 'rhode island' || 'new jersey' || 'pennsylvania' || 'maryland' || 'delaware')) {
    region = 'northeast';
  } else {
    region = 'Your location could not be determined, no region available';
  } console.log(region);
  return region;
  
}

function determineUserSeason(date) {
  let month = date.slice(0, 2);
  let day = date.slice(3, 5);
  let season;
  // console.log(month);
  // console.log(day);
  if (month === ('01' || '02')) {
    season =  'winter';
  } else if (month === '03' && day <= '20') {
    season = 'winter';
  } else if (month === '03') {
    season = 'spring';
  } else if (month === ('04' || '05')) {
    season = 'spring';
  } else if (month === '06' && day <= '20') {
    season = 'spring';
  } else if (month === '06') {
    season = 'summer';
  } else if (month === ('07' || '08')) {
    season = 'summer';
  } else if (month === '09' && day <= '20') {
    season = 'summer';
  } else if (month === '09') {
    season = 'fall';
  } else if (month === ('10' || '11')) {
    season = 'fall';
  } else if (month === '12' && day <= '20') {
    season = 'fall';
  } else if (month === '12') {
    season = 'winter';
  } else {
    season = 'error getting the current season in your location';
  }
  console.log(season);
  return season;
}


function determineProduce(userRegion, userSeason) {
  // let produceArray = [];
  // let userRegion = determineUserRegion;
  // let userSeason = determineUserSeason;
  if (userRegion === 'northwest' && userSeason === 'fall') {
    return northWestFall;
  } else if (userRegion === 'northwest' && userSeason === 'winter') {
    return northWestWinter;
  } else if (userRegion === 'northwest' && userSeason === 'spring') {
    return northWestSpring;
  } else if (userRegion === 'northwest' && userSeason === 'summer') {
    return northWestSummer;
  } else if (userRegion === 'southwest' && userSeason === 'winter') {
    return southWestWinter;
  } else if (userRegion === 'southwest' && userSeason === 'spring') {
    return southWestSpring;
  } else if (userRegion === 'southwest' && userSeason === 'summer') {
    return southWestSummer;
  } else if (userRegion === 'southwest' && userSeason === 'fall') {
    return southWestFall;
  } else if (userRegion === 'midwest' && userSeason === 'winter') {
    return midWestWinter;
  } else if (userRegion === 'midwest' && userSeason === 'spring') {
    return midWestSpring;
  } else if (userRegion === 'midwest' && userSeason === 'fall') {
    return midWestFall;
  } else if (userRegion === 'midwest' && userSeason === 'summer') {
    return midWestSummer;
  } else if (userRegion === 'south' && userSeason === 'winter') {
    return southWinter;
  } else if (userRegion === 'south' && userSeason === 'spring') {
    return southSpring;
  } else if (userRegion === 'south' && userSeason === 'summer') {
    return southSummer;
  } else if (userRegion === 'south' && userSeason === 'fall') {
    return southFall;
  } else if (userRegion === 'northeast' && userSeason === 'winter') {
    return northEastWinter;
  } else if (userRegion === 'northeast' && userSeason === 'spring') {
    return northEastSpring;
  } else if (userRegion === 'northeast' && userSeason === 'summer') {
    return northEastSummer;
  } else if (userRegion === 'northeast' && userSeason === 'fall') {
    return northEastFall;
  } else {
    return produceArrObject;
  }
}

const prodArrToDisp = determineProduce();
console.log(prodArrToDisp);

const displayProduce = (prodArrToDisp) => {
  const displayDiv = document.querySelector('#card-content');
  const cardHTMLString = prodArrToDisp.map (prodArrToDisp  => `
  <div class="card">
    <img class="card-img" src="src/img/${prodArrToDisp.img}" alt="produce image">
    <h3 class="name">${prodArrToDisp.name}</h3>
    <p class="info-p"> Seasons Available: ${prodArrToDisp.season} <br>
    Info: ${prodArrToDisp.info}</p>
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