/*let temp=document.getElementById("temp");
temp.addEventListener('click',rule())
function rule()
{
let a =document.getElementById("id");
let b =document.getElementById("training");
let c=document.getElementById("mail");
document.getElementById("one").innerHTML=a;
document.getElementById("two").innerHTML=b;
document.getElementById("three").innerHTML=c;
}*/

const arr=[];
const id=document.getElementById('id');
const training=document.getElementById('training');
const mail=document.getElementById('mail');
const output=document.getElementById('output');
function ans()
{
    const result={};
    result.id=id.value;
    result.training=training.value;
    result.mail=mail.value;
    arr.push(result);
    console.log(arr);    
    var table = document.getElementById("five");
    let rows=' ';
    arr.forEach(obj => {
    const tr = `<tr>
    <td>${obj.id}</td>
    <td>${obj.training}</td>
    <td>${obj.mail}</td>
    </tr>`
    rows+=tr;
    });
    Body.innerHTML= rows;
    }
    output.addEventListener('click',ans);
    
    
    