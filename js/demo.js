showNotes();
let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addtask");
  let notes = localStorage.getItem("MyTasksList");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("MyTasksList", JSON.stringify(notesObj));
  addTxt.value = "";
//   console.log(notesObj);
  showNotes();
});


//Function to Show Notes
function showNotes() {
    let notes = localStorage.getItem('MyTasksList');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard card" style="width: 18rem; margin-left : 2rem; margin-bottom : 2rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1} </h5>
                    <p class = "card-text"> ${element} </p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
                </div>
            </div>`;
    });

    let notesElm = document.getElementById('MyTasksList');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to Show...! You can add a Note from above`;
    }

}

//Function to Delete Notes
function deleteNote(index) {
    console.log('I am Deleting', index);
    let notes = localStorage.getItem('MyTasksList');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('MyTasksList', JSON.stringify(notesObj));
    showNotes();
}
