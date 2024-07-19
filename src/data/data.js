let DATA = [];

if (localStorage.getItem("data") && localStorage.length > 1) {
  DATA = JSON.parse(localStorage.getItem("data"));
} else {
  DATA = [
    { songName: "Люби меня люби", keyOf: "F" },

    { songName: "Любочка", keyOf: "G" },

    { songName: "Скулицы", keyOf: "E" },

    { songName: "Яхта", keyOf: "Am" },

    { songName: "Ромашки", keyOf: "Dm" },

    { songName: "МНЛ", keyOf: "Dm" },

    { songName: "Голая", keyOf: "Am" },

    { songName: "Седьмой лепесток", keyOf: "Ebm" },

    { songName: "Нбвш", keyOf: "D#" },

    { songName: "Хоп-хей", keyOf: "Am" },

    { songName: "Медведица", keyOf: "Em" },

    { songName: "Поппури", keyOf: "D" },

    { songName: "Лесник", keyOf: "Am" },

    { songName: "Ручки", keyOf: "E" },

    { songName: "Максим", keyOf: "Bm" },

    { songName: "ХГЕА", keyOf: "Bm" },

    { songName: "Царица", keyOf: "F#m" },

    { songName: "Птсл", keyOf: "Am" },

    { songName: "Куколд", keyOf: "C#m" },

    { songName: "ВВВ", keyOf: "Cm" },

    { songName: "Тулула", keyOf: "Cm" },

    { songName: "ХалиГали", keyOf: "Bm" },

    { songName: "Мухожук", keyOf: "Am" },

    { songName: "Аккумулятор", keyOf: "Bm" },
    { songName: "Белые розы", keyOf: "Am" },
    { songName: "Летящей походкой", keyOf: "Dm" },
    { songName: "Видели Ночь", keyOf: "" },
    { songName: "Танцуй", keyOf: "Gm" },
    { songName: "Ресницы", keyOf: "F#m" },
    { songName: "ПТСЛ", keyOf: "Am" },
    { songName: "Мое сердце", keyOf: "D" },
    { songName: "Нон стоп", keyOf: "C#m" },
    { songName: "Медлячок", keyOf: "Bm" },
    { songName: "Юность", keyOf: "Fm" },
    { songName: "Максим", keyOf: "Bm" },
    { songName: "Ром", keyOf: "Cm" },
    { songName: "Салют Вера", keyOf: "Abm" },
    { songName: "Ночь", keyOf: "Dm" },
    { songName: "I Wanna Be Your Slave", keyOf: "C#m" },
    { songName: "Sunny", keyOf: "Bm" },
    { songName: "Song 2", keyOf: "" },
  ];
}
export { DATA };
