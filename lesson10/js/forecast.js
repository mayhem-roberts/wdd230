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

        document.querySelector(`#day${i+1}`).textContent = days[date.getDay()];
        document.querySelector(`#img${i+1}`).setAttribute('src', image);
        document.querySelector(`#img${i+1}`).setAttribute('alt', description + 'image');
        document.querySelector(`#temp${i+1}`).innerHTML = (forecast[i].main.temp).toFixed(0); 
      };
  });
