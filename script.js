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

  let carousel = document.querySelector(".classic");
  let next = document.querySelector(".fa-arrow-right");
  let desc = document.querySelector(".description");

  let number = 1; 

 

  function changecarrosel() {
    number+=1


    desc.classList.add("fade-out");

    
    if (number > 3) {
      number = 1
    }
    console.log(number);

    if (number == 1) {
      desc.innerHTML = `
        <h3>Rashid <span class='hub'>Centre</span></h3>
        <p>
          Welcome to the ultimate Rashid hub! Whether you're a newcomer or a seasoned fighter, this site is designed to help you master Rashid in Street Fighter 6. Here, you'll find tips, strategies, combo guides, and character insights to elevate your gameplay and make the most of Rashid’s unique speed and mix-up potential. Get ready to take your Rashid skills to the next level!
        </p>
      `;
      desc.classList.add("firstone")
      desc.classList.remove("replay");
      desc.classList.remove("achievement");
    }
    
    if (number == 2) {
      
      desc.innerHTML= `
      <a  href="https://youtube.com/playlist?list=PLYHo76jk0RQJ4H_YcMauE7v8j-kGVAVTR&si=K-P--B3SMYqLKMnX" target="_blank">
        <h2 class="redbull">Big Bird Red Bull Kumite</h2>
      </a>

        
      `;
      desc.classList.add("achievement");
      desc.classList.remove("replay");
      desc.classList.remove("firstone")
    }

    if (number == 3) {
      desc.innerHTML = `
        <div class = 'leftthird'>
        <h3>Watch High Level Rashid Replays</h3>
        <a href= "https://youtube.com/playlist?list=PLvZ5t8JLwU9Jlu2BBhSkTAqj2SiIMGKdv&si=9JUnKpEmTaRTKw0P" target = "_blank">
        <button>WATCH NOW <i class='fa-solid fa-play'></i></button>
        </div>
        </a>
        <div class="rightthird"></div>
        
      `;

      desc.style.padding = "none";

      
      desc.classList.add("replay")
      desc.classList.remove("achievement");
    }
    setTimeout(() => {
      desc.classList.remove("fade-out");
    }, 50);
  }


next.addEventListener("click", changecarrosel) 

  
setInterval(changecarrosel, 8000 )

function updateTornadoWidth() {
  const top = document.querySelector('.top');
  const description = document.querySelector('.description');
  const tornadoContainer = document.querySelector('.tornadocontainer');

  const topWidth = top.offsetWidth;
  const descriptionWidth = description.offsetWidth;

  const resultWidth = topWidth - descriptionWidth;
  tornadoContainer.style.width = `${resultWidth}px`;
}

// Run it on load
updateTornadoWidth();

// Optional: also update on window resize
window.addEventListener('resize', updateTornadoWidth);

function moveTornado() {
  const tornadoImg = document.querySelector('.tornado img');
  const tornadoContainer = document.querySelector('.tornadocontainer');

  if (tornadoImg && tornadoContainer) {
    const containerWidth = tornadoContainer.offsetWidth;
    const imgWidth = tornadoImg.offsetWidth;
    const travelDistance = containerWidth - imgWidth;

    tornadoImg.style.transform = `translateX(${travelDistance}px)`;

    // Optional: Reset after it finishes, to repeat
    setTimeout(() => {
      tornadoImg.style.transform = `translateX(0px)`;
    }, 8000); // match duration of transition
  }
}

// Run it on load




