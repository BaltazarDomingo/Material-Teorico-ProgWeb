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
let frase = equipo.join(' mulea a ')
console.log(frase)

let perros = ['Polo', 'Odin']
let gatos = ['Dona', 'Michi']
let mascotas = perros.concat(gatos)
console.log(mascotas)

