const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener ("click", () => {
text.innerText = "Du klickade på knappen!";
});

const sum = document.getElementById("sum");
const tal1 = document.getElementById("tal1");
const tal2 = document.getElementById("tal2");
const knapp = document.getElementById("knapp");

knapp.addEventListener ("click", () => {
  event.preventDefault();
const firstNumber = Number(tal1.value);
const secondNumber = Number(tal2.value);
const total = firstNumber + secondNumber;
sum.innerText = "Summan är " + total;
});

