//Select elements and getting measurements for button placements.
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const prevPos = document.querySelector('.prev-cont');
const nextPos = document.querySelector('.next-cont');
const prev1 = document.querySelector('.prev1');
const next1 = document.querySelector('.next1');
const prevPos1 = document.querySelector('.prev-cont1');
const nextPos1 = document.querySelector('.next-cont1');
const prevWidth = prev.offsetWidth;
const nextWidth = next.offsetWidth;
const prevHeight = next.offsetHeight;
const nextHeight = next.offsetHeight;
const prevWidth1 = prev1.offsetWidth;
const nextWidth1 = next1.offsetWidth;
const prevHeight1 = next1.offsetHeight;
const nextHeight1 = next1.offsetHeight;
const cardWidth = document.querySelector('.card').offsetWidth;
const cardWidth1 = document.querySelector('.card1').offsetWidth;

const containerHeightValue = document.querySelector('.carousel-container').offsetHeight;
const containerHeightValue1 = document.querySelector('.carousel-container1').offsetHeight;

const containerChildValue = document.querySelector('.carousel-container').childElementCount;
const containerChildValue1 = document.querySelector('.carousel-container1').childElementCount;



//adjust button styles based on screen size.
const screenStyles = function () {
    const containerWidthValue = document.querySelector('.carousel-container').offsetWidth;
    

    if (containerWidthValue >= 400) {
        prevPos.style.marginRight = `0px`;
        nextPos.style.marginLeft = `0px`;
        
        
        prevPos.style.marginTop = `0px`;
        nextPos.style.marginTop = `0px`;

        prev.style.padding = `0`;
        next.style.padding = `0`;

    } else {
        prevPos.style.marginRight = `0px`;
        nextPos.style.marginLeft = `0px`;

        prevPos.style.marginTop = `${containerHeightValue + prevHeight - 2}px`;
        nextPos.style.marginTop = `${containerHeightValue + nextHeight - 2}px`;

        prev.style.padding = `0px 30px 0px 30px`;
        next.style.padding = `0px 30px 0px 30px`;

    }
  
};
const screenStyles1 = function () {
    const containerWidthValue1 = document.querySelector('.carousel-container1').offsetWidth;
   
    if (containerWidthValue1 >= 400) {
        prevPos1.style.marginRight = `0px`;
        nextPos1.style.marginLeft = `0px`;
        
        
        prevPos1.style.marginTop = `0px`;
        nextPos1.style.marginTop = `0px`;

        prev1.style.padding = `0`;
        next1.style.padding = `0`;

    } else {
        prevPos1.style.marginRight = `0px`;
        nextPos1.style.marginLeft = `0px`;

        prevPos1.style.marginTop = `${containerHeightValue1 + prevHeight1 - 2}px`;
        nextPos1.style.marginTop = `${containerHeightValue1 + nextHeight1 - 2}px`;

        prev1.style.padding = `0px 30px 0px 30px`;
        next1.style.padding = `0px 30px 0px 30px`;

    }
};


//Places buttons on load.
window.addEventListener('load', () => {
    screenStyles();
    screenStyles1();
});


//Adjusts buttons on window resize.
window.addEventListener('resize', (event) => {
    screenStyles();
    screenStyles1();
});




//Set counter for setting distance for cards to move on each click
let count = 0;
let count1 = 0;


//Set tracker to keep track of where the controls and cards are in relation to the card container
let tracker = 0;
let tracker1 = 0;


//Action for Next button
const moveCardsLeft = function () {
    //Count controls the distnace for each card push and can be adjusted by changing the integer.
    //The tracker keeps track of the index while the next and prev buttons are being clicked.
    count = count - cardWidth;
    tracker++;

    //disables buttons after cards reach a specified distance.
    if (tracker === 0) {
        prev.setAttribute('disabled', '');
        
    } else {
        prev.removeAttribute('disabled');
        
    }
    if (tracker === containerChildValue - 1) {
        next.setAttribute('disabled', '');
        
    } else {
        next.removeAttribute('disabled');
        
    }

    //Pushes cards based on count. 
    const cards = document.querySelectorAll('.card');
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });

}
const moveCardsLeft1 = function () {
    //Count controls the distnace for each card push and can be adjusted by changing the integer.
    //The tracker keeps track of the index while the next and prev buttons are being clicked.
    count1 = count1 - cardWidth1;
    tracker1++;

    //disables buttons after cards reach a specified distance.
    if (tracker1 === 0) {
        prev1.setAttribute('disabled', '');
        
    } else {
        prev1.removeAttribute('disabled');
        
    }
    if (tracker1 === containerChildValue1 - 1) {
        next1.setAttribute('disabled', '');
        
    } else {
        next1.removeAttribute('disabled');
        
    }

    //Pushes cards based on count. 
    
    const cards1 = document.querySelectorAll('.card1');
    cards1.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count1}px)`;
    });
}
    

//Action for Prev button
const moveCardsRight = function () {
    count = count + cardWidth ;
    tracker--;
    if (tracker <= 0) {
        prev.setAttribute('disabled', '');
        
    } else {
        prev.removeAttribute('disabled');
        
    }
    if (tracker === containerChildValue - 1) {
        next.setAttribute('disabled', '');
        
    } else {
        next.removeAttribute('disabled');
        
    }
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count}px)`;
    });
    
}

const moveCardsRight1 = function () {
    count1 = count1 + cardWidth1 ;
    tracker1--;
    if (tracker1 <= 0) {
        prev1.setAttribute('disabled', '');
        
    } else {
        prev1.removeAttribute('disabled');
        
    }
    if (tracker1 === containerChildValue1 - 1) {
        next1.setAttribute('disabled', '');
        
    } else {
        next1.removeAttribute('disabled');
        
    }
    const cards1 = document.querySelectorAll('.card1');
    cards1.forEach(function (el, i, arr) {
        el.style.transform = `translateX(${count1}px)`;
    });
}
//Event listeners to slide the cards.
prev.addEventListener('click', () => {
    moveCardsRight();
});

next.addEventListener('click', () => {
    moveCardsLeft();
});
prev1.addEventListener('click', () => {
    moveCardsRight1();
});

next1.addEventListener('click', () => {
    moveCardsLeft1();
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

    if(first_close && second_close) {
        sear_ish.classList.remove("d-none");
        console.log("Ochildi");
    } else {
        console.log("Yopildi");
        sear_ish.classList.add("d-none");
        sear_toplam.classList.add("d-none");
    }
})

btn_yonalish.addEventListener('click', () => {
    if(sear_toplam.classList.contains("d-none")) {
        sear_toplam.classList.remove("d-none");
        sear_toplam.style.display = "flex";
    } else {
        sear_toplam.classList.add("d-none");
    }
})
header_badge2.addEventListener('click', () => {
    if(search.classList.contains("d-none")) {
        search.classList.remove("d-none");
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


