const BASE_URL = "http://api.weatherapi.com/v1/current.json?key=75888ca454cb47b1ab9131621242606&q=";
const inputVal = document.querySelector("form input");
const btn = document.querySelector("button");
let tempHeader = document.querySelector(".temp .header2");
let humidityHeader = document.querySelector(".humidity .header2");
let windHeader = document.querySelector(".wind .header2");
let tempMsg = document.querySelectorAll(".temp .msg p");
let humMsg = document.querySelectorAll(".humidity .msg p");
let windMsg = document.querySelectorAll(".wind .msg p");
// let current = "current";
// let temp_c = "temp_c";

inputVal.addEventListener("click", (evt) => {
    evt.preventDefault();
    inputVal.value = "";
    inputVal.innerText = "";
});
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateWeather();
});

async function updateWeather() {
    let value = inputVal.value;
    let URL = `${BASE_URL}${value}&api=no`;
    let response = await fetch(URL);
    let result = await response.json();
    let temp_c = result["current"]["temp_c"];
    let humidity = result["current"]["humidity"];
    let wind_kpm = result["current"]["wind_kph"];
    tempHeader.innerText = temp_c + " °C";
    humidityHeader.innerText = humidity + "%";
    windHeader.innerText = wind_kpm + " km/hr";
    tempMsg[0].innerText = "Temperature is " + result["current"]["temp_f"] + "°F";
    tempMsg[1].innerText = "Feels like " + result["current"]["feelslike_c"] + "°C";
    tempMsg[2].innerText = "Feels like " + result["current"]["feelslike_f"] + "°F";
    humMsg[0].innerText = "Wind degree is " + result["current"]["wind_degree"];
    humMsg[1].innerText = "Dew point is " + result["current"]["dewpoint_c"] + "°C";
    humMsg[2].innerText = "Dew point is " + result["current"]["dewpoint_f"] + "°F";
    windMsg[0].innerText = "Wind speed is " + result["current"]["wind_mph"] + "min/hr";
    windMsg[1].innerText = "Wind chill is " + result["current"]["windchill_c"] + "°C";
    windMsg[2].innerText = "Wind chill is " + result["current"]["windchill_f"] + "°F";
    // console.log(result);
}



// const BASE_URL = "http://api.weatherapi.com/v1/current.json?key=75888ca454cb47b1ab9131621242606&q=India&aqi=no";

// async function trial()
// {
//     let response = await fetch(BASE_URL);
//     let result = await response.json();
//     console.log(result);
// }
// trial();


