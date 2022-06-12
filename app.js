"use strict";

const navBtns = document.querySelectorAll(".nav__link");

const header = document.querySelector(".header");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");

const aboutWrapper = document.querySelector(".about__wrapper");
const portfolioWrapper = document.querySelector(".portfolio__wrapper");

const sections = [header, about, portfolio];

const mobileBtn = document.querySelector(".mobile-menu");

const nav = document.querySelector(".nav");

const navLines = document.querySelectorAll(".mobile-menu__line");

navLines.forEach((line, i) => {
  mobileBtn.addEventListener("click", function () {
    line.classList.toggle(`toggle-${i + 1}`);
  });
});

mobileBtn.addEventListener("click", function () {
  nav.classList.toggle("show");
});

navBtns.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

const options = {
  root: null,
  threshold: 0.4,
  rootMargin: "0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    //console.log(entry);
    navBtns.forEach((el) => {
      if (el.getAttribute("href").toString().includes(entry.target.className)) {
        el.classList.add("active", entry.isIntersecting);
      } else {
        el.classList.remove("active");
      }
    });
    if (entry.target.classList.contains("about")) {
      aboutWrapper.classList.add("appear");
    }
    if (entry.target.classList.contains("portfolio")) {
      portfolioWrapper.classList.add("appear");
    }
  });
}, options);

sections.forEach((el) => observer.observe(el));
