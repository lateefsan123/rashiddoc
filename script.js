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
        name: "Kimberly",
        weight: "134",
        height: "5'6",
        archetype: "rushdown",
        num: "no1",
        background: "url('images/kimgif.gif')"

    },

    char2: {
        name: "Rashid",
        weight: "187",
        height: "5'10",
        archetype: "rushdown",
        num: "no2",
        background: "url('images/rashidgif.gif')"

    },

    char3: {
        name: "Ken",
        weight: "183",
        height: "5'9",
        archetype: "shoto",
        num: "no3",
        background: "url('images/kenmasters.gif')"
    },

    char4: {
        name: "Akuma",
        weight: "198",
        height: "5'10",
        archetype: "shoto",
        num: "no4",
        background: "url('images/akumagif.gif')"

    },

    char5: {
        name: "Bison",
        weight: "247",
        height: "6'0",
        archetype: "Rushdown",
        num: "no6",
        background: "url('images/bisongif.gif')"

    },

    char6: {
        name: "Blanka",
        weight: "216",
        height: "6'4",
        archetype: "Rushdown",
        num: "no7",
        background: "url('images/blankagif.gif')"

    },

    char7: {
        name: "Cammy",
        weight: "134",
        height: "5'5",
        archetype: "Rushdown",
        num: "no8",
        background: "url('images/cammygif.gif')"

    },

    char8: {
        name: "Chun-Li",
        weight: "secret♡",
        height: "5'7",
        archetype: "Defensive",
        num: "no8",
        background: "url('images/chunligif.gif')"

    },

    char9: {
        name: "Dee jay",
        weight: "203",
        height: "6'0",
        archetype: "Rushdown",
        num: "no9",
        background: "url('images/deejaygif.gif')"

    },

    char10: {
        name: "Dhalsim",
        weight: "106",
        height: "5'9",
        archetype: "zoner",
        num: "no10",
        background: "url('images/simgif.gif')"

    },

    char11: {
        name: "E.Honda",
        weight: "302",
        height: "6'1",
        archetype: "Defensive",
        num: "no11",
        background: "url('images/hondagif.gif')"

    },

    char12: {
        name: "Ed",
        weight: "190",
        height: "6'0",
        archetype: "Rushdown",
        num: "no12",
        background: "url('images/edgif.gif')"

    },

    char13: {
        name: "Jamie",
        weight: "170",
        height: "5'9",
        archetype: "Trickster",
        num: "no13",
        background: "url('images/jamiegif.gif')"

    },

    char14: {
        name: "J.P",
        weight: "214",
        height: "6'3",
        archetype: "Zoner",
        num: "no14",
        background: "url('images/jpgif.gif')"

    },

    char15: {
        name: "Juri",
        weight: "126",
        height: "5'5",
        archetype: "Trickster",
        num: "no15",
        background: "url('images/jurigif.gif')"

    },

    char16: {
        name: "Ryu",
        weight: "187",
        height: "5'9",
        archetype: "Shoto",
        num: "no16",
        background: "url('images/ryu.png')"

    },

    char17: {
        name: "Terry",
        weight: "170",
        height: "6'0",
        archetype: "Shoto",
        num: "no17",
        background: "url('images/terry.png')"

    },

    char18: {
        name: "Zangief",
        weight: "399",
        height: "7'0",
        archetype: "Grappler",
        num: "no18",
        background: "url('images/zangief.png')"

    },

    char19: {
        name: "Aki",
        weight: "126",
        height: "5'8",
        archetype: "Trickster",
        num: "no19",
        background: "url('images/aki.png')"

    },

    char20: {
        name: "Lily",
        weight: "106",
        height: "5'3",
        archetype: "Grappler",
        num: "no20",
        background: "url('images/lily.png')"

    },

    char21: {
        name: "Manon",
        weight: "145",
        height: "6'1",
        archetype: "Grappler",
        num: "no21",
        background: "url('images/manon\ \(3\).png')"

    },

    char22: {
        name: "Luke",
        weight: "198",
        height: "6'1",
        archetype: "Shoto",
        num: "no22",
        background: "url('images/luke.png')"

    },

    char23: {
        name: "Guile",
        weight: "218",
        height: "6'0",
        archetype: "Zoner",
        num: "no23",
        background: "url('images/guile.png')"

    },

    char24: {
        name: "Marisa",
        weight: "269",
        height: "6'8",
        archetype: "Big Body",
        num: "no24",
        background: "url('images/marisa.png')"

    },

    char25: {
        name: "Mai",
        weight: "110",
        height: "5'5",
        archetype: "Rushdown",
        num: "no25",
        background: "url('images/maii.png')"

    },

    char26: {
        name: "Elena",
        weight: "129",
        height: "6'1",
        archetype: "Footsies",
        num: "no26",
        background: "url('images/elenaback.webp')"

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


