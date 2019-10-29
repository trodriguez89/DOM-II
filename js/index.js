// Your code goes here
TweenMax.staggerTo(".intro img", 0.5, {
    y: -40,
    rotation: 10,
    ease: Power1.easeInOut,
    yoyo: true,
    repeat: -1,
    stagger: {
      from: 5,
      each: 0.1
    }
  }); 
  const busImage = document.querySelector(".intro img");
busImage.addEventListener("mouseover", function(){
    busImage.style.transform = "scale(1.5)";
    busImage.style.transition = "all 0.3s";
});
busImage.addEventListener("mouseleave", function(){
    busImage.style.transform = "scale(1)";
    busImage.style.transition = "all 0.3s";
});
const navh1 = document.querySelector("h1");
window.addEventListener("resize", function() {
    navh1.style.fontSize = "6rem";
    navh1.style.color = "purple";
})

window.addEventListener("load", function(){
    alert("CONGRATS! YOU'VE WON A PRIZE! CLICK TO REDEEM!")
})

const links = document.querySelectorAll(".nav-container a")
links.forEach(function (link){
    link.addEventListener("click", function(event){
        console.log("I stopped the link");
        event.preventDefault();
    })
})

const letsGoImg = document.querySelector(".img-content img");
letsGoImg.addEventListener("dblclick", function() {
    letsGoImg.style.opacity = ".5";
})

const allLowerImg = document.querySelectorAll(".img-content img");
allLowerImg[1].addEventListener("wheel", function() {
    allLowerImg[1].style.opacity = ".5";
})

const footerImage = document.querySelector(".content-destination img")
footerImage.addEventListener("click", function() {
    footerImage.style.transform = "scale(1.5)";
    footerImage.style.transition = "all 0.3s";
    footerImage.style.opacity = ".5";
})

const pTag = document.querySelector("p");
pTag.addEventListener("drag", function(){
    pTag.style.fontSize = "5rem";
    pTag.style.color = "purple";
    pTag.style.border = "2px solid black"
})

const adventureText = document.querySelectorAll(".text-content p");
adventureText[2].addEventListener("copy", function(){
    alert("Stop copying my work!");
})

const buttonText = document.querySelectorAll(".destination");
buttonText.forEach(function(text){
    text.addEventListener("click", function(){
        text.style.backgroundColor = "red";
    })
})

const buttons = document.querySelectorAll(".destination .btn");
buttons.forEach(function(button){
    button.addEventListener("click", function(event){
        button.style.border = "2px solid purple"
        event.stopPropagation();
    })
})

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
    if (key.keyCode == "65"){
        alert("You pressed the correct key!")
    }
}


