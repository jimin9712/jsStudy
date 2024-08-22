const todoLayout = (() => {
    const showTodos = (todos) => {
        const wrap = document.getElementById("todo-wrap");
        let text = `
        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
    `;
        todos.forEach((todo) => {
            let color = todo.completed ? "green" : "red";
            text += `
                <tr>
                    <td class="userId">${todo.userId}</td>
                    <td class="title" style="color: ${color}">${todo.title}</td>
                </tr>
                `;
        });

        text += `
            </tbody>
        </table>
    `;
        wrap.innerHTML = text;
    };
    return { showTodos: showTodos };
})();
