let input = document.querySelector("input");
let Buttons = document.querySelectorAll(".operator");
let click = document.querySelector("#click");
let AC = document.querySelector("#ac");
let X = document.querySelector("#x");

Buttons.forEach(btn => {
  btn.addEventListener("click",function(e){
    
   let val = e.target.textContent;

 let operators = ["+","-","*","/","%","."];
 let lastChac = input.value.slice(-1);
  if (operators.includes(lastChac) && operators.includes(val)) {
    input.value = input.value.slice(0,-1) + val;
    return;
  }

// if ( e.target.textContent === "%") {
// input.value = Number(eval(input.value)) / 100;

//  return; 
// } 

// ! upar ka jo logic h woh thik h lekin isme % se pehle ke value ko evaluate kr de rha h then % but actual me bodmas chalta h na % '+',"-", ke pehle chalta h na isliye is codition ko main click button me daal diya "%" ko replace "/100"

input.value = input.value + val;

input.style.color = "white";
   
})
 });

 click.addEventListener("click",function(){

// if (input.value === "") {
// input.value = "";
// }
 if(input.value.includes("%")) {
  if(input.value.endsWith("%")){
     input.value = input.value.replace(/%/g,"/100");
  }else{
       input.value = input.value.replace(/%/g,"/100*");
  }
 } 

let calc = eval(input.value);
input.value = parseFloat(calc.toFixed(5));
 input.style.color = "#88e967";
})

  X.addEventListener("click",function(){
input.value = input.value.slice(0,-1);
})

AC.addEventListener("click",function(){
input.value = "";
// location.reload();
})














