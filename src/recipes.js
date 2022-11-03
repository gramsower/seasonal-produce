import Recipe from "./src/js/recipeAPI";

async function getRecipe() {
  const recipePull = jsonifiedResponse2.map(function(recipe) {
    return{
      Name: jsonifiedResponse2.title,
      Img: jsonifiedResponse2.image,
      MissedIngredients: jsonifiedResponse2.missedIngredients.map((missedIngredients) => missedIngredients.original)
    }
    displayRecipe();
  })
}

const recipeCard = document.getElementById('recipe-card-content');
const displayRecipe = (recipePull) => {
  const recipeHTMLString = getRecipe(recipePull => `
  <h3 class="RecName">${recipePull.name}</h3>
  `);
  recipeCard.innerHTML = recipeHTMLString
}


//   const response = await Recipe.getRecipe();
//   let recName = response.title;
//   let reqIngred = response.usedIngredients.original;
//   let otherIngred = response.missedIngredients.map((missedIngredients) => missedIngredients.original).join('');
//   anonfunc();
// 