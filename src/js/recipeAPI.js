export default class Recipe {
  static async getRecipe(searchWord) {
    try {
      //note where is says yogurt is where the produce would go
      const response = await fetch (`https://api.spoonacular.com/food/products/search?query=${searchWord}&apiKey=${process.env.API_TWO}`);
      const jsonifiedResponse2 = await response.json();
      if (!response.ok) {
        const errorMessage2 = `${response.status} ${response.statusText} ${jsonifiedResponse2.message}`;
        throw new Error (errorMessage2);
      }
      return jsonifiedResponse2;
    } catch(error) {
      return error;
    }
  }
 }
 