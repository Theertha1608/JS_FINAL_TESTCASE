const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.onclick = removeTask;
        li.appendChild(checkbox);

        const taskTextNode = document.createElement('span');
        taskTextNode.textContent = taskText;
        taskTextNode.className = 'task-text';
        li.appendChild(taskTextNode);

        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function removeTask() {
    const listItem = this.parentNode;
    listItem.remove();
}
