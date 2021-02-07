// menu
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}

// pancakes
let date = new Date();
let day = date.getDay();

if (day != 5) {
    document.getElementById("pancakes").style.display = "none";
}

// current date
let options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("currentDate").textContent = new Date().toLocaleDateString('en-us', options);
   