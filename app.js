let todoList = {
    addTask: document.querySelector('.add'),
    list: document.querySelector('.todos'),
    checkbox: document.querySelector('.check'),

    init: function() {
        for (var key in localStorage) {
            var html = localStorage.getItem(key);
            if (html) {
                todoList.list.innerHTML += localStorage.getItem(key);
            }
        }
    },
    createTodoList: function (task) {
        const html = `
            <li class="list-group-item d-flex justify-content-between align-items-right">
                <span><input type="checkbox" id="checkbox" class="check">${task}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
            `;
        todoList.list.innerHTML += html;
        todoList.saveTaskToLocalStorage(task, html);
    },

    saveTaskToLocalStorage: function (task, html) {
        if (html) {
            localStorage.setItem(task, html);
            return;
        }
        return;
    },
 
    removeTaskFromLocalStorage: function(task) {
        localStorage.removeItem(task);
        return;
    },
}
 
todoList.init();
 
todoList.addTask.addEventListener('submit', e => {
    e.preventDefault();
 
    const task = todoList.addTask.add.value.trim();
    if(task.length) {
        todoList.createTodoList(task);
 
        todoList.addTask.reset();
    }
});
 
todoList.list.addEventListener('click', e => {
    console.log(e.target.classList);
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
 
        const task = e.target.parentElement.textContent.trim()
        todoList.removeTaskFromLocalStorage(task);
    }
});

todoList.list.addEventListener('click', e => {
    console.log(e.target.classList);
    if (e.target.classList.contains('check')) {
        e.target.parentElement.style.textDecoration = "line-Through"
        e.target.classList.remove('check');
    }else {
        e.target.parentElement.style.textDecoration = "none"
    }
})

setInterval(function(){
    var a=new Date;
    a.getTime()||a.getMinutes()||a.getHours()||todoList.removeTaskFromLocalStorage(task);
    },1000);







