//////PARAMETROS POR DEFECTO
//antes
function NewFunction(name, age, country){
  var name = name || 'Oscar';
  var age = age || 32;
  var country = country || 'mx'
  console.log(name, age, country);
}

// ES6
function NewFunction2(name = 'Oscar', age = 32, country = "MX"){
 console.log(name, age, country);
} 
//ejecucion
NewFunction2();
NewFunction2('Ricardo', 23, 'CO')

///TEMPLATE LITERAL  para unir varios elementos
//anterior 
let hello = "Hello";
let world = "wordl";
let epicPharse = hello + ' ' + world;
console.log(epicPharse);
// ES6
let epicPharse2 = `${hello} ${world}`;
console.log(epicPharse2);

///MULTILINEA
//anterior
let lorem = "Esta es una  frase epica que escribimos desde livitaca\n"
+" esta es otra frase epica";
console.log(lorem);
//ES6
let lorem2 = `esta es una  mejor forma de escribir 
una frase epica desde el frio de livitaca`;
console.log(lorem2);

///ESTRUCTURACION DE ELEMENTOS
//anterior
let person = {
  fullname : 'Carlos',
  fullage : 32,
}
console.log(person.fullname, person.fullage);
//ES6
let { fullname } = person;
console.log(fullname);

///OPERADOR DE PROPAGACION
//ES6
let team1 = ['oscar', 'julina', 'ricardo'];
let team2 = ['valeria', 'yesica', 'camila'];
let education = ['david', ...team1, ...team2];
console.log (education);
///PROPIEDAD DE OBJETO MEJORADA
let name3 ='carlos';
let age3 = 32,
//anterior
obj = {name: name3, age: age3};
console.log(obj);
//ES6
obj2 ={ name3, age3};
console.log(obj2);

///FUNCIONES DE TIPO FLECHA (arrow function)
const names = [
  {name:'carlos',age:34},
  {name: 'judith', age:31}
] 
//anterior
let listOfNames = names.map (function (item){
  console.log(item.name);
})
//ES6
let listOfNames2 = names.map(item => console.log(item.name));
//otros ejemplo
const square = num => num*num;
//estas generando una funcion que recibe 'num' y devuelve 'num*num'

///PROMESAS
const helloPromise = () =>{
  return new Promise((resolve, reject) =>{
    if (true){
      resolve ('Hey');
    }else {
      reject ('Ups');
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error))

///CLASES