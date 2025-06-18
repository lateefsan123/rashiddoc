const navbar = document.querySelector("nav");
const titletop = document.querySelector(".center")
const navitems = document.querySelectorAll("nav span")
const btn = document.getElementById("playBtn");
const change = document.querySelector(".changechar");
const edd = document.querySelector(".edd");
const first = document.querySelector(".first");
let scrolltop = 0;


const toggleit = document.querySelector(".toggle");
const icon = toggleit.querySelector("i"); // Get the <i> inside the toggle
const sidebar = document.querySelector(".sidebar");

toggleit.addEventListener("click", function () {
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
    first.classList.add("scrolled");
    navbar.classList.add("scrolled");
    titletop.classList.add("scrolled");
    change.classList.add("scrolled")
    edd.classList.add("scrolled")
    navitems.forEach(function(item) {
        item.classList.add("scrolled")
    })
  } else {
    first.classList.remove("scrolled");
    navbar.classList.remove("scrolled");
    titletop.classList.remove("scrolled");
    change.classList.remove("scrolled")
    btn.classList.remove("scrolled");
    edd.classList.remove("scrolled")
    navitems.forEach(function(item) {
        item.classList.remove("scrolled")
    })
  }
});

window.addEventListener("scroll", function() {
  if (window.scrollY > 35) {
    btn.classList.add("scrolled")
  }
})









  


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

  music.volume = 0.2;


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

    if (number == 1) {
      desc.innerHTML = `
        <h3>Ed <span class='hub'>Center</span></h3>
        <p>
          Welcome to the Ed zone! Whether you're new or experienced, this site helps you master Ed in Street Fighter 6 with tips, combos, and strategies. Learn how to dominate with his flicker jabs, control space with psycho upper, and capitalize on trade hits to keep your offense flowing and land devastating combos.
        </p>
      `;
      desc.classList.add("firstone")
      desc.classList.remove("replay");
      desc.classList.remove("achievement");
    }
    
    if (number == 2) {
      
      desc.innerHTML = `
      <div onclick="window.open('https://youtube.com/playlist?list=PLYHo76jk0RQLw89eB1Mi03lKcrIwn3tKq&si=iVSqAMjDSj3mFp3f', '_blank')" style="cursor: pointer;">
        <h2 class="redbull">Leshar Capcom cup 11 run</h2>
      </div>
    `;


      document.querySelector(".redbull").addEventListener("click", () => {
        document.getElementById("bbmusic").play();
      });
      
      desc.classList.add("achievement");
      desc.classList.remove("replay");
      desc.classList.remove("firstone")
    }

    if (number == 3) {
      desc.innerHTML = `
        <div class = 'leftthird'>
        <h3>Watch High Level Ed Replays</h3>
        <a href= "https://youtube.com/playlist?list=PLvZ5t8JLwU9JjDmQqmCqPoh_AeKdJhGoS&si=-sRcv6HR-tL_bVAo" target = "_blank">
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

  
setInterval(changecarrosel, 8000 );


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
});


