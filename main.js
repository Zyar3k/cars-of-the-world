"use strict";

let brandInput, modelInput, yearInput, errorInfo, addBtn, carList;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  brandInput = document.querySelector("#brand-input");
  modelInput = document.querySelector("#model-input");
  yearInput = document.querySelector("#year-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".btn-add");
  carList = document.querySelector(".carlist tbody");
};

const prepareDOMEvents = () => {};

const addNewCar = () => {};

const createToolsArea = () => {};

const editCar = () => {};

const deleteCar = () => {};

document.addEventListener("DOMContentLoaded", main);
