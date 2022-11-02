export default class Recipe {
  static async getRecipe(searchWord) {
    try {
      const response = await fetch (`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${selected_produce}&number=5&apiKey=${process.env.RECIPE_API}`);
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
 


// async function getRecipe(data) { 
//   const response = await Recipe.getRecipe(data);
//   return response;
// need function to determine which recipes we need to call for the respective produce
// Promise.all needs to be used? (loop through array, from function that determines which produce need to be displayed, and make an API call for each produce in the array)
//}
// ex.
//let promiseArray = [];
// for(let i = 0; i < data.length; i++){
//   var apiRequest = http.request({
//       ....
//     }
//    });
//   promiseArray.push(apiRequest)
// }

// Promise.all(promiseArray)
// .then(fn)
// .catch(fn)
//then we need a function to display the recipes 
//

