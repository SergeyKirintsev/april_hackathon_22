const dictionaryRu = {
  "menu-home": "Домой",
  "menu-about": "О нас",
  "menu-skills": "Навыки",
  "menu-portfolio": "Портфолио",
  "menu-contacts": "Контакты",
};

const dictionaryEng = {
  "menu-home": "Home",
  "menu-about": "About us",
  "menu-skills": "Skills",
  "menu-portfolio": "Portfolio",
  "menu-contacts": "Contacts",
};

const changeLang = (lng) => {
  const dictionary = lng === "RU" ? dictionaryRu : dictionaryEng;
  for (let key in dictionary) {
    const element = document.querySelector(`#${key}`);
    if (element !== null) {
      element.textContent = dictionary[key];
    }
  }
};

export { changeLang };
