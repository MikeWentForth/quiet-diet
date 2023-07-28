<<<<<<< HEAD
Const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=sandwich&cuisine=chinese&intolerances=lactose&includeIngredients=tomato%2Ccheese&fillIngredients=false&addRecipeInformation=false';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0bc38f2652msh77a6f89cc849ed5p1e21afjsn855a2eae996d',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
};
try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
=======
// Const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=sandwich&cuisine=chinese&intolerances=lactose&includeIngredients=tomato%2Ccheese&fillIngredients=false&addRecipeInformation=false';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '0bc38f2652msh77a6f89cc849ed5p1e21afjsn855a2eae996d',
//         'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//     }
// };
// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }
const APIKey = "bcf5a3233da6487aa683f2eee54ffaa4";
>>>>>>> 4ea175adb13e3846cfc9e14d6461d7603ea472f8


function searchRecipe() {
// When search button is clicked...
// collect information about which items are clicked and their values for passing to
// your first API.

// For radiobuttons, determine which item in the group is checked and it value.

// For checkboxes, iterate through all of them and collect the values for all checked ones.


// Once you get the response from the first API, pass its information to the 2nd API
// to get the wine recommendation.
}