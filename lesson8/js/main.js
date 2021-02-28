// menu
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}

// current date
let options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("currentDate").textContent = new Date().toLocaleDateString('en-us', options);
   