import main from "../assets/img/navbar/ic_главная.svg";
import search_adress from "../assets/img/navbar/ic_поиск.svg";
import table from "../assets/img/navbar/vs_tables.svg";
import calendar from "../assets/img/navbar/ic_календарь.svg";
import maps from "../assets/img/navbar/ig_карты.svg";
import widgets from "../assets/img/navbar/ic_виджеты.svg";
import settings from "../assets/img/navbar/Настройки.svg";
import exit from "../assets/img/navbar/ic_выход.svg";
import profileSetup from "../assets/img/navbar/Настройка_проф.svg";
import financialManagement from "../assets/img/navbar/ic_управление_фин.svg";

export const mockNavBar = [
  {
    type: "button",
    img: main,
    title: "Главная",
    path: "/",
  },
  {
    type: "button",
    img: search_adress,
    title: "Поиск адресов",
    path: "/address",
  },
  {
    type: "button",
    img: table,
    title: "Таблицы",
    path: "/",
  },
  {
    type: "button",
    img: calendar,
    title: "Календарь",
    path: "/",
  },
  {
    type: "button",
    img: maps,
    title: "Карты",
    path: "/",
  },
  {
    type: "button",
    img: widgets,
    title: "Виджеты",
    path: "/",
  },
  {
    type: "accordion",
    img: settings,
    title: "Настройки",
  },
  {
    type: "button",
    img: exit,
    title: "Выход",
    path: "/",
  },
];

export const mockAccordion = [
  {
    img: profileSetup,
    title: "Настройки профиля",
    path: "/",
  },
  {
    img: financialManagement,
    title: "Управление финансами",
    path: "/",
  },
];
