const arr=[];
const name=document.getElementById('name');
const email=document.getElementById('email-id');
const place=document.getElementById('place');
const nation=document.getElementById('nation');
const output=document.getElementById('output');
 
function ans()
{
    const result={};
    result.name=name.value;
    result.email=email.value;
    result.place=place.value;
    result.nation=nation.value;
    arr.push(result);
    console.log(arr);    
    var table = document.getElementById("five");
  /*  var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "name";
    cell2.innerHTML = "email-id";
    cell3.innerHTML = "place";
    cell4.innerHTML = "nation";
    var row1 = table.insertRow(1);
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    var cell3 = row1.insertCell(2);
    var cell4 = row1.insertCell(3)*/
let rows=' ';
arr.forEach(obj => {
const tr = `<tr>
<td>${obj.name}</td>
<td>${obj.email}</td>
<td>${obj.place}</td>
<td>${obj.nation}</td>
</tr>`
rows+=tr;
});
Body.innerHTML = rows;
}
output.addEventListener('click',ans);


