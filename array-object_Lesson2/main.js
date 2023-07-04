// two ways create Array
const array1 = [1, 2, 3, 4]
const array2 = new Array(1, 2, 3, 4)

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


// console.log(inputElement.value);
// function render() {
//     // for(let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // }
//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }

/*createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    listElement.insertAdjacentHTML('beforeend',
        getNoteTemplate(inputElement.value))
    inputElement.value = '';
}// print(выводим) in HTML

createBtn.onclick = function () {

    inputElement.value = ''
}
*/

//getNoteTemplate(получить шаблон заметки)

/*function getNoteTemplate(title) {
    return `<li
    class="list-group-item d-flex justify-content-between align-items-center"
    >
    <span>${title}</span>
    <span>
      <span class="btn btn-small btn-success">&check;</span>
      <span class="btn btn-small btn-danger">&times;</span>
    </span></li>
    `
}
*/

//OBJECT

const notes = ['understand array', 'understand objects'];
const notesObj = [
    {
        title: 'understand array',
        completed: true
    },
    {
        title: 'understand objects',
        completed: true
    }
]

//если мы обьявили функцию через слово function
// мы можем использовать эту функцию до того,как мы ее обьявили

function render() {
    listElement.innerHTML = ''
    if(notes.length === 0) {
        listElement.innerHTML = '<p>No elements</p>'
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
    // for (let note of notes) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    // }
}

render();

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false
    }
    notes.push(newNote)
    inputElement.value = '';
}// print(выводим) in HTML


listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if(type === 'remove'){
            notes.splice(index,1)
        }
        render()
    }
}

function getNoteTemplate(note, index) {
    return `<li
    class="list-group-item d-flex justify-content-between align-items-center"
    >
    <span class='${note.completed ? 'rext-decoration-line-through' : ''}'>${note.title}</span>
    <span>
      <span class="btn btn-small btn-${note.completed ?
        "warning" :
        "success"} data-index="${index}"
            data-type = "togle"
            >&check;</span>
      <span 
      class="btn btn-small btn-danger" 
      data-index="${index}"
      data-type = "remove"
      >&times;</span>
    </span></li>
    `
}



