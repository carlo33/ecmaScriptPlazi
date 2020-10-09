////ELIMINAR ESPACIOS DE UN STRING  
 let hello = '    carlos';
 console.log(hello);
 console.log(hello.trimStart());

//// TRANSFORMAR ARREGLOS A OBJETOS
let entries = [["name","carlos"],["age",34]];
console.log(Object.fromEntries(entries));