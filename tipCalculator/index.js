const bill = document.getElementById("amt");
const tip = document.getElementById("tip");
const print = document.getElementById("result");
const button = document.getElementById("btn");

button.addEventListener(
  "click",
  (e) => {
    e.preventDefault();

    const amount = parseFloat(bill.value);
    const tipPercent = parseFloat(tip.value);
    console.log(amount);
    console.log(tipPercent);

    const totalBill = amount + (amount * tipPercent) / 100;
    print.innerHTML = `<span>${totalBill}</span>`;
  },
  false
);
