(() => {
    const search = document.getElementById('search');

    window.addEventListener("keydown",e => {
        if (e.key === 'F3' || ((e.ctrlKey || e.metaKey) && e.key === 'f')) {
            e.preventDefault();
            search.classList.toggle('visible');
        }
    });

    const input = search.querySelector('input[name=search]');
    const todos = document.getElementById('todos');

    input.addEventListener('keyup', e => {
        for (let child of todos.children) {
            const found = !child.innerText.includes(e.target.value);
            child.classList.toggle('exclude', found);
        }
    })
})()
