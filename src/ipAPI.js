export default class IPLocate {
  static async getLocation() {
    try {
      const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.API_KEY}`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error (errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }

  
  /*
  async function userRegion(location[I am not sure we need to pass an argument here]) {
      let userState = await IPLocateresponse.state_prov;
      let pacific = ['washingtion', 'oregon', 'california', 'hawaii', 'alaska'];
      let mountain = ['idaho', 'nevada', 'arizona', 'colorado', 'montana', 'wyoming', 'utah', 'new mexico'];
      let westNorthCentral = ['north dakota', 'south dakota', 'nebraska', 'kansas', 'minnesota', 'iowa',];
      let eastNorthCentral = ['michigan', 'wisconsin', 'illinois', 'indiana', 'ohio'];
      let westSouthCentral = ['texas', 'oklahoma', 'arkansas', 'louisiana'];
      let eastSouthCentral = ['kentucky', 'tennessee', 'mississippi', 'alabama'];
      let southAtlantic = ['georgia', 'florida', 'south carolina', 'north carolina', 'virginia', 'west virginia', 'washington dc', 'maryland', 'delaware'];
      let midAtlantic = ['new york', 'new jersey', 'pennsylvania'];
      let newEngland = ['maine', 'vermont', 'new hampshire', 'massachusetts', 'connecticut', 'rhode island'];
      if (userState === pacific) {
        return produce
      } else if (userState == mountain) {

      } else if (userState === westNorthCentral) {

      } else if (userState == eastNorthCentral) {

      } else if (userState == westSouthCentral) {

      } else if (userState == eastSouthCentral) {

      } else if (userState == southAtlantic) {

      } else if (userState == midAtlantic) {

      } else if (userState == newEngland) {

      }
  }
  */
}


