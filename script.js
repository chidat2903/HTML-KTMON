/*---Header---*/
var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}
var textcont = document.getElementById("textbox");
function showcontent(){
    textcont.style.right = "0";
}
function hidecontent(){
    textcont.style.right = "-200px"
}

/*---Gallery---*/
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
evt.preventDefault();
scrollContainer.scrollLeft += evt.deltaY;
scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click",()=>{
scrollContainer.style.scrollBehavior = "smooth";
scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click",()=>{
scrollContainer.style.scrollBehavior = "smooth";
scrollContainer.scrollLeft -= 900;
});

/*---Manager---*/
let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");

function showReview(){
for(userPic of userPics){
    userPic.classList.remove("active-pic");
}
for(userText of userTexts){
    userText.classList.remove("active-text");
}

let i = Array.from(userPics).indexOf(event.target);

userPics[i].classList.add("active-pic");
userTexts[i].classList.add("active-text");
}