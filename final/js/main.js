// menu
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}

// last modified date
let date = document.lastModified;
   document.getElementById("dateUpdated").textContent = "Last Updated: " + date;
