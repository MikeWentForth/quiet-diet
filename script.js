// const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=sandwich&cuisine=chinese&intolerances=lactose&includeIngredients=tomato%2Ccheese&fillIngredients=false&addRecipeInformation=false';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '0bc38f2652msh77a6f89cc849ed5p1e21afjsn855a2eae996d',
//         'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//     }
// };
// 


const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=sandwich&cuisine=chinese&intolerances=lactose&includeIngredients=tomato%2Ccheese&fillIngredients=false&addRecipeInformation=false';
const APIKey = "0bc38f2652msh77a6f89cc849ed5p1e21afjsn855a2eae996d";
var recipeArr;[""]; //holds the value of the checkboxes//
const mainDiv = document.getElementById("asCheckbox");
var allergiesArr = ['dairy', 'egg', 'gluten', 'grain', 'peanut', 'seafood', 'sesame', 'shellfish', 'soy', 'sulfite', 'tree nuts', 'wheat'];
var dietArr = ['gluten free', 'ketogenic', 'vegetarian', 'lactose intolerent', 'pescatarian', 'paleo', 'primal', 'ovo-vegetarian', 'vegan'];

function searchRecipe() {
    // When search button is clicked...
    // collect information about which items are clicked and their values for passing to
    // your first API.

    var cuisineBox = localStorage.getElementsByClassName("asCheckbox");

    // For radiobuttons, determine which item in the group is checked and its value.

    var typeBox = localStorage.getElementById("");

    // For checkboxes, iterate through all of them and collect the values for all checked ones.

    var cuisineBox = localStorage.getElementsByClassName("asCheckbox");


    // Once you get the response from the first API, pass its information to the 2nd API
    // to get the wine recommendation.
}



// retrieve checkbox value
// store checkbox value in local storage using a set function
// retrieve checkbox value and parse as a JSON string
// retrieve JSON string & display results on page 2 based on API 

function getRecipes() {

    const recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=sandwich&cuisine=chinese&intolerances=lactose&includeIngredients=tomato%2Ccheese&fillIngredients=false&addRecipeInformation=false?apiKey=f6d92ea502fb4f54bb179aeb2d08a3f0';
    const spoonUrl = 'https://api.spoonacular.com/recipes/complexSearch?query=sandwich&cuisine=chinese&intolerances=lactose&includeIngredients=tomato%2Ccheese&fillIngredients=false&addRecipeInformation=false&apiKey=8bf6de1b7d2c49209ba591a0f4824563'
    // library Axios (API request library) --> npm axios 
    let apiKEY = ''

    fetch(spoonUrl)  //  --> This ASYNC function RETURNS a PROMISE 
        .then(function(response) {
            console.log("Response Object: ", response);
            return response.json();  // we are passing this DATA onto the following .then() callback
        }) // returned request from API link
        
        .then(data => {
            console.log("Data: ", data);   // this DATA is already in JS format

            // here we have to DIG INTO The RETURNED DATA OBJECT --> and pull out the INFOMATION WE WANT


            // onec we have the data WE UPDATE THE DOM   --> HTMLelemtent.textContent = data.dataWeWant;
        })
        .catch(error => {
            console.log("Error: ", error);
        });
}

getRecipes();