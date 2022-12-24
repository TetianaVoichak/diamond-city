class MyBlockClass {
  constructor(btn, div, info) {
    this.btn = btn;
    this.div = div;
    this.info = info;
  }

  onButtonClick() {
    if (this.info.style.visibility == "visible") {
      this.btn.textContent = "+";
      this.info.style.visibility = "hidden";
      this.div.style.height = "71px";
      this.div.style.background = "#fff";
      this.info.style.background = "#fff";
      this.div.style.color = "#333";
    } else {
      this.btn.textContent = "-";
      this.info.style.visibility = "visible";
      this.div.style.height = "102px";
      this.div.style.background = "#F0F0F0";
      this.info.style.background = "#F0F0F0";
    }
  }
}

let buttonElemServ = document.querySelector(".btn-info-charakt-serv");
let divChange1 = document.querySelector(".punkt-serv");
let outputMoreServ = document.querySelector(".more-info-serv");
let bl1 = new MyBlockClass(buttonElemServ, divChange1, outputMoreServ);
let newFunctServ = function () {
  buttonElemServ.addEventListener("click", bl1.onButtonClick());
};

let buttonElemPark = document.querySelector(".btn-info-charakt-park");
let divChange2 = document.querySelector(".punkt-park");
let outputMorePark = document.querySelector(".more-info-park");
let bl2 = new MyBlockClass(buttonElemPark, divChange2, outputMorePark);
let newFunctPark = function () {
  buttonElemPark.addEventListener("click", bl2.onButtonClick());
};

let buttonElemVideo = document.querySelector(".btn-info-charakt-video");
let divChange3 = document.querySelector(".punkt-video");
let outputMoreVideo = document.querySelector(".more-info-video");
let bl3 = new MyBlockClass(buttonElemVideo, divChange3, outputMoreVideo);
let newFunctVideo = function () {
  buttonElemVideo.addEventListener("click", bl3.onButtonClick());
};

let buttonElemLift = document.querySelector(".btn-info-charakt-lift");
let divChange4 = document.querySelector(".punkt-lift");
let outputMoreLift = document.querySelector(".more-info-lift");
let bl4 = new MyBlockClass(buttonElemLift, divChange4, outputMoreLift);
let newFunctLift = function () {
  buttonElemLift.addEventListener("click", bl4.onButtonClick());
};

let buttonElemArea = document.querySelector(".btn-info-charakt-terr");
let divChange5 = document.querySelector(".punkt-terr");
let outputMoreArea = document.querySelector(".more-info-terr");
let bl5 = new MyBlockClass(buttonElemArea, divChange5, outputMoreArea);
let newFunctArea = function () {
  buttonElemArea.addEventListener("click", bl5.onButtonClick());
};

let buttonElemFenst = document.querySelector(".btn-info-charakt-fenst");
let divChange6 = document.querySelector(".punkt-fenst");
let outputMoreFenst = document.querySelector(".more-info-fenst");
let bl6 = new MyBlockClass(buttonElemFenst, divChange6, outputMoreFenst);
let newFunctFenst = function () {
  buttonElemFenst.addEventListener("click", bl6.onButtonClick());
};

let buttonElemSignal = document.querySelector(".btn-info-charakt-signal");
let divChange7 = document.querySelector(".punkt-signal");
let outputMoreSignal = document.querySelector(".more-info-signal");
let bl7 = new MyBlockClass(buttonElemSignal, divChange7, outputMoreSignal);
let newFunctSignal = function () {
  buttonElemSignal.addEventListener("click", bl7.onButtonClick());
};

let buttonElemKond = document.querySelector(".btn-info-charakt-kond");
let divChange8 = document.querySelector(".punkt-kond");
let outputMoreKond = document.querySelector(".more-info-kond");
let bl8 = new MyBlockClass(buttonElemKond, divChange8, outputMoreKond);
let newFunctKond = function () {
  buttonElemKond.addEventListener("click", bl8.onButtonClick());
};

let buttonElemVent = document.querySelector(".btn-info-charakt-vent");
let divChange9 = document.querySelector(".punkt-vent");
let outputMoreVent = document.querySelector(".more-info-vent");
let bl9 = new MyBlockClass(buttonElemVent, divChange9, outputMoreVent);
let newFunctVent = function () {
  buttonElemVent.addEventListener("click", bl9.onButtonClick());
};
