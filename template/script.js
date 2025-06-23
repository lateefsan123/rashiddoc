const navbar = document.querySelector("nav");
const titletop = document.querySelector(".center");
const navitems = document.querySelectorAll("nav span");
const first = document.querySelector(".first");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    titletop.classList.add("scrolled");
    first.classList.add("scrolled");
    navitems.forEach(function(item) {
        item.classList.add("scrolled");
    });
  } else {
    navbar.classList.remove("scrolled");
    titletop.classList.remove("scrolled");
    first.classList.remove("scrolled");
    navitems.forEach(function(item) {
        item.classList.remove("scrolled");
    });
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

const music = document.getElementById("bgMusic");
const btn = document.getElementById("playBtn");

music.volume = 0.2;

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>";
    btn.classList.add("play");
  } else {
    music.pause();
    btn.innerHTML = "<i class='fa-solid fa-play'></i>";
    btn.classList.remove("play");
  }
});

btn.addEventListener("mouseover", function() {
  btn.classList.add("yo");
});

btn.addEventListener("mouseout", function() {
  btn.classList.remove("yo");
});

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
  }, 500);
}

function changecarrosel() {
  number = number >= 4 ? 1 : number + 1;

  if (number === 1) {
    fadeInContent(
      `
      <h3>Template <span class='hub'>Hub</span></h3>
      <p>
        Welcome to the Template Hub! Explore resources and guides to enhance your skills.
      </p>
    `,
      "firstone"
    );
  }

  if (number === 2) {
    fadeInContent(
      `
      <div class="achievement">
        Featured Achievement
      </div>
    `,
      "achievement"
    );
  }

  if (number === 3) {
    fadeInContent(
      `
      <div class='leftthird'>
        <h3>Explore Resources</h3>
        <a href="#" target="_blank">
          <button>VIEW NOW <i class='fa-solid fa-play'></i></button>
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
        More content and updates are on the way. Stay tuned!
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
const intervalId = setInterval(changecarrosel, 12000);

window.addEventListener("unload", () => clearInterval(intervalId));

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
const iframe = document.querySelector("#popupVideo");

function colour() {
  box.forEach((boxes) =>  {
    boxes.addEventListener("mouseover", function(event) {
      let col = boxes.getAttribute("data-colour");
      boxes.style.boxShadow = `2px 4px 10px 0px ${col}`;
    });
    boxes.addEventListener("mouseout", function(event) {
      boxes.style.boxShadow = `none`;
    });
  });
}

colour();

box.forEach((boxes) =>  {
  boxes.addEventListener("click", function(event) {
    event.stopPropagation();
    video.style.display = "flex";
    let link = boxes.getAttribute("data-link");
    iframe.src = link;
  });
});

document.addEventListener("click", function () {
  video.style.display = "none";
  iframe.src = "";
});