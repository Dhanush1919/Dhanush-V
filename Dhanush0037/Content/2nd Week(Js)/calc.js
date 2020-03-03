arr=[];
let currentResult=0;
const input=document.getElementById('input');
const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
const mul=document.getElementById('mul');
const div=document.getElementById('div');
const output=document.getElementById('output');
 function add()
 {
     currentResult=currentResult+parseInt(input.value);
     output.innerText=currentResult;
     arr.push(output);
    console.log(arr);   
 }
 function sub()
 {
     currentResult=currentResult-parseInt(input.value);
     output.innerText=currentResult;
 }
 function multiplication()
 {
     currentResult=currentResult*parseInt(input.value);
     output.innerText=currentResult;
    }
 function division()
 {
     currentResult=currentResult/parseInt(input.value);
     output.innerText=currentResult;
 }
 plus.addEventListener('click',add);
 minus.addEventListener('click',sub);
 mul.addEventListener('click',multiplication);
 div.addEventListener('click',division);


