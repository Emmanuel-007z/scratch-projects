document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");

  addBtn.addEventListener("click", () => {
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
      const li = document.createElement("li");
      li.textContent = todoText;
      todoList.appendChild(li);

      const delBtn = document.createElement("button");
      delBtn.textContent = "delete";
      delBtn.classList.add("delete-btn");
      li.appendChild(delBtn);

      delBtn.addEventListener('click', () => {
        li.remove(); 
      });
      todoInput.value = "";
    }
  });
});
