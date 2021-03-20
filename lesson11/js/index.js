// home page JSON town info
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const towns = jsonObject['towns'];

    //html output div class cards
    const cards = document.querySelector('.cards'); 

    towns.forEach(town => {
        let card = document.createElement('section');
        let div = document.createElement('div')
        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let img = document.createElement('img');

        //loop through JSON to find and display certain towns
        if (town.name == "Preston" || town.name == "Fish Haven" || town.name == "Soda Springs") { 
            h1.innerHTML = `${town.name}`;
            h2.innerHTML = `${town.motto}`;
            p.innerHTML = `Year Founded: ${town.yearFounded} <br> Population: ${town.currentPopulation} <br> Annual Rain Fall: ${town.averageRainfall}`;
            img.setAttribute('src', 'images/' + town.photo);
            img.setAttribute('alt',  town.name + ' image');
                
            card.append(div, img)
            div.append(h1, h2, p)
            cards.append(card)
        }
    }); 
  });
