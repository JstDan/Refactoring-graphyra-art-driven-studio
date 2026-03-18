export type AboutData = {
  values: {
    number: string;
    title: string;
    description: string;
  }[];
  stats: {
    number: string;
    label: string;
  }[];
};

export const aboutData: AboutData = {
  values: [
    {
      number: "01",
      title: "Форма преди тренд",
      description:
        "Не следваме модни вълни. Създаваме дизайн, който издържа на времето и изгражда истинска идентичност.",
    },
    {
      number: "02",
      title: "Дизайн със структура",
      description:
        "Всеки елемент има своето място и цел. Балансът между естетика и функционалност е в основата на работата ни.",
    },
    {
      number: "03",
      title: "Визуален образ с цел",
      description:
        "Дизайнът не е украшение — той комуникира, убеждава и създава връзка между бранда и аудиторията.",
    },
    {
      number: "04",
      title: "Детайлите имат значение",
      description:
        "От кернинга до цветовите нюанси — перфекционизмът ни е гаранция за качество във всеки пиксел.",
    },
  ],
  stats: [
    { number: "50+", label: "Завършени проекта" },
    { number: "30+", label: "Доволни клиента" },
    { number: "3+", label: "Години опит" },
    { number: "100%", label: "Отдаденост" },
  ],
};
