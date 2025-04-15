const navbar = document.querySelector(".uppermiddle");
const titletop = document.querySelector(".center")
const navitems = document.querySelectorAll(".wild span")
let scrolltop = 0;

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    titletop.classList.add("scrolled");
    navitems.forEach(function(item) {
        item.classList.add("scrolled")
    })
  } else {
    navbar.classList.remove("scrolled");
    titletop.classList.remove("scrolled");
    navitems.forEach(function(item) {
        item.classList.remove("scrolled")
    })
  }
});

window.addEventListener("scroll", function () {
    let currentscroll = window.pageYOffset;
    if (currentscroll < scrolltop) {
        
    }
  });


  const gallant = document.querySelectorAll(".testingit");
  const galhover = document.querySelectorAll(".gal");
  
  gallant.forEach((item, index) => {
    const correspondingGal = galhover[index]; // match by index
  
    item.addEventListener("mouseover", function () {
      correspondingGal.style.opacity = "100%";
    });
  
    item.addEventListener("mouseout", function () {
      correspondingGal.style.opacity = "0%";
    });
  });

  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("playBtn");

  btn.addEventListener("click", () => {
    console.log("hello")

    if (music.paused) {
      music.play()
      btn.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>"

    } else {
      music.pause()
      btn.innerHTML = "<i class='fa-solid fa-play'></i>"
    }
  });
  
  


