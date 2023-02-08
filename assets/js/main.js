const nextIcon = '<img src="./assets/images/right_icon.svg" alt="right">';
const prevIcon = '<img src="./assets/images/left_icon.svg" alt="left">';

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  nav: true,
  navText: [
  prevIcon,
  nextIcon
],
  responsive:{
      0:{
          items:4
      },
      1000:{
          items:4
      },
      1500:{
          items:4
      }
  }
})


let badge1 = document.querySelector(".header_badge1");
let sear_ish = document.querySelector(".sear_ish");
let btn_yonalish = document.querySelector(".btn_yonalish");
let sear_toplam = document.querySelector(".sear_toplam");
let header_badge2 = document.querySelector(".header_badge2");
let search = document.querySelector(".search");


// MENU TOGGLE CODE
badge1.addEventListener('click', () => {
    let first_close = sear_ish.classList.contains("d-none");
    let second_close = sear_toplam.classList.contains("d-none");
    
    if (first_close && second_close) {
        sear_ish.classList.remove("d-none");
        search.classList.add("d-none");
        
        console.log("Ochildi");
    } else {
        console.log("Yopildi");
        sear_ish.classList.add("d-none");
        sear_toplam.classList.add("d-none");
    }
})

btn_yonalish.addEventListener('click', () => {
    if (sear_toplam.classList.contains("d-none")) {
        sear_toplam.classList.remove("d-none");
        sear_toplam.style.display = "flex";
    } else {
        sear_toplam.classList.add("d-none");
    }
})
header_badge2.addEventListener('click', () => {
    if (search.classList.contains("d-none")) {
        search.classList.remove("d-none");
        sear_toplam.classList.add("d-none");
        sear_ish.classList.add("d-none");
        
        search.style.display = "flex";
    } else {
        search.classList.add("d-none");
    }
})
// IFRAME TOGGLE
const openIframe = document.querySelector(".bringUrl");
const closeIframe = document.querySelector("#closeIframe");
const iframe = document.querySelector("#headIframe");

openIframe.addEventListener("click", () => {
    iframe.setAttribute("src", "https://www.youtube.com/embed/YfmYUtGOaTg");
});
closeIframe.addEventListener("click", () => {
    iframe.setAttribute("src", "");
})


let select = document.querySelector(".select-box__current");
let select2 = document.querySelector(".select-box__list");
let select3 = document.querySelector(".select-box__icon");
select.addEventListener("click", () => {
    if(select2.style.opacity = "0"){
        select2.style.opacity = "1";
        select.classList.add("active_select");
        let select_active = document.querySelector(".active_select");
        select_active.addEventListener("click", () => {
            if(select2.style.opacity = "1") {
                select_active.classList.remove("active_select");
                select2.style.opacity = "0";
                select3.style.transform = "translateY(-50%) rotate(360deg)";
            }else{
                select2.style.opacity = "1";
            }
        })
    }else{
        select2.style.opacity = "0";
    }
})
    