//OBJECT ENTRIES, transforma un objeto en una matriz
const data = {
  frontend: 'Carlos',
  backend: 'Juan',
  desing:'Lopez',
}
const matriz = Object.entries(data);
console.log(matriz);
///longitud de objeto
console.log(matriz.length);
///OBJECT VALUE, devuelve de un objeto a un arreglo
const data2 = {
  frontend: 'Carlos',
  backend: 'Juan',
  desing:'Lopez',
}

const values = Object.values(data2);
console.log(values);

///PADING  agregar texto a un string
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' ----'));
///ASYNC
