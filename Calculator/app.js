const previous = document.querySelector(".previous-display");
const current = document.querySelector(".current-display");
const button = document.querySelector(".buttons-container");
// ! global alan
let altsatir = "";
let operator = "";
button.addEventListener("click", (e) => {
    if (e.target.classList.contains("num")) {
        sayiyiAl(e.target.textContent);
        yazdir();
    }
});
const sayiyiAl = (num) => {
    altsatir += num;
    console.log(altsatir);
};
const yazdir = () => {
    current.textContent = altsatır;
    previous.textContent = `${altsatır}${operator}`;
};
