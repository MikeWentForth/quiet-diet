var APIKey = "3a4b7a3f4ad0ec3d6b66fc85ea73de6e";

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// Initial page display

// Make an empty array to hold the city names
var cityArr = [];
// Load any past cities from local storage

// Display the past city searches in the correct div


// Function to read the entered city, 
// store the entry to localstorage,
// make the openweather API call,
// and display the results.
function citySearch() {

    // Get city from form
    var city = document.getElementById("cityInput").value;
    // Trim spaces
    city = city.trim();

    // If the city is not in the past city search array, 
    // then add it to the array and store the updated array in localstorage.
    // Is city in the cityArr array? (includes)
    if (cityArr.includes(city) == false) {
        // Add to beginning of array
        cityArr.unshift(city);
        displayCities();
    }

    // URL encode
    city = encodeURI(city);


    // Call API
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
    
    console.log(apiUrl);
    // fetch... then ... then...


    // Display the results

}

function displayCities() {
    // start an html string
    let html = "";

    // loop through cityArr
    for (let c of cityArr) {
        html += c + "<br>"; // create a button for each and add to html string
    }

    // push html string in to correct div on page
    document.getElementById("previousCitiesDiv").innerHTML = html;
}