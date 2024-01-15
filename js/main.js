const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const simbol = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnvalue) => {
if (btnvalue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
}
else if (btnvalue === "AC") {
    output = "";
}
else if (btnvalue === "DEL") {
    output = output.toString().slice(0, -1);
}
else {
    if (output === "" && simbol.includes(btnvalue)) return;
    output += btnvalue;
}
display.value = output;
};

buttons.forEach((button) => {
button.addEventListener("click", (e) => console.log(e.target.dataset.value));
});


// //Tarixler
let d=new Date();

let full = d.getDate(); // Butun tarixi cixarmaq ucundur
console.log(full);

let day=d.getDay();  //heftenin gunu
console.log(day);

let year=d.getFullYear(); // ili gosterir
console.log(year);

let hours=d.getHours(); //saati gosterir
console.log(hours);

let min=d.getMinutes(); //deyqeni gosterir
console.log(min);


//Calismadir
// //11.01.2024 - 21:58
// let day=d.getDate();
// let month=d.getMonth();
// let mon=month+1;
// let year=d.getFullYear();
// let hours=d.getHours();
// let minute=d.getMinutes();
// console.log(day+"."+mon+"."+year+"-"+hours+":"+minute);