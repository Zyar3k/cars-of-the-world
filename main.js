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

const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addNewCar);
};

const addNewCar = () => {
  console.log("newCar");

  if (
    brandInput.value !== "" &&
    modelInput.value !== "" &&
    yearInput.value !== ""
  ) {
    const newCar = document.createElement("tr");
    console.log(modelInput.value);
    const newBrand = document.createElement("td");
    newBrand.textContent = brandInput.value;
    const newModel = document.createElement("td");
    newModel.textContent = modelInput.value;
    const newYear = document.createElement("td");
    newYear.textContent = yearInput.value;

    newCar.append(newBrand, newModel, newYear);

    carList.append(newCar);

    brandInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    errorInfo.textContent = "";
  } else {
    errorInfo.textContent = "Complete all fields";
  }
};

const createToolsArea = () => {};

const editCar = () => {};

const deleteCar = () => {};

document.addEventListener("DOMContentLoaded", main);
