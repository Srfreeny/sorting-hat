"use strict";
const houses = [
  {
    name: "Gryffindor",
  },
  {
    name: "Ravenclaw",
  },
  {
    name: "Slytherin",
  },
  {
    name: "Hufflepuff",
  },
];

// studentName = [""];

// BUILDING THE INPUT FORM AND HAVING IT APPEAR ON A BUTTON CLICK
const buildForm = () => {
  let domString = `<form>
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
                          <div id="sort-hat">
                          <button type="button" class="btn btn-info" id="btn-srt">Sort!</button>
                          </div>
                      </div>
                      </div>
                   </form>`;
  printToDom("sort-form", domString);
};

const showForm = (e) => {
  const target = e.target.id;
  if (target === "btnGetSorting") {
    console.log("testing");
    buildForm();
  }
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buttonEvents = () => {
  document.querySelector("#btnShowForm").addEventListener("click", showForm);
};

const init = () => {
  buttonEvents();
};

init();

//END FORM BUILDING!!!!!!!

//      function addInput() {
//         let name = document.getElementById("input-student").value;
//          name && studentName.push(name);
//       }

// studentCardBuilder = () => {
//   let domString = "";
// };

const showStudent = (e) => {
    const target2 = e.target.id
    if (target2 === "btn-srt") {console.log('itworked!!!$$$');}
   
}

const studentSortClick = () => {
    document.querySelector("#sort-hat").addEventListener("click", showStudent);
}

const init2 = () => {
    studentSortClick();
}

