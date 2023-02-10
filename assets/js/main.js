const nextIcon = '<img src="./assets/images/right_icon.svg" alt="right">';
const prevIcon = '<img src="./assets/images/left_icon.svg" alt="left">';

$('.vacansi .owl-carousel').owlCarousel({
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
$('.top_univer .owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    nav: true,
    navText: [
    prevIcon,
    nextIcon
  ],
    responsive:{
        0:{
            items:2
        },
        1000:{
            items:2
        },
        1500:{
            items:2
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






// SCROLL TOP
window.onscroll = function() {
	var e = document.querySelector(".site_up");
    var header = document.querySelector("header .parent")
	e.style.display = document.documentElement.scrollTop > 300 ? "flex" : "none";
	header.style.padding = document.documentElement.scrollTop > 50 ? "10px" : "20px";
    
    e.onclick = (ev) => {
    	ev.preventDefault();
        document.documentElement.scrollTop = 0;
    };
};