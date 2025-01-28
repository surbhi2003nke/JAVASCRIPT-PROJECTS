const birthday = document.getElementById("dob");
const year = document.getElementById("result");
const button = document.getElementById("btn");

button.addEventListener("click", (e) => {
    e.preventDefault();
    //get age from the input
    const birthdayVal = birthday.value;
    console.log(birthdayVal);
    let age = 0;

    if(birthdayVal === ""){
        alert(`Please enter your birthday`);
    }else{
        //calculate age
        const currentDate = new Date();
        const birthdayDay = new Date(birthdayVal);

        let year = currentDate.getFullYear() - birthdayDay.getFullYear();
        let month = currentDate.getMonth() - birthdayDay.getMonth();
        let date = currentDate.getDate() - birthdayDay.getDate();

        if(month < 0) {
            age = year-1;
        }else if(month == 0 && date <0){
            age = year-1;
        }else{
            age = year;
        }
    }

    year.innerHTML = `<div>Your Age is ${age} years</div>`
});
