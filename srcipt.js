//Grund APP Code


//Globale Varriablen
let noteTitels = [];
let notes = []; 

load();



// 1.  render
function render() {
    let content = document.getElementById('notes'); 
    content.innerHTML = ''; 


    for (let i = 0; i < noteTitels.length; i++) {
        const noteTitel = noteTitels[i];
        const note = notes[i];

        content.innerHTML += `
        <div class="notice">
            <div class="Notice-header-box">
                <div onclick="deleteContact(${i})" class="Notice-header-over"><b>${noteTitel}</b><b  class="delete-note-icon">X</b></div>
            </div>
            <div class="notice-main-container">
                <textarea oninput="auto_grow(this)"  disabled class="notice-main">${note}</textarea>
            </div>
            <div class="notice-bottom">
                <div class="notice-bottom-left"></div>
                <div class="notice-bottom-right"></div>
            </div>
        </div>
        
        `;

    }

}

// 2.  Werte zum Array hinzufügen
//
function addContact() {
    let noteTitelTop = document.getElementById('input-titel'); 
    let noteText = document.getElementById('note-text');
    

    noteTitels.push(noteTitelTop.value);
    notes.push(noteText.value);

    noteTitelTop.value = '';
    noteText.value = '';

    render();
    save();

}



// 4. Werte aus dem Array löschen
//
function deleteContact(i) {
    noteTitels.splice(i, 1);
    notes.splice(i, 1); 

    render();
    save();

}


// 5. Variablen speichern
//
function save() {
    let titelAsText = JSON.stringify(noteTitels);
    localStorage.setItem('titels', titelAsText); 

    let noteAsText = JSON.stringify(notes);
    localStorage.setItem('notes', noteAsText); 
}


//  6. Variablen laden
//
function load() {
    let titelAsText = localStorage.getItem('titels');
    let noteAsText = localStorage.getItem('notes');
    if (titelAsText && noteAsText) {
        noteTitels = JSON.parse(titelAsText);
        notes = JSON.parse(noteAsText); 
        
    }

}


//textara alert Ausgabe max. Zeichen erreicht



//Notefild open and close

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}


function oppenTextNoteFild() {
    document.getElementById('imput-container').classList.remove('d-none');
    document.getElementById('post-button').classList.remove('d-none');
}


function closeTextNoteFild() {
    document.getElementById('imput-container').classList.add('d-none');
    document.getElementById('post-button').classList.add('d-none');
}



//Setting-Menu open and close 
/*function openSettingMenu() {
    document.getElementById('main-right').classList.remove('d-none');
}

function closeSettingMenu() {
    document.getElementById('main-right').classList.add('d-none');
}
*/

function closeNav() {
    document.getElementById("main-right").style.width = "0";
    document.getElementById("main-right").style.borderLeft = "none";
   

   // document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


function openNav() {
    document.getElementById("main-right").style.width = "250px";
    document.getElementById("main-right").style.borderLeft = "5px solid #eac53d";
  //document.getElementById("main").style.marginLeft = "300px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}


let essen = [1, 2, 3, 4, 5, 6, 7];






