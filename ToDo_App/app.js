const input = document.querySelector("#input");
const btn = document.getElementById("btn");
const ul = document.querySelector("ul");

let tasks = [];

btn.addEventListener('click', () => {
    if (input.value) {
        alert("Please enter your todo...");
    } else {
        const task = {
            id: new Date().getTime(),
            text: input.value,
            flag: false,
        };
        tasks.push(task);
        localStorage.setItem("task", JSON.stringify(tasks))
        console.log(tasks);
    }
});
