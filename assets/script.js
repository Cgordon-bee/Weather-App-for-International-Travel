
var API_KEY = "17cd08020468c424106a1913f27217e9";
var citySelectionForm=$("#citySelectionForm");
var button = document.getElementById("btn");
var citySelectionInput = $("#citySelectionInput");
var city 


//Function for user's request from input form

function GetInfo(city) {

     return fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(function (res) {
        return res.json();
    

    
}).catch(function (err){
    console.log(err)
})

};

//This is the function for updating the UI once info received JQuery's shorthand to upload info to UI page
function renderCurrentWeather (dayweatherInfo) {

 

    //var card = $("<div>");
    //var temp = $("<p id='temp'></p>");
    var wind = $("<p id='wind'></p>")
    var humidity =$("<p id='humidity'></p>");



    $("#temp").text(dayweatherInfo.main.temp)
    $("#wind").text(dayweatherInfo.wind.speed)
    $("#humidity").text(dayweatherInfo.main.humidity)

    // $("#dayweatherInfo").append(temp)  
}

//This is the function to obtain the weather forecast for the 5 days - a second request to the API to obtain the Latitude and Longitude, this will then be rendered to the UI Page
   function getForeCastInfo(lat,lon) {
   return fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
   .then(function (res) {
       return res.json();
   

   
}).catch(function (err){
   console.log(err)
})


// This is the scripts that will extract the data from the json, we use the loop method to sort and then append information to the UI page
}




//onclick- this is the function that will listen for the users details in the "search city box"

$("#btn").on("click", async function (event) {
    event.preventDefault();

// jquery= j.query
city =citySelectionForm.val()
var data = await GetInfo(city)
console.log(data)
renderCurrentWeather(data)
var forcasteData = await getForeCastInfo(data.coord.lat, data.coord.lon)
console.log(forcasteData)

});





//this is the element for updating the the UI, we will use JQuery shorthand to manipulate the data



