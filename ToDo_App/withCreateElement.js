//?Selectors
const input = document.querySelector("#input");
const btn = document.getElementById("btn");
const ul = document.querySelector("ul");
//?functions
function domaYaz({ id, text }) {
  // const { id, text, flag } = task;

  const li = document.createElement("li");
  li.id = id;
  ul.prepend(li);
  const iCheck = document.createElement("i");
  iCheck.classList.add("fa", "fa-check");
  li.prepend(iCheck);
  const span = document.createElement("span");
  iCheck.after(span);
  const content = document.createTextNode(text);
  span.appendChild(content);
  const iTrash = document.createElement("i");
  iTrash.classList.add("fa", "fa-trash");
  li.appendChild(iTrash);
}
let tasks = [];
btn.addEventListener("click", () => {
  if (!input.value) {
    alert("Please enter your todo...");
  } else {
    const task = {
      id: new Date().getTime(), //Date.now()
      text: input.value,
    };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    domaYaz(task);
    input.value = "";
    input.focus();
  }
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});
ul.addEventListener("click", (e) => {
  const id = e.target.parentElement.id;
  if (e.target.classList.contains("fa-trash")) {
    tasks = tasks.filter((task) => task.id != id); //?cöp kutusuna tiklanan li nin arrayden atilma islemi
    localStorage.setItem("tasks", JSON.stringify(tasks));
    e.target.parentElement.remove();
  }
  // if (e.target.classList.contains("fa-check")) {
  //     tasks.map((task, index) => {
  //         if (task.id == id) {
  //             tasks[index].flag = !tasks[index].flag;
  //         }
  //     })
  // };
  localStorage.setItem("tasks", JSON.stringify(tasks));
  //  if (e.target.parentElement.classList.contains("checked")) {
  //   e.target.parentElement.classList.remove("checked");
  // } else {
  //   //? ilgili li elementinde checked adinda bir class yoksa ekle
  //   e.target.parentElement.classList.add("checked");
  // }
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.toggle("checked");
  }
});
window.addEventListener("load", () => {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    domaYaz(task);
  });
});
// localStorage.clear()
