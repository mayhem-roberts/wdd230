// Forecast

const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=370e73cb3b7a4111b9e28b6e29d837cc&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      let forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
      
      const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      for (let i = 0; i < 5; i++) {
        let date = new Date(forecast)
      };
  });
