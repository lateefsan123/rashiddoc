
nav = document.querySelector(".uppermiddle");
const dropdown = document.querySelector(".dropdown");
const selecting = document.getElementById("charselect");


function hide() {
    console.log("working");
    if (dropdown.classList.contains("show")) {
        dropdown.style.display = "none";
        dropdown.classList.remove("show");
    } else {
        dropdown.classList.add("show");
        dropdown.style.display = "flex";
    }
}


selecting.addEventListener("click", hide);