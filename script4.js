"use strict";
const formatString = function(string) {
    let forForth = string;
    if (forForth.length > 40) {
      const news = forForth.slice(0, 40) + "...";
      return news;
    } else return forForth;
  };
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // вернется оригинальная строка
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
  // вернется оригинальная строка
  
  console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
  // вернется форматированная строка