const input = document.querySelector('input');
const mainBtn = document.querySelector('.btn');
const ul = document.querySelector('.task');
let liArr = [];
let upd = 0;
function addTask(arr) {
    let ctr = 0;
    ul.innerHTML = "";
    for (let val of arr) {
        ul.innerHTML += `<li id=${ctr}><input type="text" class="todo-input" value='${val}' disabled></input><button type="button" class="btn btn-sm btn-warning" onclick="down(${ctr})">Down</button><button type="button" class="btn btn-sm btn-warning" onclick="up(${ctr})">Up</button><button type="button" onclick="remove(${ctr})" class="btn btn-sm btn-danger">Remove</button><button type="button" class="btn btn-sm btn-success" onclick="update(${ctr})">Update</button></li>`;
        ctr++;
    }
}
function update(id) {
    ul.children[id].firstElementChild.classList.toggle('not-disabled')
    ul.children[id].firstElementChild.toggleAttribute("disabled");
}
function remove(id) {
    liArr.splice(ul.children[id].id, 1);
    addTask(liArr);
}
function down(id) {
    let currLiId = id;
    if (currLiId < liArr.length - 1) {
        ul.innerHTML = "";

        let x = liArr[currLiId];
        liArr[currLiId] = liArr[currLiId + 1];
        liArr[currLiId + 1] = x;
        addTask(liArr);
    }
}
function up(id) {
    let currLiId = id;
    if (currLiId > 0) {
        ul.innerHTML = "";

        let x = liArr[currLiId];
        liArr[currLiId] = liArr[currLiId - 1];
        liArr[currLiId - 1] = x;
        addTask(liArr);
    }
}
mainBtn.addEventListener('click', function (e) {
    console.log(e)
    if (input.value !== "") {
        liArr.push(input.value);
        addTask(liArr);
        input.value = "";
    }
});

