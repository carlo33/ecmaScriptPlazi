function NewFunction(name, age, country){
  var name = name || 'Oscar';
  var age = age || 32;
  var country = country || 'mx'
  console.log(name, age, country);
}

// es6
function NewFunction2(name = 'Oscar', age = 32, country = "MX"){
 console.log(name, age, country);
} 

NewFunction2();
NewFunction2('Ricardo', 23, 'CO')

//anterior forma de unir dos strings
let hello = "Hello";
let world = "wordl";
let epicPharse = hello + ' ' + worold;
console.log(epicPharse);
// Nueva forma de unir dos strings
let epicPharse2 = `${hello} ${world}`;
console.log(epicPharse2);