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
}

/*
  let northwest = ['washingtion', 'oregon', 'idaho', 'wyoming', 'montana'];
  let southwest = ['texas', 'nevada', 'arizona', 'colorado', 'california', 'utah', 'new mexico', 'oklahoma'];
  let midwest = ['north dakota', 'south dakota', 'nebraska', 'kansas', 'minnesota', 'iowa', 'indiana', 'michigan', 'wisconsin', 'illinois', 'ohio', 'kentucky', 'missouri'];
  let south = [ 'west virginia', 'virginia', 'north carolina', 'south carolina', 'tennessee', 'mississippi', 'alabama', 'georgia', 'florida', 'arkansas'];
  let northeast = ['maine', 'new hampshire', 'vermont', 'new york', 'massaschussetts', 'connecticut', 'rhode island', 'new jersey', 'pennsylvania', 'maryland', 'delaware'];
    if (userState === pacific) {
        return produce
    }
*/

