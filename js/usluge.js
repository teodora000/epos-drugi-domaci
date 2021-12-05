const datumi = [...document.querySelectorAll(".datum")];
const danas = new Date();

datumi.forEach((datum) => {
  datum.value = danas.toISOString().substr(0, 10);
});

const zakazi1svi = [...document.querySelectorAll(".zakazi1")];

zakazi1svi.forEach((dugme) => {
  dugme.addEventListener("click", klik1);
});

const zakazi2svi = [...document.querySelectorAll(".zakazi2")];

zakazi2svi.forEach((dugme) => {
  dugme.addEventListener("click", klik2);
});

function klik1(e) {
  const dugme = e.target;
  const forma = dugme.nextElementSibling;

  dugme.classList.add("hidden");
  forma.classList.remove("hidden");
}

function klik2(e) {
  const dugme = e.target;
  const forma = dugme.parentElement;

  const ime = forma.querySelector(".ime").value;
  const datum = forma.querySelector(".datum").value;
  const usluga =
    forma.parentElement.parentElement.querySelector(".ime-usluge").innerHTML;

  let pol;
  const radio1 = forma.querySelector(`input[value="Musko"]`);
  const radio2 = forma.querySelector(`input[value="Zensko"]`);

  if (ime == "") {
    alert("Upisite ime!");
    return;
  }

  if (!radio1.checked && !radio2.checked) {
    alert("Izaberite pol!");
    return;
  }

  if (datum == "") {
    alert("Izaberite datum!");
    return;
  }

  if (radio1.checked) {
    pol = radio1.value;
  }

  if (radio2.checked) {
    pol = radio2.value;
  }

  alert(
    `
        Zakazano
        Usluga: ${usluga}
        Ime: ${ime}
        Pol: ${pol}
        Datum: ${datum}
        `
  );

  location.reload();
}
