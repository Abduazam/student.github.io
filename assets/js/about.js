
const nextIcon = '<img src="./assets/images/left_icon2.svg" alt="right">';
const prevIcon = '<img src="./assets/images/right_icon2.svg" alt="left">';
$('.team .owl-carousel').owlCarousel({
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
            items:3
        },
        1500:{
            items:4
        }
    }
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
