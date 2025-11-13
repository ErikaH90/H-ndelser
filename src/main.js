const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener ("click", () => {
text.innerText = "Du klickade på knappen!";
});

const sum = document.getElementById("sum");
const tal1 = document.getElementById("tal1");
const tal2 = document.getElementById("tal2");
const knapp = document.getElementById("knapp");

knapp.addEventListener ("click", (event) => {
  event.preventDefault();
const firstNumber = Number(tal1.value);
const secondNumber = Number(tal2.value);
const total = firstNumber + secondNumber;
sum.innerText = "Summan är " + total;
});

const bigNr = document.getElementById("big");
const Nr1 = document.getElementById("number1");
const bigButton = document.getElementById("bigButton");

bigButton.addEventListener ("click", (event) => {
  event.preventDefault();
  const nummer = Number(Nr1.value);
if (nummer < 100) {
  bigNr.innerText = "Talet är mindre än 100";
}
else {
  bigNr.innerText = "Talet är större än 100";
}
});