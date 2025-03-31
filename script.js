document.addEventListener("DOMContentLoaded", function () {
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


  });
  