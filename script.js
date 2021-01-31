// document.ready fucntion
$(document).ready(function () {
    console.log("ready!");
});

// gets today's date
var todaysDate = new Date().toLocaleDateString();

// clicking the button should trigger local storage and ajax calls
$("#button-addon2").click(function () {
    $(this);
    // gets value from the search bar
    var savedCity = $("#data-list").val();
    console.log(savedCity);
    // localStorage.setItem("save", savedCity);

    // var cityName = []
    // cityName = savedCity
    // console.log("city name " + cityName
    $("main").empty();
    createElements();
    // call ajax function
    callWeather(savedCity);
    callForecast(savedCity);
    addToList(savedCity);
    // to clear search box
    $("#data-list").val("");
});


// enter button handler - because of the way I wrote these functions I had to repeat everything. I would figure out a way to do this differently next time. 
$(document).on('keypress', function (e) {
    if (e.which == 13) {
        var savedCity = $("#data-list").val();
        console.log(savedCity);
        // localStorage.setItem("save", savedCity);

        $("main").empty();
        // calling functions
        createElements();
        callForecast(savedCity);
        callWeather(savedCity);
        addToList(savedCity);
        // to clear search box
        $("#data-list").val("");

    }
});

// searches based off the list
$("#save").on("click", "button", function () {
    //   sets variable for targeted button
    var searchMe = $(this).text();
    $("main").empty();
    createElements(searchMe);
    // call ajax function
    callWeather(searchMe);
    callForecast(searchMe);
});



// adds cities to list
function addToList(savedCity) {
    var cityList = $("<button>").addClass("list-group-item list-group-item-action").attr({ type: "button", id: "here" }).text(savedCity);
    $("#save").append(cityList);
}

// function to generate elements dynamically
function createElements() {
    // creating card for daily weather forecasts
    var dailyWeather = $("<div>").addClass("card row card-row");
    // prepending to the body - for now - this is showing up first. I might create some divs to attach things to actually... 
    $("main").append(dailyWeather);
    // creating div for card body text for daily weather card
    var dailyWeatherBody = $("<div>").addClass("card-body").attr("id", "daily-card");
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
    // just checkin'
    console.log("createElemnts ran");
}

// fucntion for daily weather ajax call
function callWeather(savedCity) {
    $("#daily-card").empty();
    var dailyURL = "https://api.openweathermap.org/data/2.5/weather?q=" + savedCity + "&appid=6e582d888e364585113e2789fcc5b0e6&units=imperial"
    $.ajax({
        url: dailyURL,
        method: "GET",
        dataType: "json"
    }).then(function (response) {
        console.log(response);
        // city name
        var dailyTitle = $("<h2>").addClass("card-title").text(response.name + " " + todaysDate);
        // get image for title
        var dailyImg = $("<img>").addClass("title-img").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png")
        // daily temp
        var dailyTemp = $("<p>").addClass("card-text").text("Curent Temp: " + response.main.temp + " °F");
        // daily wind
        var dailyWind = $("<p>").addClass("card-text").text("Wind Speed: " + response.wind.speed + " MPH");
        // daily humidity
        var dailyHumd = $("<p>").addClass("card-text").text("Humidity: " + response.main.humidity + "%");
        // append img
        dailyTitle.append(dailyImg);
        // append text
        $("#daily-card").append(dailyTitle, dailyTemp, dailyWind, dailyHumd);
    })
};

// function for 5 day forecast
function callForecast(savedCity) {
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + savedCity + "&appid=6e582d888e364585113e2789fcc5b0e6&units=imperial"
    $.ajax({
        url: forecastURL,
        method: "GET",
        dataType: "json"
    }).then(function (response) {
        console.log(response);

        // for loop for dates and forecast info
        for (i = 1; i < 6; i++) {
            // scrolled along the DOM to find this, hadn't used substring before, but it works! gets date
            var tomorrow = response.list[(i * 7)].dt_txt.substring(5, 10);
            // had to make colums so that the cards didn't just line up on top of each other. I bet that's what's wrong with my other dynamic elements. Might try that later. 
            var column = $("<div>").addClass("col-md-2")
            $("#forecast").append(column)
            // create card and append
            var forecastCard = $("<div>").addClass("card");
            $(column).append(forecastCard);
            //  // create card body and append
            var forecastCardBody = $("<div>").addClass("card-body").attr("id", "forecast-card" + [i]);
            $(forecastCard).append(forecastCardBody)
            var forecastTitle = $("<h4>").addClass("card-title").text(tomorrow);
            $("#forecast-card" + [i]).append(forecastTitle);
            // temps
            var forecastTemp = $("<p>").text("Temp: " + response.list[(i * 7)].main.temp + "°F ");
            // append temps
            $("#forecast-card" + [i]).append(forecastTemp);
            // humidity
            var forecastHumd = response.list[(i * 7)].main.humidity;
            // append temps
            $("#forecast-card" + [i]).append("Humidity: " + forecastHumd + "%");
            // forecast img
            var forecastImg = $("<img>").addClass("title-img").attr("src", "http://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png")
            $(forecastTitle).append(forecastImg)

        }
    })
};




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
    // it works, just uneccessary
    // var tomorrow = new Date();
     // tomorrow.setDate(new Date().getDate() + i);
     // console.log(tomorrow)
