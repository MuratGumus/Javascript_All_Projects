const select = document.querySelector("#select");
const vade = document.querySelector("#vade");
const tutar = document.querySelector("#tutar");
const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const sonuclar = document.querySelector(".sonuclar");

let taksitTutari = 0;
let faizOran = 0;
let toplamTutar;
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (confirm("emin miziniz")) {
        if (select.value === "Konut Kredisi") {
            faizOran = 2.88;
        } else if (select.value === "Ihtiyac Kredisi") {
            faizOran = 1.99;
        } else if (select.value === "Arac Kredisi") {
            faizOran = 1.59;
        }

        const faiz = faizOran / 100; //! 100 -1200 -

        taksitTutari =
            (tutar.value * (faizOran * (1 + faizOran) ** vade.value) /
            (((1 + faizOran) ** vade.value) - 1));
        toplamTutar = taksitTutari * vade.value;
        table();
        //!  Kredi Tutarı * Faiz * (1+Faiz)**Taksit Sayısı /
        // ! (1+Faiz)**Taksit Sayısı-1]
    }
});

const table = () => {
    sonuclar.innerHTML = `<table class="table table-sm">
<thead>
<th>İhtiyaç</th>
<th>Vade</th>
<th>Toplam Tutar:</th>
<th>Taksit Tutari:</th>
</thead>
<tbody>
<td>${tutar.value}</td>
<td>${vade.value}</td>
<td>${toplamTutar.toFixed(2)}</td>
<td>${taksitTutari.toFixed(2)}</td>
</tbody>
</table> `;
};