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