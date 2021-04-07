// grid and list button
function toggleGrid() {
  document.getElementById("switch").classList.toggle("list");
}

//Json
const requestJSON = 'businesses.json';

fetch(requestJSON)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const businesses = jsonObject['businesses'];

    //html output div class cards
    const cards = document.querySelector('.cards'); 

    businesses.forEach(business => {
        let card = document.createElement('section');
        let div = document.createElement('div')
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let img = document.createElement('img');

        //loop through JSON to find and display certain towns
        h2.innerHTML = `${business.name}`;
        p.innerHTML = `${business.address}<br>${business.phone}<br>${business.website}`;
        h3.innerHTML = `${business.info}`;
        img.setAttribute('src', 'images/' + business.logo);
        img.setAttribute('alt',  business.name + ' image');
                
        card.append(div, img)
        div.append(h2, p, h3)
        cards.append(card)
        
    }); 
  });