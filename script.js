// Slideshow functionality
let slideIndex = 1;
let slideInterval;
const slideDelay = 6000; // 6 seconds per slide

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== SLIDESHOW DEBUG START ===');
    console.log('DOM loaded, initializing slideshow...');
    
    // Check localStorage status
    const hasSeenSlideshow = localStorage.getItem('slideshowSeen');
    console.log('localStorage slideshowSeen:', hasSeenSlideshow);
    
    // Check if user has seen the slideshow before
    if (hasSeenSlideshow) {
        console.log('User has seen slideshow before, hiding...');
        hideSlideshow();
    } else {
        console.log('First time user, showing slideshow...');
        
        // Check if overlay exists
        const overlay = document.getElementById('slideshowOverlay');
        console.log('Overlay element found:', !!overlay);
        
        if (overlay) {
            console.log('Initial overlay state:');
            console.log('- display:', overlay.style.display);
            console.log('- opacity:', overlay.style.opacity);
            console.log('- visibility:', overlay.style.visibility);
            console.log('- has hidden class:', overlay.classList.contains('hidden'));
            
            // Ensure the overlay is visible immediately
            overlay.style.display = 'flex';
            overlay.classList.remove('hidden');
            overlay.style.opacity = '1';
            overlay.style.pointerEvents = 'auto';
            overlay.style.visibility = 'visible';
            console.log('Slideshow overlay made visible immediately');
            
            // Check state after making visible
            console.log('After making visible:');
            console.log('- display:', overlay.style.display);
            console.log('- opacity:', overlay.style.opacity);
            console.log('- visibility:', overlay.style.visibility);
            console.log('- has hidden class:', overlay.classList.contains('hidden'));
        }
        
        // Initialize slideshow after a short delay
        setTimeout(function() {
            console.log('=== INITIALIZING SLIDESHOW ===');
            showSlides(slideIndex);
            startSlideshow();
            
            // Double-check the overlay is visible
            if (overlay) {
                overlay.style.display = 'flex';
                overlay.classList.remove('hidden');
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'auto';
                overlay.style.visibility = 'visible';
                console.log('Slideshow overlay confirmed visible');
                
                // Final state check
                console.log('Final overlay state:');
                console.log('- display:', overlay.style.display);
                console.log('- opacity:', overlay.style.opacity);
                console.log('- visibility:', overlay.style.visibility);
                console.log('- has hidden class:', overlay.classList.contains('hidden'));
            }
        }, 100);
    }
    
    console.log('=== SLIDESHOW DEBUG END ===');
});

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    console.log('showSlides called with n =', n, 'slides.length =', slides.length, 'dots.length =', dots.length);
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Show current slide and activate current dot
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].classList.add("active");
    
    console.log('Current slide index:', slideIndex, 'Active slide:', slides[slideIndex-1]);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
    resetSlideshowTimer();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetSlideshowTimer();
}

function startSlideshow() {
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, slideDelay);
    
    // Add a periodic check to ensure slideshow stays visible
    setInterval(() => {
        const overlay = document.getElementById('slideshowOverlay');
        if (overlay && !localStorage.getItem('slideshowSeen')) {
            if (overlay.style.display === 'none' || overlay.classList.contains('hidden')) {
                console.log('=== SLIDESHOW WAS HIDDEN - RESTORING ===');
                console.log('Slideshow was hidden, making it visible again...');
                console.log('Previous state:');
                console.log('- display:', overlay.style.display);
                console.log('- has hidden class:', overlay.classList.contains('hidden'));
                console.log('- localStorage slideshowSeen:', localStorage.getItem('slideshowSeen'));
                
                overlay.style.display = 'flex';
                overlay.classList.remove('hidden');
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'auto';
                overlay.style.visibility = 'visible';
                
                console.log('Restored state:');
                console.log('- display:', overlay.style.display);
                console.log('- has hidden class:', overlay.classList.contains('hidden'));
            }
        }
    }, 500); // Check every 500ms
}

function resetSlideshowTimer() {
    clearInterval(slideInterval);
    startSlideshow();
}

function skipSlideshow() {
    console.log('skipSlideshow called');
    localStorage.setItem('slideshowSeen', 'true');
    hideSlideshow();
}

function hideSlideshow() {
    console.log('=== HIDE SLIDESHOW CALLED ===');
    console.log('hideSlideshow called from:', new Error().stack);
    
    const overlay = document.getElementById('slideshowOverlay');
    console.log('Overlay element found:', !!overlay);
    
    if (overlay) {
        console.log('Current overlay state before hiding:');
        console.log('- display:', overlay.style.display);
        console.log('- opacity:', overlay.style.opacity);
        console.log('- visibility:', overlay.style.visibility);
        console.log('- has hidden class:', overlay.classList.contains('hidden'));
        
        // Only hide if it's currently visible
        if (overlay.style.display !== 'none' && !overlay.classList.contains('hidden')) {
            console.log('Hiding slideshow...');
            overlay.classList.add('hidden');
            setTimeout(() => {
                overlay.style.display = 'none';
                console.log('Slideshow hidden completely');
            }, 500);
            clearInterval(slideInterval);
        } else {
            console.log('Slideshow already hidden, not hiding again');
        }
    } else {
        console.error('slideshowOverlay element not found');
    }
}

// Keyboard navigation for slideshow
document.addEventListener('keydown', function(e) {
    const overlay = document.getElementById('slideshowOverlay');
    if (overlay && overlay.style.display !== 'none' && !overlay.classList.contains('hidden')) {
        switch(e.key) {
            case 'ArrowLeft':
                changeSlide(-1);
                break;
            case 'ArrowRight':
                changeSlide(1);
                break;
            case 'Escape':
                skipSlideshow();
                break;
        }
    }
    
    // Debug: Press 'R' to reset slideshow (for testing)
    if (e.key === 'r' || e.key === 'R') {
        console.log('Resetting slideshow...');
        localStorage.removeItem('slideshowSeen');
        location.reload();
    }
    
    // Debug: Press 'S' to force show slideshow (for testing)
    if (e.key === 's' || e.key === 'S') {
        console.log('Force showing slideshow...');
        const overlay = document.getElementById('slideshowOverlay');
        if (overlay) {
            overlay.style.display = 'flex';
            overlay.classList.remove('hidden');
            showSlides(1);
            startSlideshow();
        }
    }
});

// Close slideshow when clicking outside the slideshow container
document.addEventListener('click', function(e) {
    const overlay = document.getElementById('slideshowOverlay');
    const container = document.querySelector('.slideshow-container');
    
    // Debug all clicks
    console.log('=== CLICK EVENT DEBUG ===');
    console.log('Click target:', e.target);
    console.log('Click target class:', e.target.className);
    console.log('Click target id:', e.target.id);
    console.log('Overlay found:', !!overlay);
    console.log('Container found:', !!container);
    
    if (overlay) {
        console.log('Overlay state during click:');
        console.log('- display:', overlay.style.display);
        console.log('- has hidden class:', overlay.classList.contains('hidden'));
        console.log('- localStorage slideshowSeen:', localStorage.getItem('slideshowSeen'));
    }
    
    // Only process if slideshow is actually visible and user hasn't seen it before
    if (overlay && overlay.style.display !== 'none' && !overlay.classList.contains('hidden') && !localStorage.getItem('slideshowSeen')) {
        if (!container.contains(e.target)) {
            console.log('=== CLOSING SLIDESHOW VIA CLICK ===');
            console.log('Clicked outside slideshow, closing...');
            skipSlideshow();
            e.stopPropagation(); // Prevent this from triggering other click handlers
        } else {
            console.log('Click was inside slideshow container, not closing');
        }
    } else {
        console.log('Click conditions not met for closing slideshow');
    }
});

let fighters = document.querySelectorAll(".fighter");

// preview selects
let charactername = document.querySelector(".charname");
let charweight = document.querySelector(".weightkg");
let charheight = document.querySelector(".heightcm");
let chararchetype = document.querySelector(".chararchetype");
let charnumber = document.querySelector(".charnumber");
let render = document.querySelector(".preview")





let character = {
    char1: {
        name: "Kimberly",
        weight: "134",
        height: "5'6",
        archetype: "rushdown",
        num: "no4",
        background: "url('images/kimgif.gif')"

    },

    char2: {
        name: "Rashid",
        weight: "187",
        height: "5'10",
        archetype: "rushdown",
        num: "no19",
        background: "url('images/rashidgif.gif')"

    },

    char3: {
        name: "Ken",
        weight: "183",
        height: "5'9",
        archetype: "shoto",
        num: "no15",
        background: "url('images/kenmasters.gif')"
    },

    char4: {
        name: "Akuma",
        weight: "198",
        height: "5'10",
        archetype: "shoto",
        num: "no22",
        background: "url('images/akumagif.gif')"

    },

    char5: {
        name: "Bison",
        weight: "247",
        height: "6'0",
        archetype: "Rushdown",
        num: "no23",
        background: "url('images/bisongif.gif')"

    },

    char6: {
        name: "Blanka",
        weight: "216",
        height: "6'4",
        archetype: "Trickster",
        num: "no24",
        background: "url('images/blankagif.gif')"

    },

    char7: {
        name: "Cammy",
        weight: "134",
        height: "5'5",
        archetype: "Rushdown",
        num: "no10",
        background: "url('images/cammygif.gif')"

    },

    char8: {
        name: "Chun-Li",
        weight: "secret♡",
        height: "5'7",
        archetype: "Defensive",
        num: "no16",
        background: "url('images/chunligif.gif')"

    },

    char9: {
        name: "Dee jay",
        weight: "203",
        height: "6'0",
        archetype: "Trickster",
        num: "no9",
        background: "url('images/deejaygif.gif')"

    },

    char10: {
        name: "Dhalsim",
        weight: "106",
        height: "5'9",
        archetype: "zoner",
        num: "no18",
        background: "url('images/simgif.gif')"

    },

    char11: {
        name: "E.Honda",
        weight: "302",
        height: "6'1",
        archetype: "Defensive",
        num: "no12",
        background: "url('images/hondagif.gif')"

    },

    char12: {
        name: "Ed",
        weight: "190",
        height: "6'0",
        archetype: "Defensive",
        num: "no21",
        background: "url('images/edgif.gif')"

    },

    char13: {
        name: "Jamie",
        weight: "170",
        height: "5'9",
        archetype: "Trickster",
        num: "no2",
        background: "url('images/jamiegif.gif')"

    },

    char14: {
        name: "J.P",
        weight: "214",
        height: "6'3",
        archetype: "Zoner",
        num: "no7",
        background: "url('images/jpgif.gif')"

    },

    char15: {
        name: "Juri",
        weight: "126",
        height: "5'5",
        archetype: "Rushdown",
        num: "no8",
        background: "url('images/jurigif.gif')"

    },

    char16: {
        name: "Ryu",
        weight: "187",
        height: "5'9",
        archetype: "Shoto",
        num: "no11",
        background: "url('images/ryu.gif')"

    },

    char17: {
        name: "Terry",
        weight: "170",
        height: "6'0",
        archetype: "Shoto",
        num: "no17",
        background: "url('images/terrygif.gif')"

    },

    char18: {
        name: "Zangief",
        weight: "399",
        height: "7'0",
        archetype: "Grappler",
        num: "no17",
        background: "url('images/gief.gif')"

    },

    char19: {
        name: "Aki",
        weight: "126",
        height: "5'8",
        archetype: "Rushdown/zoner",
        num: "no20",
        background: "url('images/akigif.gif')"

    },

    char20: {
        name: "Lily",
        weight: "106",
        height: "5'3",
        archetype: "Grappler",
        num: "no6",
        background: "url('images/lily.gif')"

    },

    char21: {
        name: "Manon",
        weight: "145",
        height: "6'1",
        archetype: "Grappler",
        num: "no3",
        background: "url('images/ManonGif.gif')"

    },

    char22: {
        name: "Luke",
        weight: "198",
        height: "6'1",
        archetype: "Shoto",
        num: "no1",
        background: "url('images/luke.gif')"

    },

    char23: {
        name: "Guile",
        weight: "218",
        height: "6'0",
        archetype: "Zoner",
        num: "no14",
        background: "url('images/newguile.gif')"

    },

    char24: {
        name: "Marisa",
        weight: "269",
        height: "6'8",
        archetype: "Big Body",
        num: "no5",
        background: "url('images/MarissaGif.gif')"

    },

    char25: {
        name: "Mai",
        weight: "110",
        height: "5'5",
        archetype: "Rushdown",
        num: "no25",
        background: "url('images/MaiGif.gif')"

    },

    char26: {
        name: "Elena",
        weight: "129",
        height: "6'1",
        archetype: "Defensive",
        num: "no26",
        background: "url('images/elena.gif')"

    }

  

}

const preview = document.querySelector('.preview');

function updatePreview(imageUrl) {
  preview.style.opacity = '0'; // fade out first

   // match transition time
}

const fighterButtons = Array.from(document.querySelectorAll('.fighter.out'));
let currentIndex = 0;
const fightersPerRow = 4;

fighterButtons[currentIndex].focus();

document.addEventListener('keydown', (e) => {
  let nextIndex = currentIndex;

  switch (e.key) {
    case "ArrowRight":
      nextIndex = (currentIndex + 1) % fighterButtons.length;
      break;
    case "ArrowLeft":
      nextIndex = (currentIndex - 1 + fighterButtons.length) % fighterButtons.length;
      break;
    case "ArrowDown":
      nextIndex = (currentIndex + fightersPerRow) % fighterButtons.length;
      break;
    case "ArrowUp":
      nextIndex = (currentIndex - fightersPerRow + fighterButtons.length) % fighterButtons.length;
      break;
  }

  if (nextIndex !== currentIndex) {
    currentIndex = nextIndex;
    fighterButtons[currentIndex].focus();
  }
});



fighters.forEach(function(fighter) {
    fighter.addEventListener("mouseenter", () => {
        let currentfighter = fighter.getAttribute("data-fighter")
        let chardata = character[currentfighter];
        

        charheight.textContent = chardata.height;
        charweight.textContent = chardata.weight;
        charactername.textContent = chardata.name;
        chararchetype.textContent = chardata.archetype;
        charnumber.textContent = chardata.num;
        render.style.backgroundImage = chardata.background;


    })
})
let info = document.querySelector(".info")
let about = document.querySelector(".about")
let mains = document.querySelector(".main");
let a;
info.addEventListener("click", function(event) {
    event.stopPropagation();
    about.style.display = "flex";
    mains.style.filter = "grayscale(100%)";
    mains.style.filter = "(100%)";
    
})

about.addEventListener("click", function(event) {
    event.stopPropagation();
})

document.addEventListener("click", function (e) {
    console.log('=== ABOUT MODAL CLICK HANDLER ===');
    console.log('About modal click handler triggered');
    
    // Don't close about modal if slideshow is active
    const overlay = document.getElementById('slideshowOverlay');
    console.log('Overlay found in about handler:', !!overlay);
    
    if (overlay && overlay.style.display !== 'none' && !overlay.classList.contains('hidden')) {
        console.log('Slideshow is active, not closing about modal');
        return; // Don't process this click if slideshow is active
    }
    
    console.log('Closing about modal');
    about.style.display = "none";
    mains.style.filter = "grayscale(0%)";
  });


let closebtn = document.querySelector(".close-button");
closebtn.addEventListener("click", function(event) {
    event.stopPropagation();
    about.style.display = "none";
    mains.style.filter = "grayscale(0%)";
})