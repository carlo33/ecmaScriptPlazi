////OBJECT A MATRIZ Y ARREGLO
////OBJECT ENTRIES, transforma un objeto en una matriz
const data = {
  frontend: 'Carlos',
  backend: 'Juan',
  desing:'Lopez',
}
const matriz = Object.entries(data);
console.log(matriz);
///longitud de objeto
console.log(matriz.length);

////OBJECT VALUE, devuelve de un objeto a un arreglo
const data2 = {
  frontend: 'Carlos',
  backend: 'Juan',
  desing:'Lopez',
}

const values = Object.values(data2);
console.log(values);

////PADING  agregar texto a un string
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' ----'));

////ASYNC - AWAIT
const helloWorld = ()=>{
  return new Promise((resolve,reject)=>{
    (true)
      ? setTimeout(()=>resolve('Hello world'),3000)
      : reject(new Error('Test Error'))
  })
};

const helloAsync = async()=>{
  const hello = await helloWorld();
  console.log(hello);
}
helloAsync();
//MANEJO DE ERRORES
const anotherFunction = async()=>{
  try {
    const hello = await helloWorld();
    console.log(hello);
  }catch (error){
    console.log(error);
  }
};
anotherFunction();