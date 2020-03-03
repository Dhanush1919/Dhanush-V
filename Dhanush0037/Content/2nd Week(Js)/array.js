//FIND
function myFunction() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a = fruits.indexOf("Apple");
    document.getElementById("demo").innerHTML = a;
  }
  //EVERY
  function checkAdult(age) {
    return age >= 18;
  }
  function myFunction2() {
    var ages = [32, 33, 16, 40];
    document.getElementById("demo").innerHTML = ages.every(checkAdult);
  }
 //SOME
function checkSome(age) 
{
  return age >= 18;
}
function myFunction3() {
    var ages = [3, 10, 18, 20];
  document.getElementById("demo").innerHTML = ages.some(checkSome);
}
//FILTER
function checkFilter(age) {
  return age >= 18;
}
function myFunction4() {
    var ages = [3, 10, 25, 20];
    document.getElementById("demo").innerHTML = ages.filter(checkFilter);
}
