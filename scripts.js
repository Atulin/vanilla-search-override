(async () => {
    const list = document.getElementById('todos');

    let data = await fetch('https://jsonplaceholder.typicode.com/todos');
    let todos = await data.json();

    for (const todo of todos) {
        const done = Boolean(todo.completed);

        let li = document.createElement('li');
        li.classList.add('todo');
        li.classList.add(done ? 'done' : 'incomplete');
        li.innerText = todo.title;
        list.append(li);
    }
})();
