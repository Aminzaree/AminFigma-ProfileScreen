// To top button

const toTop = document.querySelector("#toTop");

window.addEventListener("scroll", function(){
    if(this.window.pageYOffset > 150){
        toTop.classList.add("active")
    }else{
        toTop.classList.remove("active");
    }
})



// Responsive Navigation

const menuicon = document.querySelector("#menuicon");
const responsiveNav = document.querySelector("#responsiveNav")

menuicon.addEventListener("click", function(){
    responsiveNav.classList.toggle("active");
    if(menuicon.classList.toggle("active")){
        menuicon.querySelector("svg").classList.replace("fa-bars" , "fa-xmark");
    }else{
        menuicon.querySelector("svg").classList.replace("fa-xmark" , "fa-bars");

    }
})



// Change class active in nav

const items = document.getElementsByClassName("nav-items");

function changeActive(event){
    let i;
    for(i = 0 ; i<items.length ; i++){
        items[i].classList.remove("li-active");
    }

    event.classList.add("li-active")
}



// change class active in profile

const profileItems = document.getElementsByClassName("Pro-list");
console.log(profileItems.length);

function changeBg(event){
    let i;
    for(i = 0 ; i<profileItems.length ; i++){
        profileItems[i].classList.remove("active")
    }

    event.classList.add("active");
}