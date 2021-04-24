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

//стартовый попап и карточки
const page = document.querySelector(".page");
const startPopup = page.querySelector(".start-popup");
const startPopupTitle = startPopup.querySelector(".start-popup__title");
const header = page.querySelector(".header");
const intro = page.querySelector(".intro");
const mainTitle = document.querySelector(".intro__title");
const photoCardContainer = document.querySelector(".intro__cards");

(function removeStartPopup() {
  page.classList.add("page_preload");
  header.classList.add("header_preload");
  intro.classList.add("intro_preload");

  Promise.all([
    playAnimation(3000, startPopupTitle, "start-popup__title_hidden"),
    playAnimation(3100, startPopup, "start-popup_hidden"),
  ]).then(() => {
    setTimeout(() => {
      startPopup.remove();
      page.classList.remove("page_preload");
      header.classList.remove("header_preload");
      mainTitle.classList.add("anim-text-focus-in");
      intro.classList.remove("intro_preload");
      setTimeout(() => {
        photoCardContainer.classList.add("anim-text-focus-in");
      }, 1000);
    }, 1000);
  });

  function playAnimation(delay, element, animClass) {
    return new Promise((resolve) => {
      setTimeout(() => {
        element.classList.add(animClass);
        resolve();
      }, delay);
    });
  }
})();

const messageBtn = document.querySelector(".footer__message");

const popupEdit = document.querySelector(".popup");
let popupCloseBtn = popupEdit.querySelector(".popup__close");
let popupEditContainer = popupEdit.querySelector(".popup__container");

addPopupListener(popupEdit);

function addPopupListener(popup) {
  popup.addEventListener("mousedown", function (evt) {
    if (evt.target === popup) {
      togglePopup(popup);
    }
  });
}

function toggleListener(elem, popup) {
  elem.addEventListener("click", function () {
    togglePopup(popup);
  });
}

function togglePopup(popupElement) {
  popupElement.classList.toggle("popup_opened");
}

function popupEditSubmitHandler(evt) {
  evt.preventDefault();
  togglePopup(popupEdit);
}

messageBtn.addEventListener("click", function () {
  togglePopup(popupEdit);
});

toggleListener(popupCloseBtn, popupEdit);

popupEditContainer.addEventListener("submit", popupEditSubmitHandler);

const anchors = document.querySelectorAll('.header a[href^="#"]');

// Цикл по всем ссылкам
for (let anchor of anchors) {
  anchor.addEventListener("click", function (evt) {
    evt.preventDefault(); // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute("href") ? anchor.getAttribute("href") : "body";
    // Плавная прокрутка до элемента с i d = href у ссылки
    const gotoBlock = document.querySelector(goto);
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top +
      pageYOffset -
      document.querySelector(".header").offsetHeight;
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
  });
}
