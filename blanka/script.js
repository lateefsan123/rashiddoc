const navbar = document.querySelector("nav");
const titletop = document.querySelector(".center")
const navitems = document.querySelectorAll("nav span")
const change = document.querySelector(".changechar")
const blank = document.querySelector(".blanks")
const btn = document.getElementById("playBtn");
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
    blank.classList.add("scrolled");
    
    navitems.forEach(function(item) {
        item.classList.add("scrolled")
    })
  } else {
    navbar.classList.remove("scrolled");
    titletop.classList.remove("scrolled");
    change.classList.remove("scrolled");
    blank.classList.remove("scrolled");
    btn.classList.remove("scrolled");
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
        <h3>Blanka <span class='hub'>Center</span></h3>
        <p>
          Welcome to the Blanka hub! Whether you're new or experienced, this site will help you master Blanka in Street Fighter 6. Find tips, combos, strategies, and insights to sharpen your game. Learn to maximize his mobility, mix-ups, and unpredictable style — and take your Blanka play to the next level.
        </p>
      `;
      desc.classList.add("firstone")
      desc.classList.remove("replay");
      desc.classList.remove("achievement");
    }
    
    if (number == 2) {
      
      desc.innerHTML = `
      <div onclick="window.open('https://youtube.com/playlist?list=PLYHo76jk0RQLI6iNUBnbaqM3E4lSJ1ix-&si=d4dM3uzu7YkKJOX8', '_blank')" style="cursor: pointer;">
        <h2 class="redbull">Mena red bull kumite</h2>
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
        <h3>Watch High Level Blanka Replays</h3>
        <a href= "https://www.youtube.com/watch?v=CXmOAMaaApE&list=PLvZ5t8JLwU9K3c9C5TUGFT4w1TKpgXfm9" target = "_blank">
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

function openVideoPlayer() {
    const videoPlayer = document.querySelector('.videoplayer');
    videoPlayer.style.display = 'flex';
}

function closeVideoPlayer(event) {
    const videoPlayer = document.querySelector('.videoplayer');
    const iframe = document.querySelector('#popupVideo');
    videoPlayer.style.display = 'none';
    iframe.src = iframe.src;
}

const box = document.querySelectorAll(".combopiece");
const video = document.querySelector(".videoplayer");
const iframe = document.querySelector("#popupVideo")

box.forEach((boxes) =>  {
  boxes.addEventListener("click", function(event) {
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



