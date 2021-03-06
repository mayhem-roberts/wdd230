const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];

    const cards = document.querySelector('.cards'); //html output div class cards

    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let img = document.createElement('img');

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        p.innerHTML = `Date of Birth: ${prophet.birthdate} <br> Place of birth: ${prophet.birthplace}`;
        img.setAttribute('src', prophet.imageurl);

        card.append(h2, p, img)
        cards.append(card)
    });   
  });



  