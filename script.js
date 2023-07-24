// Setting up global variables
var APIKey = "3a4b7a3f4ad0ec3d6b66fc85ea73de6e";
var cityArr;  // Make an empty array to hold the city names
const mainDiv = document.getElementById("apiDiv");
const prevCitiesDiv = document.getElementById("previousCitiesDiv");

function startUp() {
    // Load any past cities from local storage
    var temp = localStorage.getItem("cityInput");
    // If nothing there, then set cityArr to an empty array.
    console.log(temp);
    if (temp == null) {
        cityArr = [];
    } else {
        // Otherwise, fill cityArr with content from temp.
        cityArr = JSON.parse(temp);
    }

    // Display the past city searches in the correct div
    displayCities();
}


// Function to read the entered city, 
// store the entry to localstorage,
// make the openweather API call,
// and display the results.
function citySearch(city="") {

    // If no city provided in call, look to the input field...
    if (city == "") city = document.getElementById("cityInput").value;
    // Trim spaces
    city = city.trim();
    // Optional: handle any multiple spaces too (e.g., "San    Diego")

    // Handle empty city entry XXXXXXXX

    // If the city is not in the past city search array, 
    // then add it to the array and store the updated array in localstorage.
    // Is city in the cityArr array? (includes)
    if (cityArr.includes(city) == false) {
        // Add to beginning of array
        cityArr.unshift(city);
        // Save the updated array to localstorage
        // localStorage.setItem(NAME,CONTENT)
        // Limit the size of cityArr XXXXXXXXXXXXXXXX
        localStorage.setItem("cityInput", JSON.stringify(cityArr));
        displayCities();
    }

    // URL encode
    city = encodeURI(city);

    // Call API
    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;
    
    console.log(apiUrl);
    // fetch... then ... then...
    const req = new Request(apiUrl);

    fetch(req)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error, status = ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            // Display the results
            //mainDiv.innerHTML = "<h2>RESULTS</h2>" + JSON.stringify(data);
            console.log(data);

            // What information do we need to capture from the results?
            // CURRENT/IMMEDIATE CONDITIONS DIV
            // city name, the date, an icon representation of weather conditions, 
            // name -> data.city.name
            // date -> data.list.0.dt (current timestamp -- need to convert to string)
            // icon -> data.list.0.weather.0.icon
            // the temperature, the humidity, and the the wind speed
            // temp -> data.list.0.main.temp  (need to convert from K to F)
            // hum -> data.list.0.main.humidity
            // wind -> data.list.0.wind.speed

            // convert dt to "human" date
            let weatherData = data["list"]["0"]; // shortcut helper
            let timestamp = parseInt(data["list"]["0"]["dt"]); // get timestamp from API data
            let dateObj = new Date(timestamp*1000); // creating a javascript date object from the timestamp
            // Multiplied by 1000 because the timestamp from the API is a UNIX system.
            // Javascript has to multiply a UNIX timstamp by 1000 to work correctly.
            // Use the date object to create a string with the format MM/DD/YYYY
            let dateString = dateObj.getMonth()+1 + "/" + dateObj.getDate() + "/" + dateObj.getFullYear();
            html = "<h2>" + data["city"]["name"] + " (" + dateString + ")</h2>";
            html += "<p>" + timestamp + "</p>";

            html += "<p>Humidity: " + weatherData.main.humidity + "</p>";
    

            // 5 DAY FORECAST
            // Iterate listnumber forward by 8s to get these
            // data.list.N......
            // Date, icon, temp, wind, humidity




            mainDiv.innerHTML = html;

            
        })
        .catch(console.error);
}


function displayCities() {
    // start an html string
    let html = "";

    // loop through cityArr
    // for (varname of collectionName) ...
    for (let cityName of cityArr) {
        html += `<button onclick = 'citySearch("${cityName}")'>` + cityName + "</button><br>"; // create a button for each and add to html string XXXXXXXX
    }

    // push html string in to correct div on page
    document.getElementById("previousCitiesDiv").innerHTML = html;
}

startUp();