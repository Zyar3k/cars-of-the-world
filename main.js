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
    createToolsArea(newCar);
    carList.append(newCar);

    brandInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    errorInfo.textContent = "";
  } else {
    errorInfo.textContent = "Complete all fields";
  }
};

const createToolsArea = (newCar) => {
  const toolsPanel = document.createElement("td");
  toolsPanel.classList.add("tools");
  newCar.append(toolsPanel);

  const editBtn = document.createElement("span");
  editBtn.classList.add("edit");
  editBtn.innerHTML = `<i class="btn text-success btn-sm bi-pencil-square"></i
  >`;
  // editBtn.textContent = "EDIT";
  const deleteBtn = document.createElement("span");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = `<i class="btn text-danger btn-sm bi bi-x-square"></i
  >`;
  toolsPanel.append(editBtn, deleteBtn);
};

const editCar = () => {};

const deleteCar = () => {};

document.addEventListener("DOMContentLoaded", main);
