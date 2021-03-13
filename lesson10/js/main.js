// menu
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}

// current date
let options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("currentDate").textContent = new Date().toLocaleDateString('en-us', options);

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
            p.innerHTML = `Year Founded: ${town.yearFounded} <br> Population: ${towns.currentPopulation} <br> Annual Rain Fall: ${towns.averageRainfall}`;
            img.setAttribute('src', 'images/' + town.photo);
                
            card.append(div, img)
            div.append(h1, h2, p)
            cards.append(card)
        }
    });     
  });
