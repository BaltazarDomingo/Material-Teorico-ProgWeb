let profesor = ["Esteban", 29, "Profesor", "otra cosa"]
console.log(profesor.length)
for (let i = 0; i < profesor.length;i++){  
  profesor[i] = profesor[i]+1;
  console.log(profesor[i])
  }

profesor.push("el mejor")
console.log(profesor)

profesor.unshift("hola")
console.log(profesor)

profesor.shift()

profesor.pop()

let ultimo = profesor.pop()
console.log(ultimo)

let primero = profesor.shift()
console.log(primero)

console.table(profesor)

profesor.push("Otra cosa devuelta")
console.log(profesor)

profesor.splice(1,1)
console.log(profesor)

profesor.push("hola1", "hola2")
console.log(profesor)

profesor.splice(profesor.length/2,1)
console.log(profesor)

let mitad = profesor.splice(profesor.length/2,1) 
console.log(mitad)

let equipo = ['esteban', 'dani', 'nicky', 'guille']
console.log(equipo)
let frase = equipo.join(' mulea a ') //introduce la frase entre cada dato del array
console.log(frase)

let perros = ['Polo', 'Odin']
let gatos = ['Dona', 'Michi'] 
let mascotas = perros.concat(gatos) // Concatena los arrays
console.log(mascotas)

let letras = ['a','b','c','d','e']
let nuevo = letras.slice(letras.length/2,letras.length)
console.log(letras)
console.log(nuevo)

let invertido = letras.reverse() //inveirte el array
console.log(invertido)

console.log(letras.includes('a')) //Va a devolver verdadero ya que 'a' se encuentra dentro del array
console.log(letras.includes('f')) //Va a devolver falso ya que 'f' no se encuentra dentro del array

if (letras.includes('a')){
    console.log('la letra esta en el array')
} else{
    console.log('la letra no esta en el array')
}

let letras = ['a','b','c']
console.log(letras.indexOf('a')) //Va a devolver 0 (Indica el indice en donde esta el elemento)
console.log(letras.indexOf('b')) //Va a devolver 2 (Indica el indice en donde esta el elemento)
console.log(letras.indexOf('f')) //Va a devolver -1 (Indica que el elemento no se encuentra en el array)
