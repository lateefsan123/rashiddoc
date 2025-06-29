const navbar = document.querySelector("nav");
const titletop = document.querySelector(".center")
const navitems = document.querySelectorAll("nav span")
const change = document.querySelector(".changechar");
const first = document.querySelector(".first");
let scrolltop = 0;


const toggle = document.querySelector(".toggle");
const icon = toggle.querySelector("i"); // Get the <i> inside the toggle
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click", function () {
  // Toggle sidebar visibility
  sidebar.classList.toggle("active");

  // Change icon based on state
  if (sidebar.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-x");
  } else {
    icon.classList.remove("fa-x");
    icon.classList.add("fa-bars");
  }
});




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


 let carousel = document.querySelector(".classic");
let next = document.querySelector(".fa-arrow-right");
let desc = document.querySelector(".description");
let dots = document.querySelectorAll(".carousel-dots .dot");

let number = 1;

function updateDots(index) {
  dots.forEach((dot, i) => {
    if (i === index - 1) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function changecarrosel(to = null) {
  if (to !== null) {
    number = to;
  } else {
    number += 1;
    if (number > 4) number = 1; // updated to include slide 4
  }

  desc.classList.add("fade-out");

  if (number === 1) {
    desc.innerHTML = `
      <h3>Elena <span class='hub'>Centre</span></h3>
      <p>
      Welcome to the ultimate Elena hub in Street Fighter 6! Whether you're just vibin' with her for the first time or you're a seasoned footsie god, this is your go-to spot for tech, combos, and movement mastery. Tap into her rhythm, stay unpredictable, and dance your way to domination. Let’s get groovin’!
      </p>
    `;
    desc.className = "description firstone";
    desc.style.padding = "";
  }

  if (number === 2) {
    desc.innerHTML = `
      <div onclick="window.open('#')" style="cursor: pointer;">
        <h2 class="redbull">No Elena tourney wins yet</h2>
      </div>
    `;
    desc.className = "description achievement";
    desc.style.padding = "";
    document.querySelector(".redbull").addEventListener("click", () => {
      document.getElementById("bbmusic").play();
    });
  }

  if (number === 3) {
    desc.innerHTML = `
      <div class='leftthird'>
        <h3>Watch High Level Elena Replays</h3>
        <a href="https://youtube.com/playlist?list=PLvZ5t8JLwU9LJzzudsJmsQDu53jqhGtZU&si=NzGlkTLNDuhqFYAG" target="_blank">
          <button>WATCH NOW <i class='fa-solid fa-play'></i></button>
        </a>
      </div>
      <div class="rightthird"></div>
    `;
    desc.className = "description replay";
    desc.style.padding = "none";
  }

  if (number === 4) {
    desc.innerHTML = `
      <div class='leftthird'>
        <h3>Latest Elena Tech on <i class='fa-brands fa-x-twitter'></i></h3>
        <a href="https://twitter.com/search?q=%23SF6_Elena&src=typed_query&f=live" target="_blank">
          <button>CHECK NOW</button>
        </a>
      </div>
      <div class="rightthird"></div>
    `;
    desc.className = "description replay"; // reuse style or create a new one
    desc.style.padding = "none";
  }

  updateDots(number);

  setTimeout(() => {
    desc.classList.remove("fade-out");
  }, 50);
}

// event listeners
next.addEventListener("click", () => changecarrosel());

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => changecarrosel(i + 1));
});

// auto-scroll
setInterval(() => changecarrosel(), 8000);




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
const docii = document.querySelectorAll(".docii");
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





docii.forEach((boxes) => {
  boxes.addEventListener("click", function (event) {
    event.stopPropagation();
    video.classList.add("dociis"); // or just skip this if the styles are in .videoplayer by default
    video.style.display = "flex";
    let link = boxes.getAttribute("data-link");
    iframe.src = link;
  });
});



