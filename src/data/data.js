let DATA = [];

if (localStorage.getItem("data")) {
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
  ];
}
export { DATA };
