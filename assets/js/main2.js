let rangeMin = 100;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minRange = parseInt(rangeInput[0].value);
        let maxRange = parseInt(rangeInput[1].value);
        if (maxRange - minRange < rangeMin) {
            if (e.target.className === "min") {
                rangeInput[0].value = maxRange - rangeMin;
            } else {
                rangeInput[1].value = minRange + rangeMin;
            }
        } else {
            rangePrice[0].value = minRange;
            rangePrice[1].value = maxRange;
            range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
        }
    });
});

rangePrice.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minPrice = rangePrice[0].value;
        let maxPrice = rangePrice[1].value;
        if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "min") {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
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


// SELECT SETTINGS
const selectBoxCurrent = document.querySelector(".select-box__current");
const selectBoxList = document.querySelector(".select-box__list");
const selectBoxIcon = document.querySelector(".select-box__icon");
let k = true;
selectBoxCurrent.addEventListener("click", (e) => {
    if(k === false) {
        selectBoxList.style.opacity = "0";
        selectBoxIcon.style.transform = "translateY(-50%) rotate(0deg)";
        k = true;
    } else {
        selectBoxIcon.style.transform = "translateY(-50%) rotate(180deg)";
        selectBoxList.style.opacity = "1";
        k = false;
    }
})

// SCROLL TOP
window.onscroll = function() {
	var e = document.querySelector(".site_up");

	e.style.display = document.documentElement.scrollTop > 300 ? "flex" : "none";
    e.onclick = (ev) => {
    	ev.preventDefault();
        document.documentElement.scrollTop = 0;
    };
};