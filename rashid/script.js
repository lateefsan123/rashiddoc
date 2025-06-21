const navbar = document.querySelector("nav");
const titletop = document.querySelector(".center")
const navitems = document.querySelectorAll("nav span")
const change = document.querySelector(".changechar");
const first = document.querySelector(".first");
let scrolltop = 0;











window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    titletop.classList.add("scrolled");
    change.classList.add("scrolled");
    first.classList.add("scrolled");
    navitems.forEach(function(item) {
        item.classList.add("scrolled")
    })
  } else {
    navbar.classList.remove("scrolled");
    titletop.classList.remove("scrolled");
    change.classList.remove("scrolled");
    first.classList.remove("scrolled");
    navitems.forEach(function(item) {
        item.classList.remove("scrolled")
    })
  }
});

const sidebar = document.getElementById("sidebarMenu");
    const toggleBtn = document.getElementById("toggleButton");
    const openIcon = document.getElementById("openIcon");
    const closeIcon = document.getElementById("closeIcon");

    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("hidden");
      openIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
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

  music.volume = 0.2;

  btn.addEventListener("click", () => {
    console.log("hello")

    if (music.paused) {
      music.play()
      btn.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>"
      btn.classList.add("play");


    } else {
      music.pause()
      btn.innerHTML = "<i class='fa-solid fa-play'></i>"
      btn.classList.remove("play");
    }
  });

  btn.addEventListener("mouseover", function() {
    btn.classList.add("yo");

  })

  btn.addEventListener("mouseout", function() {
    btn.classList.remove("yo");
    
  })

const next = document.querySelector(".arrow-next");
const desc = document.querySelector(".description");
const dots = document.querySelectorAll(".dot");

let number = 1;

function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index - 1);
  });
}

function fadeInContent(content, className) {
  if (!desc) return;
  desc.classList.add("fade-out");
  setTimeout(() => {
    desc.innerHTML = content;
    desc.className = `description ${className}`;
    desc.classList.remove("fade-out");
  }, 500); // Match CSS transition duration
}

function changecarrosel() {
  number = number >= 4 ? 1 : number + 1;

  if (number === 1) {
    fadeInContent(
      `
      <h3>Rashid <span class='hub'>Center</span></h3>
      <p>
        Welcome to the ultimate Rashid hub! Whether you're a newcomer or a seasoned fighter, this site is designed to help you master Rashid in Street Fighter 6. Here, you'll find tips, strategies, combo guides, and character insights to elevate your gameplay and make the most of Rashid’s unique speed and mix-up potential. Get ready to take your Rashid skills to the next level!
      </p>
    `,
      "firstone"
    );
  }

  if (number === 2) {
    fadeInContent(
      `
      <div class="redbull" onclick="window.open('https://youtube.com/playlist?list=PLYHo76jk0RQJ4H_YcMauE7v8j-kGVAVTR&si=K-P--B3SMYqLKMnX', '_blank')">
        Big Bird Red Bull Kumite
      </div>
    `,
      "achievement"
    );
  }

  if (number === 3) {
    fadeInContent(
      `
      <div class='leftthird'>
        <h3>Watch High Level Rashid Replays</h3>
        <a href="https://youtube.com/playlist?list=PLvZ5t8JLwU9Jlu2BBhSkTAqj2SiIMGKdv&si=9JUnKpEmTaRTKw0P" target="_blank">
          <button>WATCH NOW <i class='fa-solid fa-play'></i></button>
        </a>
      </div>
      <div class="rightthird"></div>
    `,
      "replay"
    );
  }

  if (number === 4) {
    fadeInContent(
      `
      <h3>Coming Soon <span class='hub'>...</span></h3>
      <p>
        More Rashid tech and tournament breakdowns are on the way. Stay tuned!
      </p>
    `,
      "firstone"
    );
  }

  updateDots(number);
}

if (next) {
  next.addEventListener("click", changecarrosel);
}
const intervalId = setInterval(changecarrosel, 12000); // Slower interval for better UX

// Cleanup interval on window unload
window.addEventListener("unload", () => clearInterval(intervalId));

const clientId = "6tn5unrr0xiau7qmeihljr1uk628nm";
    const clientSecret = "gl4v4exjfj9sr225q0ep9llxax6y8q";

    async function getAccessToken() {
      const res = await fetch("https://id.twitch.tv/oauth2/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: "client_credentials"
        })
      });

      const data = await res.json();
      return data.access_token;
    }

    async function checkStreamerLive(streamerName, button, token) {
      try {
        const url = `https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(streamerName)}`;
        const res = await fetch(url, {
          headers: {
            "Client-ID": clientId,
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        const data = await res.json();
        if (data.data && data.data.length > 0) {
          console.log(`${streamerName} is live`);
          const container = button.closest(".streamerpiece");

  // Find the islive <p> inside this specific streamer block
          const isLiveIndicator = container.querySelector(".islive");

          if (isLiveIndicator) {
            isLiveIndicator.style.display = "flex";
          }
          button.classList.add("live");
        } else {
          console.log(`${streamerName} is offline`);
        }
      } catch (err) {
        console.error(`Error checking ${streamerName}:`, err);
      }
    }

    async function init() {
      const token = await getAccessToken();
      const buttons = document.querySelectorAll(".livebuttonn");

      buttons.forEach(button => {
        const streamerName = button.getAttribute("data-streamer");
        checkStreamerLive(streamerName, button, token);
      });
    }

    init();
// Run it on load

const box = document.querySelectorAll(".combopiece");
const video = document.querySelector(".videoplayer");
const iframe = document.querySelector("#popupVideo")
const divekick = document.querySelector(".diveki");
const imageviewer = document.querySelector(".imageviewer")


function colour() {
  box.forEach((boxes) =>  {
    boxes.addEventListener("mouseover", function(event) {
      let col = boxes.getAttribute("data-colour");
      boxes.style.boxShadow = `2px 4px 10px 0px ${col}`;
    })
    
    
  })

  box.forEach((boxes) =>  {
    boxes.addEventListener("mouseout", function(event) {
      let col = boxes.getAttribute("data-colour");
      boxes.style.boxShadow = `none`;
    })
    
    
  })
  





    
}

colour();

box.forEach((boxes) =>  {
  boxes.addEventListener("click", function(event) {
    console.log("working")
    event.stopPropagation();
    video.style.display = "flex";
    let link = boxes.getAttribute("data-link");
    iframe.src = link;
  })
  
  
})



document.addEventListener("click", function () {
  video.style.display = "none";
  iframe.src = "";
  imageviewer.style.display = "none";
});





divekick.addEventListener("click", function(event) {
  document.querySelector(".videoplayer").style.display = "none";
  event.stopPropagation();
  imageviewer.style.display = "flex";
  imageviewer.style.background

})


