 $("body").css("background-color","#cceeff");
let button= $('.btn');
let input = $('.input');

 function writeWeatherData(weatherData) {
    let container = $('[data-role="weather-container"]');
    container.append(`<div>Country: ${weatherData.sys.country}</div>`);
    $.each(weatherData.main, (key, value) => {
        container.append(`<div><span>${key.replace("_", " ")} : ${value} </span></div>`);
    });
}
/* getWeather(writeWeatherData)  */
  button.click(function(){

      getWeather(writeWeatherData);
        $('[data-role="weather-container"]').empty();
    })
function getWeather(cb) {
   
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${input.val()}&appid=47c9bf875e3a8b02deaba6be107e2056` , data => {
        cb(data)
    })
    
}
/* console.log(input.t) */