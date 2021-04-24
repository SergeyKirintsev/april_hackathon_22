const dictionary = {
  "RU" : {
    "menu-home": "Домой",
    "menu-about": "О нас",
    "menu-skills": "Навыки",
    "menu-portfolio": "Портфолио",
    "menu-contacts": "Контакты",
    "card-name-alyona": "Алёна Ирисова",
    "card-name-sergey": "Сергей Киринцев",
    "card-name-dmitriy": "Дмитрий Парфентьев",
    "card-position-alyona": "фронтенд-разработчик",
    "card-position-sergey": "фронтенд-разработчик",
    "card-position-dmitriy": "фронтенд-разработчик",
    "card-experience-alyona": "четыре года в дизайне, полгода во фронтенд-разработке",
    "card-experience-sergey": "добавить описание",
    "card-experience-dmitriy": "добавить описание",
    "about": "О нас",
    "about-first-parag": "Мы молодая и дружная команда веб-разработчиков на пути к покорению новых вершин во фронтенде.",
    "about-second-parag": "Мы постоянно учимся и совершенствуемся, принимаем участие в разнообразных конкурсах и мероприятиях, учимся у гуру фронтенда и разрабатываем собственные проекты.",
    "about-third-parag": "Разработаем и реализуем фронтенд и для Вашего проекта тоже :)",
    "skills": "Навыки",
    "skills-intro": "Мы работаем с такими технологиями и программами, как:",
    "portfolio": "Портфолио",
    "portfolio-travel": "Путешествия",
    "portfolio-mesto": "Место",
    "portfolio-hangman": "Виселица",
    "portfolio-cards": "Угадай карточку",
    "portfolio-piano": "Пианино",
    "portfolio-memory": "Тренировка памяти",
    "contacts": "Контакты",
    "contacts-parag": "Хотите узнать больше? Мы Вам очень рады!",
    "contacts-teleg-alyona": "Алёна Ирисова",
    "contacts-teleg-sergey": "Сергей Киринцев",
    "contacts-teleg-dmitriy": "Дмитрий Парфентьев",
    "contacts-inst-alyona": "Алёна Ирисова",
    "contacts-inst-sergey": "Сергей Киринцев",
    "contacts-inst-dmitriy": "Дмитрий Парфентьев",
    "contacts-parag-social": "Лайкните нас или напишите нам в социальных сетях",
    "contacts-button": "Отправить сообщение",
    "popup-contact-header": "Напишите нам",
    "popup-contact-sendBtn": "Отправить",
    "placeholder": {
      "user-name": "Имя",
      "user-tel": "Телефон",
      "user-email": "Электронная почта",
      "user-textarea": "Ваш текст",
    }
  },
  "ENG": {
    "menu-home": "Home",
    "menu-about": "About us",
    "menu-skills": "Skills",
    "menu-portfolio": "Portfolio",
    "menu-contacts": "Contacts",
    "card-name-alyona": "Alyona Irisova",
    "card-name-sergey": "Sergey Kirintsev",
    "card-name-dmitriy": "Dmitriy Parfentyev",
    "card-position-alyona": "frontend developer",
    "card-position-sergey": "frontend developer",
    "card-position-dmitriy": "frontend developer",
    "card-experience-alyona": "four year experience as a designer, six months as a frontend developer",
    "card-experience-sergey": "add description",
    "card-experience-dmitriy": "add description",
    "about": "About us",
    "about-first-parag": "We are a young and friendly team of web developers on the way to conquering new heights in the frontend development.",
    "about-second-parag": "We constantly learn and improve our skills, take part in various competitions and events, learn from the guru of the frontend and develop our own projects.",
    "about-third-parag": "We will develop and implement a frontend for your project too :)",
    "skills": "Skills",
    "skills-intro": "We work with the technologies and programs as:",
    "portfolio": "Portfolio",
    "portfolio-travel": "Russian Travel",
    "portfolio-mesto": "Mesto",
    "portfolio-hangman": "Hangman Game",
    "portfolio-cards": "Guess the Card",
    "portfolio-piano": "Virtual Piano",
    "portfolio-memory": "Memory Game",
    "contacts": "Contacts",
    "contacts-parag": "Want to know more? You are welcome!",
    "contacts-teleg-alyona": "Alyona Irisova",
    "contacts-teleg-sergey": "Sergey Kirintsev",
    "contacts-teleg-dmitriy": "Dmitriy Parfentyev",
    "contacts-inst-alyona": "Alyona Irisova",
    "contacts-inst-sergey": "Sergey Kirintsev",
    "contacts-inst-dmitriy": "Dmitriy Parfentyev",
    "contacts-parag-social": "Like us or write in social networks",
    "contacts-button": "Send message",
    "popup-contact-header": "Contact us",
    "popup-contact-sendBtn": "Send",
    "placeholder": {
      "user-name": "Name",
      "user-tel": "Phone",
      "user-email": "Email",
      "user-textarea": "Your text",
    }
  }
}

const changeLang = (lng) => {
  const currentDictionary = dictionary[lng];
  for (let key in currentDictionary) {
    if (key === "placeholder") {
      const elements = document.querySelectorAll(`*[data-lang=${key}]`);
      elements.forEach(el => el.placeholder = currentDictionary[key][el.name]);
    } else {
      const element = document.querySelector(`*[data-lang=${key}]`);
      if (element !== null) {
        element.textContent = currentDictionary[key];
      }
    }
  }
};

export { changeLang };
