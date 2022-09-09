"use strict";

const btns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

function modalShow() {
  modal.style.opacity = 1;
  modal.style.visibility = "visible";
}

function modalHide() {
  modal.style.opacity = 0;
  modal.style.visibility = "hidden";
}

function overlayShow() {
  overlay.style.opacity = 1;
  overlay.style.visibility = "visible";
}

function overlayHiden() {
  overlay.style.opacity = 1;
  overlay.style.visibility = "hidden";
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    modalShow();
    overlayShow();
  });
}

closeBtn.addEventListener("click", function () {
  modalHide();
  overlayShow();
});

overlay.addEventListener("click", function () {
  modalHide();
  overlayHiden();
});
