const previous = document.querySelector(".previous-display");
const current = document.querySelector(".current-display");
const button = document.querySelector(".buttons-container");
// ! global alan
let üstsatir = "";
let altsatir = "";
let operator = "";

button.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    sayiyiAl(e.target.textContent);
    yazdir();
  }
  if (e.target.classList.contains("operator")) {
    choose(e.target.textContent)
    yazdir();
  }
  if (e.target.classList.contains("equal")) {
    hesapla()
    yazdir();
  }
  if (e.target.classList.contains("pm")) {
    if(!altsatir)return;
    altsatir *= -1
    yazdir();
  }
  if (e.target.classList.contains("percent")) {
    if(!altsatir)return;
    altsatir = altsatir / 100
    yazdir();
  }
  if (e.target.classList.contains("ac")) {
    altsatir =""
    üstsatir =""
    operator =""
    yazdir();
  }

});

const sayiyiAl = (num) => {
  if(num === "0" && altsatir==="0") return
  if(num !== "." && altsatir==="0") {
    altsatir = num
    return
  }
  
  if(num === "." && altsatir.includes(".")) return
  if(altsatir.length > 10)return
  altsatir += num;
    

};

const yazdir = () => {
  previous.textContent = `${üstsatir}${operator}`;
  current.textContent = altsatir;
};

const choose = (op) =>{
    operator = op
    üstsatir = altsatir
    altsatir =""

}

const hesapla = ()=>{
    let calculation = 0
    const sayı1 =Number(üstsatir)
    const sayı2 =Number(altsatir)
    console.log(sayı1);
    console.log(sayı2);
    switch (operator) {
        case "+":
            calculation = sayı1 + sayı2
            console.log(calculation);
            break;
        case "-":
            calculation = sayı1 - sayı2
            break;
        case "x":
            calculation = sayı1 * sayı2
            break;
        case "÷":
            calculation = sayı1 / sayı2
            break;
    
        default:
            return;
    }
altsatir =calculation
üstsatir = ""
operator=""


}