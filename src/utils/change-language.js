const dictionaryRu = {
  "first-name": "Денис",
  "last-name": "Новик",
  about: "Обо мне",
};

const dictionaryEng = {
  "first-name": "Denis",
  "last-name": "Novik",
  about: "About me",
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
