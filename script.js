
const faceImg = document.querySelector(".model_face");
var navList = document.getElementById("nav-lists");

const faces = [
    "./images/ronaldo.png",
    "./images/pexels-lena-hsvl-6851541.jpg",
    "./images/Benzema.png",
    "./images/pexels-lena-hsvl-6691175.jpg",
    "./images/swift.jpg"
]

let DURATION = 3000
let activeImageLength = 0
faceImg.src = faces[activeImageLength];

const interval = setInterval(() => {
    if (activeImageLength !== faces.length) {
        faceImg.src = faces[activeImageLength];
        activeImageLength++;
    }
    else {
        activeImageLength = 0
        faceImg.src = faces[activeImageLength++];
    }
}, DURATION);

function Show() {
navList.classList.add("_Menus-show");
}

function Hide(){
navList.classList.remove("_Menus-show");
}

