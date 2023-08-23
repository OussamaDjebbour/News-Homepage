"use strict";

const listsBtn = document.querySelector(".btn-menu");
// const listsMobile = document.querySelector(".mobile-lists");
const listsMobile = document.querySelector(".lists");

const btnClose = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");

const ShowModal = function () {
  listsMobile.classList.add("show");
  overlay.classList.toggle("hidden");
};

listsBtn.addEventListener("click", function (e) {
  // listsMobile.classList.add("show");
  // overlay.classList.toggle("hidden");
  // listsMobile.style.width = "65%";
  ShowModal();
});

const CloseModal = function () {
  listsMobile.classList.remove("show");
  overlay.classList.add("hidden");
};

btnClose.addEventListener("click", function (e) {
  CloseModal();
});

overlay.addEventListener("click", CloseModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !listsMobile.classList.contains("hidden"))
    CloseModal();
});
