// document.ready fucntion
$(document).ready(function () {
    console.log("ready!");
    createElements();
});


// function to generate elements dynamically
function createElements() {
    // creating datalist
    var searchedCities = $("<datalist>").attr("id", "datalistOptions");
    // will need to tell this to create options with values of the cities that have been entered. 
    // currently appended, since I don't know what this is going to look like, we'll leave it for now and once the list is work, we'll correct from there. 
    $("aside").append(searchedCities);
    // creating card for daily weather forecasts
    var dailyWeather = $("<div>").addClass("card row");
    // prepending to the body - for now - this is showing up first. I might create some divs to attach things to actually... 
    $("main").append(dailyWeather);
    // creating div for card body text for daily weather card
    var dailyWeatherBody = $("<div>").addClass("card-body");
    // appending to dailyWeather for now
    $(dailyWeather).append(dailyWeatherBody);
    // creating div for forecast cards
    var forecastDiv = $("<div>").addClass("row").attr("id", "forecast");
    // appending to the main div
    $("main").append(forecastDiv);
    // creating title for forecast div and cards
    var forecastTitle = $("<h2>").text("Five Day Forecast");
    // appending
    $("#forecast").append(forecastTitle)
    // checking to make sure this function is running
    console.log("createElemnts ran");
}

// need to add keypress event
// can I use $(this) for keypress events?
var savedText = $()


// ajax calls go here
// var cityName = 
// var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid={API key}"




// The graveyard of failed code - I may come back to this but as of right now, it is hard to generate all of these components in jQuery without stacking things on top of each other. Why is currently unclear
    // // make banner - navbar
    // var navbar = $("<div>").addClass("navbar navbar-light bg-light fixed-top nav1");
    // // header for navbar
    // var navbarText = $("<h1>").text("Weather Dashboard");
    // // appending jumbrotron to page
    // $("body").prepend(navbar);
    // // appending navbarText to navbar
    // navbar.append(navbarText);
    // div for main page content
    // var container = $("<div>").addClass("container main");
    // // add container to page
    // $("body").append(container);
    // // make main container
    // var mainContainer = $("<div>").addClass("container");
     // creates div for search group
    //  var searchDiv = $("<div>").addClass("input-group mb-3");
    //  // appends searchDiv to aside
    //  $("aside").append(searchDiv)
    //  // creates searchbar    
    //  var searchBar = $("<input>").addClass("form-contol").attr({
    //      // list: "datalistOptions",
    //      // id: "data-list",
    //      placeholder: "Type to search",
    //      type: "text",
    //      "aria-label": "text",
    //      "aria-describedby": "button-addon2"
    //  });
    //  // appends to searchDiv
    //  $(searchDiv).append(searchBar);
    //  // create button
    //  var searchBtn = $("<button>").addClass("btn btn-outline-secondary").text("Search").attr({
    //      type: "button",
    //      id: "button-addon2"
    //  });
    //  // appends button
    //  $(searchBar).append(searchBtn);
