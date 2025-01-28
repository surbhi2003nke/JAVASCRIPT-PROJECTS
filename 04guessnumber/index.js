const correctnumber = Math.ceil(Math.random()*100);
console.log(correctnumber);

const form = document.querySelector("form");
let count = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(count);
    count++;
    const guessedNumber = document.getElementById("guessField");
    const num = parseInt(guessedNumber.value);
    console.log(num);

    if(num<0 || isNaN(num) || num>100){
        window.alert("Enter a valid number");
    }
    if(num === correctnumber){
        console.log(`correct guess in ${count} chances`);
    }

})