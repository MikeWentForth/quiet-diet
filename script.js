

// // Mike: im guessing after click search on page one we would wanna be directed to page two -oscar
// function Redirect() {
//     //window.location.assign("./results.html") <--*this one automatically redirects to page without having to press the searchButton so its a no go but ill leave it there 
//     document.getElementById("searchButton").onclick = function () {
//         location.href = "./results.html";
//     };
// }


const APIKey = "8bf6de1b7d2c49209ba591a0f4824563";

function recipeSearch() {
    // When search button is clicked...
    // collect information about which items are clicked and their values for passing to
    // your first API.

    // Find the selected cuisine -- radiobutton, select ONE choice
    let cuisineSelected = null;
    let cuisineBoxes = document.querySelectorAll("[name='cuisine']"); // gets all cuisine buttons
    // Find the selected one...
    for (let b of cuisineBoxes) {
        if (b.checked) {
            cuisineSelected = b.value;
            break;
        }
    }

    // Find the meal type -- radiobutton...
    let recipeTypeSelected = null;
    let recipeTypeBoxes = document.querySelectorAll("[name='recipeType']"); // gets all recipeType buttons
    // Find the selected one...
    for (let b of recipeTypeBoxes) {
        if (b.checked) {
            recipeTypeSelected = b.value;
            break;
        }
    }

    // Find allergens -- checkboxes ... might be multiple
    let allergiesSelected = [];
    let allergiesBoxes = document.querySelectorAll("[name='allergies']"); // gets all allergies checkboxes
    // Find the selected one...
    for (let b of allergiesBoxes) {
        if (b.checked) allergiesSelected.push(b.value);
    }

    let dietSelected = null;
    let dietBoxes = document.querySelectorAll("[name='diet']"); // gets all cuisine buttons
    // Find the selected one...
    for (let b of dietBoxes) {
        if (b.checked) {
            dietSelected = b.value;
            break;
        }
    }

    // If any of the radio selections are still null, alert the user and do no proceed.
    if (dietSelected == null || recipeTypeSelected == null || cuisineSelected == null) {
        alert("please enter in all fields silly :)");
        return false;
    }


    // Take the above values and incorporate them with the API URL
    let apiURL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + APIKey

    // Add cuisine, diet, allergies, etc.
    apiURL += "&cuisine=" + cuisineSelected;
    apiURL += "&diet=" + dietSelected;
    apiURL += "&type=" + recipeTypeSelected;
    apiURL += "&number=4";  // limit to four recipes in the response

    // If any allergies were selected, add an intolerances comma-separated list
    if (allergiesSelected.length > 0) apiURL += "&intolerances=" + allergiesSelected.join(",");

    console.log(apiURL);

    // Need to URL-encode the apiURL XXXXXXXXXXXXXXXXXXXXXXXX
    // Some characters don't "send well" in a URL/URI, and need to be "enconded"
    // Examples are spaces, &, etc.
    // urlencoded changes problematic symbols to something else.
    // Space becomes %20;
    // & become &amp;


    // First fetch
    fetch(apiURL)  //  --> This ASYNC function RETURNS a PROMISE 
        .then(function (response) {
            console.log("Response Object: ", response);
            return response.json();  // we are passing this DATA onto the following .then() callback
        }) // returned request from API link

        .then(data => {
            console.log("Data: ", data);   // this DATA is already in JS format

            // here we have to DIG INTO The RETURNED DATA OBJECT --> and pull out the INFOMATION WE WANT

            // if no recipes are returned, then alert and leave on main page
            if (data.totalResults == 0) {
                alert("No recipes were found that match the entries.");
                return false;
            }

            // Display each recipe -- up to four -- in the main div area.
            // Change content of lookingFor div
            document.getElementById("lookingFor").innerHTML = "<h2>Possible Recipes</h2>";

            let newHTML = "";
            // Loop through data.results to show recipes
            for (let recipe of data.results) {
                newHTML += "<div class='cell recipeDiv centered'>\n";
                newHTML += `<img src="${recipe.image}"><br><p>${recipe.title}</p>\n`;
                newHTML += `<button onclick='getCalories("${recipe.title}");'>Generate Calories</button><br>`;
                newHTML += `<button onclick='getRecipeDetail("${recipe.id}");'>Show recipe detail</button>`;
                newHTML += "</div>\n";
            }

            // Change content of recipeDivContainer div
            document.getElementById("recipeDivContainer").innerHTML = newHTML;

            // Add a click listener to each recipe such that, when clicked, it contacts the 2nd API
            // to get calorie info, and then displays approximate calories via alert popup or similar.

            document.getElementById("allReady").style.display = "none";
            document.getElementById("startOver").style.display = "block";




            // once we have the data WE UPDATE THE DOM   --> HTMLelemtent.textContent = data.dataWeWant;
        })
        .catch(error => {
            console.log("Error: ", error);
        });

}

function reset() {
    location.href = "./index.html";
}


function getCalories(mealName) {

    const calURL = "https://api.api-ninjas.com/v1/nutrition?query=" + encodeURI(mealName);
    const calKey = "yOZjsLfNiBnnxksT1YErEw==XdTPQCPOBEIRMzSU";

    const options = {
        method: 'GET',
        headers: {'X-API-Key': calKey}
    };

    fetch(calURL, options)  //  --> This ASYNC function RETURNS a PROMISE 
    .then(function (response) {
        console.log("Response Object: ", response);
        return response.json();  // we are passing this DATA onto the following .then() callback
    }) // returned request from API link

    .then(data => {
        console.log("Data: ", data);   // this DATA is already in JS format
        let calories = 0;
        // Loop through items.
        for (let i of data) {
            // Total calories for all.
            calories += i.calories;
        }

        calories = Math.floor(calories);
        // Display in an alert
        alert(calories + " estimated calories.");

    })
    .catch(error => {
        console.log("Error: ", error);
    });
    
}

//2nd API nutrientninja
// key = lhYNdB5J4lLMfKvYfIWWkGCM5iBc1BBoLS5acv3u

// const APInutkey = lhYNdB5J4lLMfKvYfIWWkGCM5iBc1BBoLS5acv3u

// var nutquery = localStorage.getItem() //<---here we wanna grab data thats saved result on local so the 2nd api can read it not sure if we have to leave it as a string 

// const urlNut = "https://api.calorieninjas.com/v1/nutrition?query=" + nutquery// const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=sandwich&cuisine=chinese&intolerances=lactose&includeIngredients=tomato%2Ccheese&fillIngredients=false&addRecipeInformation=false';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '0bc38f2652msh77a6f89cc849ed5p1e21afjsn855a2eae996d',
//         'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//     }
// };
// 






