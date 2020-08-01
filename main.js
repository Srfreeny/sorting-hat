'use strict';
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
                        <button type="button" class="btn btn-info" id="btn-srt">Sort!</button>
                    </div>
                    </div>
                 </form>`;
  printToDom('sort-form', domString);
};
const showForm = e => {
  const target = e.target.id;
  if (target === 'btnGetSorting') {
    console.log('testing');
    buildForm();
  }
};
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};
const buttonEvents = () => {
  document.querySelector('#btnShowForm').addEventListener('click', showForm);
};
const init = () => {
  buttonEvents();
};
init();