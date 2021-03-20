const requestEvent = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestEvent)
  .then((response) => {
    return response.json();
  })
  .then((eventObject) => {

    const towns = eventObject['towns'];

    //html output div class events
    const events = document.querySelector('.events'); 

    const preston = towns[6].events

    preston.forEach(element => {

      let p = document.createElement('p');
      
      p.innerHTML = element

      events.append(p)
    });
    
  });
