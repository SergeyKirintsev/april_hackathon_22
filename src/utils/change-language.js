const dictionaryRu = {
  home: "Домой",
  about: "Обо мне",
  skills: "Навыки",
  portfolio: "Портфолио",
  contacts: "Контакты",
};

const dictionaryEng = {
  home: "Home",
  about: "About me",
  skills: "Skills",
  portfolio: "Portfolio",
  contacts: "Contacts",
};

const changeLang = (lng = "ENG") => {
  const dictionary = lng === "RU" ? dictionaryRu : dictionaryEng;
  for (let key in dictionary) {
    const element = document.querySelector(`#${key}`);
    if (element !== null) {
      element.textContent = dictionary[key];
    }
  }
};

export { changeLang };
