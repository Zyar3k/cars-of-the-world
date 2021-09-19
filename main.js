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
  editInfo,
  sortBrandBtn,
  sortModelBtn,
  sortYearBtn;
let desc = false;
let cars = [
  {
    id: 18,
    brand: "Fiat",
    model: "2/2B",
    year: "1910"
  },
  {
    id: 22,
    brand: "Audi",
    model: "Type C",
    year: "1912"
  },
  {
    id: 23,
    brand: "Chevrolet",
    model: "Classic Six",
    year: "1910"
  },
  {
    id: 44,
    brand: "Essex",
    model: "Essex A",
    year: "1919"
  },
  {
    id: 5,
    brand: "Hispano-Suiza",
    model: "H6",
    year: "1919"
  },
  {
    id: 64,
    brand: "Lancia",
    model: "Tipo 55 Corsa",
    year: "1908"
  },
  {
    id: 7,
    brand: "Morris",
    model: "Oxford",
    year: "1913"
  },
  {
    id: 8,
    brand: "Opel",
    model: "Rennwagen",
    year: "1913"
  },
  {
    id: 92,
    brand: "Peugeot",
    model: "Type 126",
    year: "1910"
  },
  {
    id: 140,
    brand: "Rolls-Royce",
    model: "Silver Ghost",
    year: "1906"
  },
  {
    id: 121,
    brand: "Vauxhall",
    model: "Prince Henry",
    year: "1911"
  },
  {
    id: 112,
    brand: "Woods",
    model: "Dual Power",
    year: "1917"
  }
];

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
  displayList();
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
  // sort
  sortBrandBtn = document.querySelector(".sort-by-brand");
  sortModelBtn = document.querySelector(".sort-by-model");
  sortYearBtn = document.querySelector(".sort-by-year");
};

const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addNewCar);
  carList.addEventListener("click", checkClick);
  editButton.addEventListener("click", changeCarText);
  sortBrandBtn.addEventListener("click", () => {
    let array = sortArrayBy(cars, "brand", desc);
    displayList(array);
    desc = !desc;
  });
  sortModelBtn.addEventListener("click", () => {
    let array = sortArrayBy(cars, "model", desc);
    displayList(array);
    desc = !desc;
  });
  sortYearBtn.addEventListener("click", () => {
    let array = sortArrayBy(cars, "year", desc);
    displayList(array);
    desc = !desc;
  });
};

const displayList = () => {
  let item;
  carList.innerHTML = "";
  cars.forEach((car) => {
    item = document.createElement("tr");

    item.innerHTML = `
    <td>${car.brand}</td>
    <td>${car.model}</td>
    <td>${car.year}</td>
    <td class="tools">
      <span
        ><i class="btn edit text-success btn-sm bi-pencil-square" data-bs-toggle="modal"
        data-bs-target="#edit-car"></i
      ></span>
      <span
        ><i class="btn delete text-danger btn-sm bi bi-x-square"></i
      ></span>
    </td>`;
    carList.append(item);
  });
};

const sortArrayBy = (array, sort, desc) => {
  array.sort((a, b) => {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;
    return 0;
  });
  if (desc) array.reverse();

  return array;
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
  editBtn.innerHTML = `<i class="btn edit text-success btn-sm bi-pencil-square" data-bs-toggle="modal"
  data-bs-target="#edit-car"></i
></i
  >`;

  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = `<i class="btn delete text-danger btn-sm bi bi-x-square"></i
  >`;
  toolsPanel.append(editBtn, deleteBtn);
};

const checkClick = (e) => {
  if (e.target.matches(".edit")) {
    editCar(e);
  } else if (e.target.matches(".delete")) {
    deleteCar(e);
  }
};

const editCar = (e) => {
  carToEdit = e.target.closest("tr");

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

const deleteCar = (e) => {
  e.target.closest("tr").remove();
  const allCars = carList.querySelectorAll("tr");
  if (allCars.length === 0) {
    errorInfo.textContent = "No cars to display :(";
  }
};

document.addEventListener("DOMContentLoaded", main);
