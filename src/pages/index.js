"use strict";

import "./index.css";
import { changeLang } from "../utils/change-language.js";

const menu = document.querySelector(".header__menu");
const menuItems = document.querySelectorAll(".header__link");

const menuLang = document.querySelector(".intro__lang");
const menuLangItems = document.querySelectorAll(".intro__lang-link");

menu.addEventListener("click", (evt) => {
  menuItems.forEach((el) => el.classList.remove("header__link_active"));
  evt.target.classList.add("header__link_active");
});

menuLang.addEventListener("click", (evt) => {
  // проверка повторного нажатия
  if (evt.target.classList.contains("intro__lang-link_active")) return;

  const lng = evt.target.textContent.toUpperCase();
  changeLang(lng);

  menuLangItems.forEach((el) => el.classList.remove("intro__lang-link_active"));
  evt.target.classList.add("intro__lang-link_active");
});

//стартовый попап
const page = document.querySelector(".page");
const startPopup = page.querySelector(".start-popup");
const startPopupTitle = startPopup.querySelector(".start-popup__title");

(function removeStartPopup() {
  bodyLock();
  page.classList.add('page_fixed');
  
  playAnimation()
    .then(() => playAnimation(1000, startPopup, "start-popup_hidden"))
    .then(() => {
      setTimeout(() => {
        startPopup.remove();
        page.classList.remove('page_fixed');
        bodyUnlock();
      }, 1000);
    });

  function playAnimation(
    delay = 3000,
    element = startPopupTitle,
    animClass = "start-popup__title_hidden",
  ) {
    return new Promise((resolve) => {
      setTimeout(() => {
        element.classList.add(animClass);
        resolve();
      }, delay);
    });
  }

  function bodyLock() {
    const paddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
    page.style.paddingRight = paddingValue;
  }

  function bodyUnlock() {
    page.style.paddingRight = '0';
  }
})();
