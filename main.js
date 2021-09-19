"use strict";

let brandInput,
  modelInput,
  yearInput,
  errorInfo,
  addBtn,
  carList,
  carToEdit,
  editBrandInput,
  editModelInput,
  editYearInput,
  editButton,
  editInfo;

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
  // edit
  editBrandInput = document.querySelector("#edit-brand-input");
  editModelInput = document.querySelector("#edit-model-input");
  editYearInput = document.querySelector("#edit-year-input");
  editButton = document.querySelector(".edit-button");
  editInfo = document.querySelector(".edit-info");
};

const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addNewCar);
  carList.addEventListener("click", checkClick);
  editButton.addEventListener("click", changeCarText);
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

const checkClick = (e) => {
  // console.log(e.target);

  if (e.target.matches(".edit")) {
    editCar(e);
  } else if (e.target.matches(".delete")) {
    deleteCar(e);
  }
};

const editCar = (e) => {
  console.log("edit");
  carToEdit = e.target.closest("tr");
  console.log(carToEdit.children[0].textContent);

  editBrandInput.value = carToEdit.children[0].textContent;
  editModelInput.value = carToEdit.children[1].textContent;
  editYearInput.value = carToEdit.children[2].textContent;
};

const changeCarText = () => {
  if (
    editBrandInput.value !== "" &&
    editModelInput.value !== "" &&
    editYearInput.value !== ""
  ) {
    console.log(carToEdit.children[0].textContent);
    carToEdit.children[0].textContent = editBrandInput.value;
    carToEdit.children[1].textContent = editModelInput.value;
    carToEdit.children[2].textContent = editYearInput.value;
  } else {
    editInfo.textContent = "Fields cannot be empty!";
  }
};

const deleteCar = () => {
  console.log("delete");
};

document.addEventListener("DOMContentLoaded", main);
