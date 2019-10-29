// Your code goes here
// * [X] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [X] `load`
// * [ ] `focus`
// * [X] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [X] `dblclick`

// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

// * [] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [X] Stop the navigation from items from refreshing the page by using `preventDefault()`


// const busImage = document.querySelector("header img");
// busImage.addEventListener("mouseover", function(){
//     busImage.style.transform = "scale(1.5)"
//     busImage.style.transition = "all 0.3s"
// })
// busImage.addEventListener("mouseleave", function(){
//     busImage.style.transform = "scale(1)"
//     busImage.style.transition = "all 0.3s"
// })
// const navh1 = document.querySelector("h1");
// window.addEventListener("resize", function() {
//     navh1.style.fontSize = "6rem";
//     navh1.style.color = "purple";
// })

// window.addEventListener("load", function(){
//     alert("The page is now loaded!")
// })


// const links = document.querySelectorAll(".nav-container a")
// links.forEach(function (link){
//     link.addEventListener("click", function(event){
//         console.log("I stopped the link");
//         event.stopPropagation();
//     })
// })

const letsGoImg = document.querySelector(".img-content img");
letsGoImg.addEventListener("dblclick", function() {
    letsGoImg.style.opacity = ".5";
})

const allLowerImg = document.querySelectorAll(".img-content img");
allLowerImg[1].addEventListener("wheel", function() {
    allLowerImg[1].style.opacity = ".5";
})

// const footerImage = document.querySelector(".content-destination img")
// footerImage.addEventListener("keypress", function() {
//     footerImage.style.opacity = ".5";
// })





