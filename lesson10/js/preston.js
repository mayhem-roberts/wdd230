//Preston js

// pancakes
let date = new Date();
let day = date.getDay();

if (day != 5) {
    document.getElementById("pancakes").style.display = "none";
}

//preston weather

const apiWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=370e73cb3b7a4111b9e28b6e29d837cc&units=imperial';

fetch(apiWeather)
  .then((response) => response.json())
  .then((weatherObject) => {
    console.log(weatherObject);

    let weather = document.getElementById('weather')
    weather.innerHTML = weatherObject.weather[0].description;
    let temperature = document.getElementById('tempF')
    temperature.innerHTML = `${parseFloat(weatherObject.main.temp).toFixed(0)}&deg F`;
    let humidity = document.getElementById('humidity')
    humidity.innerHTML = `${weatherObject.main.humidity}%`;
    let windSpeed = document.getElementById('speed')
    windSpeed.innerHTML = `${parseFloat(weatherObject.wind.speed).toFixed(1)} mph`;

    //get value of temp and speed
    let tempF = parseFloat(weatherObject.main.temp);
    let speed = parseFloat(weatherObject.wind.speed);
    //call windChill function and store in windchill var
    let windchill = windChill(tempF, speed);
    document.getElementById("windChill").innerHTML = windchill; 
          
    function windChill(tempF, speed) {
      //The formula for computing the wind chill factor is    f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
      let t = tempF;
      let s = Math.pow(speed, .16);
      let message = "No Wind Chill";
        
      if (tempF < 50 && speed > 3) {
        f = 35.74 + 0.6215 * t - 35.75 * s + 0.4275 * t * s;
        f = Math.round(f);
        return `${f}&deg F`;
      }
      else {
        message;
        return message;
      }
    }
  });
