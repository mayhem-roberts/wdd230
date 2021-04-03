//forecast
const apiforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5588842&APPID=ef8e6b7eec74619ae5146bd058438a5e&units=imperial';

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