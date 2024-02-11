// Inputs and Labels
let labelDay = document.querySelector("#label-day");
let labelMonth = document.querySelector("#label-month");
let labelYear = document.querySelector("#label-year");
let inputDay = document.querySelector("#day");
let inputMonth = document.querySelector("#month");
let inputYear = document.querySelector("#year");
const btnSbt = document.querySelector("#sbt_btn");

// Validate Error
let smallDay = document.querySelector("#small_day");
let samllMonth = document.querySelector("#small_month");
let smallYear = document.querySelector("#small_year");

//Display text
let days = document.querySelector("#days");
let months = document.querySelector("#months");
let years = document.querySelector("#years");

const date = new Date();
const actualYear = date.getFullYear();
console.log(actualYear);

inputDay.addEventListener("input", () => {
  let dia = inputDay.value;
  if (dia.length == 0) {
    labelDay.classList.remove("error-txt");
    inputDay.classList.remove("error");
    smallDay.textContent = "";
  } else {
    if (+dia > 31) {
      labelDay.classList.add("error-txt");
      inputDay.classList.add("error");
      smallDay.textContent = "Must be a valid day";
    } else {
      if (+dia === 0) {
        labelDay.classList.add("error-txt");
        inputDay.classList.add("error");
        smallDay.textContent = "Must be a valid day";
      } else {
        labelDay.classList.remove("error-txt");
        inputDay.classList.remove("error");
        smallDay.textContent = "";
        if (dia.length === 2) {
          inputMonth.focus();
        }
      }
    }
  }
});

inputMonth.addEventListener("input", () => {
  let mes = inputMonth.value;
  if (mes.length == 0) {
    labelMonth.classList.remove("error-txt");
    inputMonth.classList.remove("error");
    samllMonth.textContent = "";
  } else {
    if (+mes > 12) {
      labelMonth.classList.add("error-txt");
      inputMonth.classList.add("error");
      samllMonth.textContent = "Must be a valid month";
    } else {
      if (+mes === 0) {
        labelMonth.classList.add("error-txt");
        inputMonth.classList.add("error");
        samllMonth.textContent = "This field is required";
      } else {
        labelMonth.classList.remove("error-txt");
        inputMonth.classList.remove("error");
        samllMonth.textContent = "";
        if (mes.length === 2) {
          inputYear.focus();
        }
      }
    }
  }
});

inputYear.addEventListener("input", () => {
  let ano = inputYear.value;
  if (ano.length == 0) {
    labelYear.classList.remove("error-txt");
    inputYear.classList.remove("error");
    smallYear.textContent = "";
  } else {
    if (+ano > date.getFullYear() || +ano < 1900) {
      labelYear.classList.add("error-txt");
      inputYear.classList.add("error");
      smallYear.textContent = "Must be a actual year or be in the past";
    } else {
      if (+ano === 0) {
        labelYear.classList.add("error-txt");
        inputYear.classList.add("error");
        smallYear.textContent = "This field is required";
      } else {
        labelYear.classList.remove("error-txt");
        inputYear.classList.remove("error");
        smallYear.textContent = "";
      }
    }
  }
});

function calcular(dia, mes, ano) {
  let today = new Date();
  let insertDate = new Date(`${ano}-${mes}-${dia}`);

  let actualYear = date.getFullYear();
  let actualMonth = date.getMonth() + 1;
  let actualDate = date.getDate();

  if (
    inputDay.value.length == 0 &&
    inputMonth.value.length == 0 &&
    inputYear.value.length == 0
  ) {
    labelDay.classList.toggle("error-txt");
    inputDay.classList.toggle("error");
    labelMonth.classList.toggle("error-txt");
    inputMonth.classList.toggle("error");
    labelYear.classList.toggle("error-txt");
    inputYear.classList.toggle("error");

    smallDay.textContent = "This field is required";
    samllMonth.textContent = "This field is required";
    smallYear.textContent = "This field is required";
  } else {
    if (insertDate > today) {
      labelDay.classList.toggle("error-txt");
      inputDay.classList.toggle("error");
      labelMonth.classList.toggle("error-txt");
      inputMonth.classList.toggle("error");
      labelYear.classList.toggle("error-txt");
      inputYear.classList.toggle("error");
      smallDay.textContent = "Insert a past or actual date";
      samllMonth.textContent = "Insert a past or actual date";
      smallYear.textContent = "Insert a past or actual date";
      inputDay.value = "";
      inputMonth.value = "";
      inputYear.value = "";
    } else {
      //Calculado anos
      let anos = actualYear - ano - 1;
      if (ano === actualYear) {
        dia = 0;
      }

      //Calulando meses
      let meses = actualMonth + 11 - mes;

      //Calculando dias
      let dias = 31 + actualDate - dia;
      if (dias > 30) {
        meses = meses + 1;
        dias = dias - 31;
      }

      if (ano === actualYear) {
        if (mes == actualMonth) {
          anos = 0;
          meses = 0;
          dias = actualDate - 1;
        } else {
          anos = 0;
          meses = mes;
          dias = actualDate - 1;
        }
      }
      days.textContent = dias;
      months.textContent = meses;
      years.textContent = anos;
    }
  }
}

btnSbt.addEventListener("click", (e) => {
  e.preventDefault();

  let day = +inputDay.value;
  let month = +inputMonth.value;
  let year = +inputYear.value;

  if (day > 31 || month > 12 || year > actualYear) {
    alert("Insira uma data válida!");
  } else {
    calcular(day, month, year);
  }
});
