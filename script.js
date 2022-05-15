const addBtn = document.querySelector('.add-button')
const popup = document.querySelector('.popup')
const closePopupBtn = document.querySelector('.close')
const category = document.querySelector('#category')
const textarea = document.querySelector('textarea')
const error = document.querySelector('.error')
const saveBtn = document.querySelector('.save-btn')
const closeBtn = document.querySelector('.clear-all-btn')
const noteArea = document.querySelector('.note-area')
const deleteNoteBtn = document.querySelector('.delete-note')

let selectedValue;
let cardID = 0;



const popupShow = () => {
    popup.style.display = 'block'
}

const clearEverything = () => {
    popup.style.display = 'none'
    error.style.display = 'none'
    closePopupBtn.style.marginTop = '3rem'
    saveBtn.style.marginTop = '3rem'
    textarea.value = ''
    category.value = '0'
    noteArea.textContent = ''
}

const popupClose = () => {
    popup.style.display = 'none'
    error.style.display = 'none'
    closePopupBtn.style.marginTop = '3rem'
    saveBtn.style.marginTop = '3rem'
    textarea.value = ''
    category.value = '0'
}

const addNote = () => {
    if(category.value === '0'){
        error.style.display = 'block'
        closePopupBtn.style.marginTop = '0.9rem'
        saveBtn.style.marginTop = '0.9rem'
    }else if (textarea.value === ''){
        error.style.display = 'block'
        closePopupBtn.style.marginTop = '0.9rem'
        saveBtn.style.marginTop = '0.9rem'
    }else{
        error.style.display = 'none'
        closePopupBtn.style.marginTop = '3rem'
        saveBtn.style.marginTop = '3rem'
        popup.style.display = 'none'
        category.value = '0'
        createNote()
    }
}

const createNote = () => {
    const newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id', cardID);
    
    newNote.innerHTML = `
    
      <div class="note-header">
      <h3 class="note-title">${selectedValue}</h3>
        <button class="delete-note" onclick="deleteNote(${cardID})">
          <i class="fas fa-times icon"></i>
      </div>
      <div class="note-body">
      ${textarea.value}
    </div>

    `

    noteArea.appendChild(newNote)
    cardID++;
    textarea.value = ''
    category.selectedIndex = 0;
    popup.style.display = 'none';
    checkColor(newNote)
    
}


const checkColor = note => {
    switch (selectedValue) {
        case 'Zakupy':
            note.style.backgroundColor = 'rgb(72,255,0)';
            break;
        case 'Praca':
            note.style.backgroundColor = 'rgb(255,243,0)';
            break;
        case 'Inne':
            note.style.backgroundColor = 'rgb(0,170,255)';
            break;
    }
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
}

const deleteNote = id => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete)
}


addBtn.addEventListener('click', popupShow)
closePopupBtn.addEventListener('click', popupClose)
saveBtn.addEventListener('click', addNote)
closeBtn.addEventListener('click', clearEverything)
deleteNoteBtn.addEventListener('click', deleteNote)