console.log("Welcome to Notes Application");
// alert("Hi, Welcome to My Notes. Click Ok to get Started");
showNotes();

// if user adds a notes add it to local Storage 

let addbtn = document.getElementById('addbutton');
addbtn.addEventListener("click", function (e) {
    let addtext = document.getElementById("addtext");
    let notes = localStorage.getItem("notes");
    if (notes == null) {

        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes)
    };
    notesobj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtext.value = "";
    console.log(notesobj);
    showNotes();

})
// Function to Show Elements from localstorage   
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {

        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes)
    };

    let html = "";
    notesobj.forEach(function (element, index) {
        html += ` <div class="card my-2 mx-2" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`
    });

    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = `Nothing to show ! Use "Add a note Section" above to add your notes`
    }
}

// Function to delete note which is created

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {

        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes)
    };
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();


}


// Search Bar 

let search = document.getElementById("searchtxt");
search.addEventListener("input", function () {
    let inputval = search.value.toLowerCase();
    let notecard = document.getElementsByClassName("card my-2 mx-2");
    Array.from(notecard).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";

        }
    })
})