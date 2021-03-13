const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=370e73cb3b7a4111b9e28b6e29d837cc&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector('#current-temp');
    temperature.textContent = jsObject.main.temp;

  });