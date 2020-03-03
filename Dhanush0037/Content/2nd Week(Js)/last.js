function myFunction(name,country,gender)
 {
  object={};
  object.Name=name;
  object.Country=country;
  object.Gender=gender;
  return object;
}
 const abc=myFunction('Dhanush','India','Male');
 console.log(abc);
 const two=`${abc.Name} ${abc.Country} ${abc.Gender}`; 
 console.log(two);
 const spi= two.split(" ");
 console.log(spi);
 const join =spi.join(",");
 console.log(join);
 
