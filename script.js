// const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=sandwich&cuisine=chinese&intolerances=lactose&includeIngredients=tomato%2Ccheese&fillIngredients=false&addRecipeInformation=false';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '0bc38f2652msh77a6f89cc849ed5p1e21afjsn855a2eae996d',
//         'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//     }
// };
// 


//const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=sandwich&cuisine=chinese&intolerances=lactose&includeIngredients=tomato%2Ccheese&fillIngredients=false&addRecipeInformation=false';
const APIKey = "8bf6de1b7d2c49209ba591a0f4824563";
//var recipeArr;[""]; //holds the value of the checkboxes//
//const mainDiv = document.getElementById("asCheckbox");
//var allergiesArr = ['dairy', 'egg', 'gluten', 'grain', 'peanut', 'seafood', 'sesame', 'shellfish', 'soy', 'sulfite', 'tree nuts', 'wheat'];
//var dietArr = ['gluten free', 'ketogenic', 'vegetarian', 'lactose intolerent', 'pescatarian', 'paleo', 'primal', 'ovo-vegetarian', 'vegan'];

function recipeSearch() {
    // When search button is clicked...
    // collect information about which items are clicked and their values for passing to
    // your first API.

    // Add code to ensure that all required items are checked XXXXXXXXXXXXXXXXXXXXXXXXXX

    // Find the selected cuisine -- radiobutton, select ONE choice
    let cuisineSelected; 
    let cuisineBoxes = document.querySelectorAll("[name='cuisine']"); // gets all cuisine buttons
    // Find the selected one...
    for (let b of cuisineBoxes) {
        if (b.checked) {
            cuisineSelected = b.value;
            break;
        }
    }
    
    // Find the meal type -- radiobutton...
    let recipeTypeSelected; 
    let recipeTypeBoxes = document.querySelectorAll("[name='recipeType']"); // gets all recipeType buttons
    // Find the selected one...
    for (let b of recipeTypeBoxes) {
        if (b.checked) {
            recipeTypeSelected = b.value;
            break;
        }
    }
    
    // Find allergens -- checkboxes ... might be multiple
    // Need to compare possible intolerances with those supported by the API
    // XXXXXXXXXXXXXXXXXXXXXX
    let allergiesSelected = [];
    let allergiesBoxes = document.querySelectorAll("[name='allergies']"); // gets all allergies checkboxes
    // Find the selected one...
    for (let b of allergiesBoxes) {
        if (b.checked) allergiesSelected.push(b.value);
    }
    
    let dietSelected; 
    let dietBoxes = document.querySelectorAll("[name='diet']"); // gets all cuisine buttons
    // Find the selected one...
    for (let b of dietBoxes) {
        if (b.checked) {
            dietSelected = b.value;
            break;
        }
    }

    // Take the above values and incorporate them with the API URL
    //const spoonUrl = 'https://api.spoonacular.com/recipes/complexSearch?query=sandwich&cuisine=chinese&intolerances=lactose&includeIngredients=tomato%2Ccheese&fillIngredients=false&addRecipeInformation=false&apiKey=8bf6de1b7d2c49209ba591a0f4824563'
    let apiURL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + APIKey

    // Add cuisine, diet, allergies, etc.
    apiURL += "&cuisine=" + cuisineSelected;
    apiURL += "&diet=" + dietSelected;
    apiURL += "&type=" + recipeTypeSelected;
    apiURL += "&number=4";  // limit to four recipes in the response
    
    // If any allergies were selected, add an intolerances comma-separated list
    if(allergiesSelected.length > 0) apiURL += "&intolerances=" + allergiesSelected.join(",");

    console.log(apiURL);

    // Need to URL-encode the apiURL XXXXXXXXXXXXXXXXXXXXXXXX
    // Some characters don't "send well" in a URL/URI, and need to be "enconded"
    // Examples are spaces, &, etc.
    // urlencoded changes problematic symbols to something else.
    // Space becomes %20;
    // & become &amp;


    // First fetch
    fetch(apiURL)  //  --> This ASYNC function RETURNS a PROMISE 
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


    // Second fetch to the next API
    // XXXXXXXXXXXXXXXXXXXXX
}



// retrieve checkbox value
// store checkbox value in local storage using a set function
// retrieve checkbox value and parse as a JSON string
// retrieve JSON string & display results on page 2 based on API 

// function getRecipes() {

//     const recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=sandwich&cuisine=chinese&intolerances=lactose&includeIngredients=tomato%2Ccheese&fillIngredients=false&addRecipeInformation=false&apiKey=f6d92ea502fb4f54bb179aeb2d08a3f0';
//     const spoonUrl = 'https://api.spoonacular.com/recipes/complexSearch?query=sandwich&cuisine=chinese&intolerances=lactose&includeIngredients=tomato%2Ccheese&fillIngredients=false&addRecipeInformation=false&apiKey=8bf6de1b7d2c49209ba591a0f4824563'
//     // library Axios (API request library) --> npm axios 
//     let apiKEY = ''

//     fetch(spoonUrl)  //  --> This ASYNC function RETURNS a PROMISE 
//         .then(function(response) {
//             console.log("Response Object: ", response);
//             return response.json();  // we are passing this DATA onto the following .then() callback
//         }) // returned request from API link
        
//         .then(data => {
//             console.log("Data: ", data);   // this DATA is already in JS format

//             // here we have to DIG INTO The RETURNED DATA OBJECT --> and pull out the INFOMATION WE WANT


//             // onec we have the data WE UPDATE THE DOM   --> HTMLelemtent.textContent = data.dataWeWant;
//         })
//         .catch(error => {
//             console.log("Error: ", error);
//         });
// }

//getRecipes();