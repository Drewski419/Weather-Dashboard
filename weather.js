// List of constant variables
const apiKey = "fd7b2e9a6b0db1a1e7451e248a96f982";
const weatherCard = $(".weather-card");
const cityDiv = $(".forecast");
const currentDay = moment().format("MM/D/YYYY")
if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeather(lat, lon);
    });
}


// List of variables
const cityNameEl = $(".cityName");
const currentDateEl = $(".currentDate");
const weatherIconEl = $("<img>");
const tempEl = $(".temp");

function getWeather(userLat, userLon) {
    const queryUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${userLat}&lon=${userLon}&APPID=${apiKey}`;
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (weatherData) {
            console.log(weatherData);
            var tempF = Math.round((weatherData.main.temp - 273.15) * 1.80 + 32);

            $(cityNameEl).text(weatherData.name);
            $(currentDateEl).text(currentDay);
            $(tempEl).text(`Temperature: ${tempF} °F`);
            $(weatherIconEl).attr("src", `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
            $(cityNameEl).append(weatherIconEl);
        })
}



// getFiveDayForecast();

//     function getFiveDayForecast() {
//         cardRow.empty();
//         let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${desiredCity}&APPID=${apiKey}&units=imperial`;
//         $.ajax({
//             url: queryUrl,
//             method: "GET"
//         })
//         .then(function(fiveDayReponse) {
//             for (let i = 0; i != fiveDayReponse.list.length; i+=8 ) {
//                 let cityObj = {
//                     date: fiveDayReponse.list[i].dt_txt,
//                     icon: fiveDayReponse.list[i].weather[0].icon,
//                     temp: fiveDayReponse.list[i].main.temp,
//                     humidity: fiveDayReponse.list[i].main.humidity
//                 }
//                 let dateStr = cityObj.date;
//                 let trimmedDate = dateStr.substring(0, 10); 
//                 let weatherIco = `https:///openweathermap.org/img/w/${cityObj.icon}.png`;
//                 createForecastCard(trimmedDate, weatherIco, cityObj.temp, cityObj.humidity);
//             }
//         })
//     }   

// function createForecastCard(date, icon, temp, humidity) {
//     // HTML elements we will create to later
//     let fiveDayCardEl = $("<div>").attr("class", "five-day-card");
//     let cardDate = $("<h3>").attr("class", "card-text");
//     let cardIcon = $("<img>").attr("class", "weatherIcon");
//     let cardTemp = $("<p>").attr("class", "card-text");
//     let cardHumidity = $("<p>").attr("class", "card-text");
//     cardRow.append(fiveDayCardEl);
//     cardDate.text(date);
//     cardIcon.attr("src", icon);
//     cardTemp.text(`Temp: ${temp} °F`);
//     cardHumidity.text(`Humidity: ${humidity}%`);
//     fiveDayCardEl.append(cardDate, cardIcon, cardTemp, cardHumidity);
// }



