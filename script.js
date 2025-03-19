
nav = document.querySelector(".uppermiddle");

document.body.addEventListener("focusin", function() {
    nav.style.display = "flex";
})

document.body.addEventListener("focusout", function() {
    nav.style.display = "none";
})
