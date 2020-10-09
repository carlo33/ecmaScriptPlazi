////OPERADOR DE REPOSO, que puede extraer las propiedades de un objeto que aun no se ha construido
const data = {
  name: 'carlos',
  age: 34,
  country: 'PE',
};
let {name, ...all }= data;
console.log(name);

////PROPAGACION PARA UNIDAR OBJETOS
const data = {
  name: 'carlos',
  age: 34,
  country: 'PE',
};

const dataGeneral ={
  ...data,
  state: 1,
}
console.log(dataGeneral);

////PROMISE FINALLY
const helloWorld = ()=>{
  return new Promise ((resolve,reject)=>{
    (true)
    ? resolve('resuelto')
    : reject (new error('test error'))
  });
};
helloWorld()
  .then(respon => console.log(respon))
  .catch(error =>console.log(error))
  .finally(()=>console.log('Finalizo'))

////REGEX

