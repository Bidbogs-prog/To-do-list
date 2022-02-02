const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

//function that generates a template string and injects
//it into the UL's html
const generateTemplate = (template) => {
  const html = `<li
    class="list-group-item d-flex justify-content-between align-items-center text-light"
  >
    <span>${template}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  list.innerHTML += html;
};

//adding event listener to form
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //variable to target input value///
  const todo = addForm.add.value.trim();
  //if statement to eliminate empty todos
  if (todo.length) {
    generateTemplate(todo);
    //reset to reset form and get rid of left over text
    addForm.reset();
  }
});

//deleting todos///

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }

  e.target.classList.toggle("text-decoration-line-through");
});

//filtering todos using search bar///

//function that compares value written in search bar to existing to dos
//and adds classes to todos it does not match with while dynamically removing
//the class to todos it doesn match
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("d-none"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("d-none"));
};

//keyup event///
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
