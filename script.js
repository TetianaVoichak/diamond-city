//adaptive menu
const menuBtn = document.querySelector(".menu-btn-mobile");
const menuMobile = document.querySelector(".menu-mobile");
const promoMobile = document.querySelector(".promo_inner");

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
  promoMobile.classList.toggle('menu-open');

});

class MyBlockClass {
  constructor(btn, div, info) {
    this.btn = btn;
    this.div = div;
    this.info = info;
  }
  // a function to switch:
  changeStyle = () => {
    const check = this.info.style.visibility == "hidden";

    // We create an object that has the properties as Name Value Pairs:
    const infoEnabledStyle = {
      visibility: "visible",
      background: "#F0F0F0",
      height: "102px",
    }

    // Another object contains the other properties:
    const infoDisabledStyle = {
      visibility: "hidden",
      background: "#fff",
      height: "71px",
      color: "#333",
    }
    //Change the button text depending on the state
    this.btn.textContent = check ? "-" : "+";

    // Apply styles via condition
    if (check) {
      for (const prop in infoEnabledStyle) {
        this.info.style[prop] = infoEnabledStyle[prop]
      }

      // Apply styles to the div for the open state
      this.div.style.height = infoEnabledStyle.height;
      this.div.style.background = infoEnabledStyle.background;
      this.info.style.background = infoEnabledStyle.background;
      this.div.style.color = infoEnabledStyle.color;
    }
    else {
      for (const prop in infoDisabledStyle) {
        this.info.style[prop] = infoDisabledStyle[prop]
      }
      // Apply styles to the div for the close state
      this.div.style.height = infoDisabledStyle.height;
      this.div.style.background = infoDisabledStyle.background;
      this.info.style.background = infoDisabledStyle.background;
      this.div.style.color = infoDisabledStyle.color;
    }

  };
  onButtonClick() {
    this.changeStyle();
  }
}

let buttonElemServ = document.querySelector(".btn-info-charakt-serv");
let divChange1 = document.querySelector(".punkt-serv");
let outputMoreServ = document.querySelector(".more-info-serv");
let bl1 = new MyBlockClass(buttonElemServ, divChange1, outputMoreServ);
buttonElemServ.addEventListener("click", () => bl1.onButtonClick());

let buttonElemPark = document.querySelector(".btn-info-charakt-park");
let divChange2 = document.querySelector(".punkt-park");
let outputMorePark = document.querySelector(".more-info-park");
let bl2 = new MyBlockClass(buttonElemPark, divChange2, outputMorePark);
buttonElemPark.addEventListener("click", () => bl2.onButtonClick());

let buttonElemVideo = document.querySelector(".btn-info-charakt-video");
let divChange3 = document.querySelector(".punkt-video");
let outputMoreVideo = document.querySelector(".more-info-video");
let bl3 = new MyBlockClass(buttonElemVideo, divChange3, outputMoreVideo);
buttonElemVideo.addEventListener("click", () => bl3.onButtonClick());

let buttonElemLift = document.querySelector(".btn-info-charakt-lift");
let divChange4 = document.querySelector(".punkt-lift");
let outputMoreLift = document.querySelector(".more-info-lift");
let bl4 = new MyBlockClass(buttonElemLift, divChange4, outputMoreLift);
buttonElemLift.addEventListener("click", () => bl4.onButtonClick());


let buttonElemArea = document.querySelector(".btn-info-charakt-terr");
let divChange5 = document.querySelector(".punkt-terr");
let outputMoreArea = document.querySelector(".more-info-terr");
let bl5 = new MyBlockClass(buttonElemArea, divChange5, outputMoreArea);
buttonElemArea.addEventListener("click", () => bl5.onButtonClick());

let buttonElemFenst = document.querySelector(".btn-info-charakt-fenst");
let divChange6 = document.querySelector(".punkt-fenst");
let outputMoreFenst = document.querySelector(".more-info-fenst");
let bl6 = new MyBlockClass(buttonElemFenst, divChange6, outputMoreFenst);
buttonElemFenst.addEventListener("click", () => bl6.onButtonClick());


let buttonElemSignal = document.querySelector(".btn-info-charakt-signal");
let divChange7 = document.querySelector(".punkt-signal");
let outputMoreSignal = document.querySelector(".more-info-signal");
let bl7 = new MyBlockClass(buttonElemSignal, divChange7, outputMoreSignal);
buttonElemSignal.addEventListener("click", () => bl7.onButtonClick());


let buttonElemKond = document.querySelector(".btn-info-charakt-kond");
let divChange8 = document.querySelector(".punkt-kond");
let outputMoreKond = document.querySelector(".more-info-kond");
let bl8 = new MyBlockClass(buttonElemKond, divChange8, outputMoreKond);
buttonElemKond.addEventListener("click", () => bl8.onButtonClick());

let buttonElemVent = document.querySelector(".btn-info-charakt-vent");
let divChange9 = document.querySelector(".punkt-vent");
let outputMoreVent = document.querySelector(".more-info-vent");
let bl9 = new MyBlockClass(buttonElemVent, divChange9, outputMoreVent);
buttonElemVent.addEventListener("click", () => bl9.onButtonClick());



