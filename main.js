"use strict";
const houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];

const buttonEvents = () => {
  document.querySelector("#btnShowForm").addEventListener("click", showForm);

  document
    .querySelector("#student-cards")
    .addEventListener("click", deleteStudent);
};

const formEvents = () => {
  document.querySelector("#btn-srt").addEventListener("click", getStudentName);
  document.querySelector("#btn-srt").addEventListener("click", buildCard);
};

const buildForm = () => {
  let domString = `<form id="studentForm>
                    <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Enter First Year's Name</label>
                    </div>
                    <div class="form-group row">
                    <label for="input-student" class="col-sm-2 col-form-label">Name:</label>
                    <div class="col-sm-10">
                        <input
                        type="student"
                        class="form-control"
                        id="input-student"/>
                        <button type="button" class="btn btn-info" id="btn-srt">Sort!</button>
                    </div>
                    </div>
                 </form>`;
  printToDom("sort-form", domString);
};
const showForm = (e) => {
  const target = e.target.id;
  if (target === "btnGetSorting") {
    buildForm();
    formEvents();
  }
};
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

let studentNames = [];

const houseSorter = () => {
  return Math.floor(Math.random() * 4);
};

// const getStudentName = () => {
//   const name = document.getElementById("input-student").value;
//   studentNames.push({ name: name, house: houses[houseSorter()]});
//   document.querySelector("#studentForm").reset();

//   if (document.getElementById("input-student").value.length == 0) {
//     alert("empty");
//   }
// };
const getStudentName = () => {
  const name = document.getElementById("input-student").value;
  studentNames.push({ name: name, house: houses[houseSorter()]});
  // document.querySelector("#studentForm").reset();
  if (document.getElementById("input-student").value.length === 0) {
    alert("empty");
  }
};

const buildCard = () => {
  let domstring = "";

  for (let i = 0; i < studentNames.length; i++) {
    domstring += `<div class="card" id="${i}" style="width: 18rem;">`;
    domstring += `<div class="card-body">`;
    domstring += `<h5 class="card-title">${studentNames[i].name}</h5>`;
    domstring += `<h6 class="card-subtitle mb-2 text-muted">${studentNames[i].house}</h6>`;
    domstring += `<button type="button" class="btn btn-secondary" id=${i}>Expel</button>`;
    domstring += `</div></div>`;
  }
  printToDom("student-cards", domstring);
};

const deleteStudent = (e) => {
  const buttonType = e.target.type;
  const expel = e.target.id;

  if (buttonType === "button") {
    studentNames.splice(expel, 1);
    buildCard();
  }
};

const init = () => {
  buttonEvents();
};

init();
