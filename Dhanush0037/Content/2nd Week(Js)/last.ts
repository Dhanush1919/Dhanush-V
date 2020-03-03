interface Person 
{
    name: string;
    country : string;
    gender : string;
}
 function temp(arg:Person)
 {
 arg.name="Dhanush";
 arg.country="India";
 arg.gender="male";
 return arg;
 }
  let one :Person={} as Person;
  let two1 =temp(one);
  const abc2= two1(arg:Person);
 console.log(abc2);
 const two3=`${abc2.name} ${abc2.country} ${abc2.gender}`; 
 console.log(two3);
 const spi4= two3.split(" ");
 console.log(spi4);
 const join6 =spi4.join(",");
 console.log(join6);
 
