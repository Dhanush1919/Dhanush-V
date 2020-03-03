var a='';
fetch('https://api.spacexdata.com/v3/launches',{
    method:'GET',
    mode:'cors'
}).then((response) =>{
    return response.json();
    //return is used to return the values to the next command-data
}). then((data) =>
{
    data.forEach((val) =>
    {
        temp =`
        <ul style="color : ${val.launch_success ? 'green' : 'red'}"> 
        <li>Flight_name : ${val.flight_number}</li>
        <li>launch_year : ${val.launch_year}</li>
        </ul>`
        a=a+temp;
    })
Body.innerHTML=a;
});