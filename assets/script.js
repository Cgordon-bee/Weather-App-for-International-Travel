var API_KEY = "1d7f4a93892a901d16a2035551c08c50";
var generateEndPoint = "city";
var citySelectionForm = "citySelection";
var citySelectionInput = "input";
var weatherCard = "weatherForecast";
var citySelectionInput = $("#citySelectionInput");



function generateUrl (city) {




}
function generateEndPoint (city) {
    var NUMBER_OF_DAYS_TO_REQUEST = 5; 

    return `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${NUMBER_OF_DAYS_TO_REQUEST}&appid=${API_KEY}`;



}

function makeRequest (endPoint) {
    return fetch (EndPoint).then(function (res) {
    return res.json();


});

}


function creatWeatherCard (dayweatherInfo) {

var card = $("<div>");
var temp = $("<p>");
var humidity =$ ("<p>");

citySelectionForm.on ("submit"); function (event) {
event.preventdefault();

var selectedcity = citySelectionInput.valueOf();
}

}

