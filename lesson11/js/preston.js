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

//forecast
const apiforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=22b3edccab117440bdc47835f3f06a5e&units=imperial';

fetch(apiforecast)
  .then((response) => response.json())
  .then((forecastObject) => {
      console.log(forecastObject)

      const forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      for (let i = 0; i < forecast.length; i++) {
        let date = new Date(forecast[i].dt_txt);
        let image = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';
        let description = forecast[i].weather.description;

        document.getElementById(`day${i+1}`).innerHTML = days[date.getDay()];
        document.getElementById(`img${i+1}`).setAttribute('src', image);
        document.getElementById(`img${i+1}`).setAttribute('alt', description + 'image');
        document.getElementById(`temp${i+1}`).innerHTML = (`${(forecast[i].main.temp).toFixed(0)}&deg F`); 
      };
  });

// 

const requestEvent = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestEvent)
  .then((response) => {
    return response.json();
  })
  .then((eventObject) => {

    const towns = eventObject['towns'];
    const events = document.querySelector('.events'); 
    const preston = towns[6].events

    preston.forEach(element => {
      let p = document.createElement('p');
      
      p.innerHTML = "- " + element

      events.append(p)
    });
    
  });
