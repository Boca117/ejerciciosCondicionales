//Punto 1//
/*
let numeroA = prompt("Ingresa el primer numero")
let numeroB = prompt("Ingresa el segundo numero")
let numeroC = prompt("Ingresa el tercer numero")


if (numeroA > numeroB) {
    alert("El primer numero es mayor")

}
*/

//Punto 2//

/*
if (numeroA == numeroB) {
    alert("Los dos numeros son iguales")
   
}
else {
        alert("los numeros son diferentes")
}
*/

//Punto 3//
/*
if (numeroA > numeroB) {
    alert("El primer numero es mayor")
}
else if (numeroA < numeroB) {
    alert("El segundo numero es mayor")
}
else {
    alert("Los dos numeros son iguales")
}
*/
//Punto 4//

/*
if (numeroA < numeroB && numeroA < numeroC) {
    alert("El primer numero es el menor")
}
else if (numeroB < numeroA && numeroB < numeroC) {
    alert("El segundo numero es el menor")
}
else if (numeroC < numeroA && numeroC < numeroB) {
    alert("El tercer numero es el menor")
}
*/

//Punto 5//
/*
let persona1 = {
    nombre: "Juan",
    edad: 18,
    altura: 170
} 

let persona2 = {
    nombre: "Sofia",
    edad: 20,
    altura: 158
}

if (persona1.altura > persona2.altura) {
    alert("La persona 1 es mas alta")
}
else if (persona2.altura > persona1.altura) {
    alert("La persona 2 es mas alta")
}



if (persona1.edad > persona2.edad) {
    alert("La persona 1 es mayor")
}
else if (persona2.edad > persona1.edad) {
    alert("La persona 2 es mayor")
}
*/

//Punto 6//
/*
let persona = {
    nombre: prompt("Ingresa tu nombre"),
    edad: prompt("Ingresa tu edad"),
    altura: prompt("Ingresa tu altura (cm)"),
    vision: prompt("Ingresa tu vision (del 1-10)")
}

if (persona.vision >= 8 && persona.edad >= 18 && persona.altura > 150) {
    alert("La persona esta capacitada para conducir")    
}
else {
    alert("La persona NO esta capacitada para conducir")
}
*/

//Punto 7//

/*
let nombre = prompt("Ingresa tu nombre")
let pase = prompt("Ingresa tu tipo de pase (vip o normal)")
let entrada = prompt("Tienes entrada?")

let tipoPase = ["vip", "normal"]
let conEntrada = ["si", "s", true]
let sinEntrada = ["no", "n", false]

nombre = nombre.toLowerCase()
pase = pase.toLowerCase()
entrada = entrada.toLowerCase()

switch (true) {
    case (nombre === "juan"):
        alert("Bienvenido, tiene entrada libre Juan!!")
        break

        
    case (pase === tipoPase[1] && (conEntrada.includes(entrada))):
        let utilizar = prompt("Deseas utilizar tu entrada")
            if (conEntrada.includes(utilizar)) {
                alert("Bienvenido")
            }
            else {
                alert("Hasta la proxima!!")
            }
        break
    
    case (pase === tipoPase[1] && (sinEntrada.includes(entrada)) && nombre !== "juan"):
        let compra = prompt("Deseas comprar una entrada")
            if (conEntrada.includes(compra)) {
                let saldo = prompt("Ingresa tu saldo")
                if (saldo >= 1000) {
                    alert("Entrada comprada correctamente, Bienvenido")    
                }
                else {
                    alert("No tienes saldo suficiente para comprar una entrada, Hasta la proxima!!")
                }
            }
            else {
                alert("Hasta la proxima!!")
            }

        break    
    default:
        alert("Entrada no válida o pase no reconocido.")
        break
}
*/

//Punto 8//


