let fighters = document.querySelectorAll(".fighter");
console.log("hello")

// preview selects
let charactername = document.querySelector(".charname");
let charweight = document.querySelector(".weightkg");
let charheight = document.querySelector(".heightcm");
let chararchetype = document.querySelector(".chararchetype");
let charnumber = document.querySelector(".charnumber");
let render = document.querySelector(".preview")






let character = {
    char1: {
        name: "kimberly",
        weight: "134",
        height: "164",
        archetype: "rushdown",
        num: "no1",
        background: "url('images/kimgif.gif')"

    },

    char2: {
        name: "rashid",
        weight: "190",
        height: "180",
        archetype: "rushdown",
        num: "no2",
        background: "url('images/rashidgif.gif')"

    },

    char3: {
        name: "ken",
        weight: "200",
        height: "175",
        archetype: "shoto",
        num: "no3",
        background: "url('images/kenmasters.gif')"

    }
}


fighters.forEach(function(fighter) {
    fighter.addEventListener("mouseenter", () => {
        let currentfighter = fighter.getAttribute("data-fighter")
        let chardata = character[currentfighter];
        console.log(chardata)

        charheight.textContent = chardata.height;
        charweight.textContent = chardata.weight;
        charactername.textContent = chardata.name;
        chararchetype.textContent = chardata.archetype;
        charnumber.textContent = chardata.num;
        render.style.backgroundImage = chardata.background;


    })
})
