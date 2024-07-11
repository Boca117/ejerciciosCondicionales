//Punto 1//
/*
let numeroA = prompt("Ingresa el primer numero")
let numeroB = prompt("Ingresa el segundo numero")

if (numeroA > numeroB) {
    alert("El primer numero es mayor")

}
*/

//Punto 2//

/*
let numeroA = prompt("Ingresa el primer numero")
let numeroB = prompt("Ingresa el segundo numero")

if (numeroA == numeroB) {
    alert("Los dos numeros son iguales")
   
}
else {
        alert("los numeros son diferentes")
}
*/

//Punto 3//
/*
let numeroA = prompt("Ingresa el primer numero")
let numeroB = prompt("Ingresa el segundo numero")


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
let numeroA = prompt("Ingresa el primer numero")
let numeroB = prompt("Ingresa el segundo numero")
let numeroC = prompt("Ingresa el tercer numero")

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
/*
let numeroIncognita = 6
let numeroIngresado = prompt("Ingresa un numero del 1 al 10, tienes 3 intentos para adivinar")


switch (true) {
    case (numeroIngresado == numeroIncognita):
        alert("Ganaste")
        break
    case (numeroIngresado < numeroIncognita):
        numeroIngresado = prompt("El numero ingresado es menor intenta de nuevo, te quedan 2 intentos")

        if (numeroIngresado == numeroIncognita) {
            alert("Ganaste")
        }    
        else if (numeroIngresado < numeroIncognita) {
            numeroIngresado = prompt("El numero ingresado es menor intenta de nuevo, te quedan 1 intento")
            if (numeroIngresado == numeroIncognita) {
                alert("Ganaste")
            }
            else {
                alert("Perdiste, el numero era: " + numeroIncognita)
            }
        }
        else if (numeroIngresado > numeroIncognita) {
            numeroIngresado = prompt("El numero ingresado es mayor intenta de nuevo, te queda 1 intento")
            if (numeroIngresado == numeroIncognita) {
                alert("Ganaste")
            }
            else {
                alert("Perdiste, el numero era: " + numeroIncognita)
            }

        }
        
        break
    case (numeroIngresado > numeroIncognita):
        numeroIngresado = prompt("El numero  ingresado es mayor intenta de nuevo, te quedan 2 intentos")

        if (numeroIngresado == numeroIncognita) {
            alert("Ganaste")
        }    
        else if (numeroIngresado < numeroIncognita) {
            numeroIngresado = prompt("El numero ingresado es menor intenta de nuevo, te quedan 1 intento")
            if (numeroIngresado == numeroIncognita) {
                alert("Ganaste")
            }
            else {
                alert("Perdiste, el numero era: " + numeroIncognita)
            }
        }
        else if (numeroIngresado > numeroIncognita) {
            numeroIngresado = prompt("El numero ingresado es mayor intenta de nuevo, te queda 1 intento")
            if (numeroIngresado == numeroIncognita) {
                alert("Ganaste")
            }
            else {
                alert("Perdiste, el numero era: " + numeroIncognita)
            }
        }
        
        break

    default:
        alert("Perdiste, el numero era: " + numeroIncognita)
        break
}
*/
//Punto 9//
/*
let edad = prompt("Ingresa tu edad")

switch (true) {
    case (edad <= 12):
        alert("Eres un infante")
        break
    case (edad >= 13 && edad <= 18):
        alert("Eres un adolescente")
        break
    case (edad >=19 && edad <= 45):
        alert("Eres un adulto")
        break
    case (edad > 45 && edad <= 100):
        alert("Eres un anciano")
        break
    default:
        alert("De verdad tienes mas de 100 años :O ?")
        break
}
*/

//Punto 10//
/*
let jugador1 = prompt("Jugador 1, ingresa PIEDRA, PAPEL o TIJERA")
let jugador2 = prompt("Jugador 2, ingresa PIEDRA, PAPEL o TIJERA")
let opciones = ["PIEDRA", "PAPEL", "TIJERA"]

jugador1 = jugador1.toUpperCase()
jugador2 = jugador2.toUpperCase()



switch (true) {
    case (jugador1 == opciones[0] && jugador2 == opciones[1]):
        alert("Gana jugador 2")
        break
    case (jugador1 == opciones[1] && jugador2 == opciones[2]):
        alert("Gana jugador 2")
        break
    case (jugador1 == opciones[2] && jugador2 == opciones[0]):
        alert("Gana jugador 2")
        break
    case (jugador1 == jugador2):
        alert("Empate")
        break
    case (jugador1 == opciones[0] && jugador2 == opciones[2]):  
        alert("Gana jugador 1")
        break   
    case (jugador1 == opciones[1] && jugador2 == opciones[0]):
        alert("Gana jugador 1")
        break
    case (jugador1 == opciones[2] && jugador2 == opciones[1]):
        alert("Gana jugador 1")
        break
    default:
        alert("Algun jugador hizo trampa >:(")
        break
}
*/
//Punto 11//
/*
let color = prompt("Ingresa un color")
color = color.toLowerCase()

switch (true) {
    case (color == "negro" || color == "blanco"):
        alert("Falta de color")
        break
    case (color == "verde"):
        alert("El color de la naturaleza")
        break
    case (color == "azul"):
        alert("El color del agua")
        break
    case (color == "amarillo"):
        alert("El color del sol")
        break
    case (color == "rojo"):
        alert("El color del fuego")
        break
    case (color == "marron"):
        alert("El color de la tierra")
        break
    default:
        alert("Excelente eleccion no lo teniamos pensado")
        break
}
*/

//Punto 12//

/*
let numeroA = Number(prompt(("Ingresa el primer numero")))
let numeroB = Number(prompt("Ingresa el segundo numero"))
let operacion = prompt("Ingresa la operacion (suma, resta, multiplicacion o division)")
operacion = operacion.toLowerCase()

let operaciones = ["suma", "resta", "multiplicacion", "division"]


if (operacion == operaciones[0]) {
    alert("El resultado es" + (numeroA + numeroB))
}
else if (operacion == operaciones[1]) {
    alert("El resultado es" + (numeroA - numeroB))
}
else if (operacion == operaciones[2]) {
    alert("El resultado es" + (numeroA * numeroB))
}
else if (operacion == operaciones[3]) {
    if (numeroB != 0) {
        alert("El resultado es" + (numeroA / numeroB))
    }
    else {
        alert("ERROR, no se puede dividir entre 0")
    }
}
else {
    alert("Ingresa una operacion valida")
}
*/

//Punto 13//

let nombre = prompt("Ingresa tu nombre")
let apellido = prompt("Ingresa tu apellido")
let nacimiento = prompt("Ingresa tu fecha de nacimiento (AAAA-MM-DD)")
let lugar = prompt("Ingresa tu lugar de nacimiento")
let expedicion = prompt("Ingresa fecha de expedicion del documento (AAAA-MM-DD)")
let numero = prompt("Ingresa tu numero de documento")
let altura = prompt("Ingresa tu altura (cm)")
let genero = prompt("Ingresa tu sexo (masculino o femenino)")
let tipoSangre = prompt("Ingresa tu tipo de sangre")

let confirmacion = confirm("Confirma si los datos son correctos " +"\n"+ " Nombre: " + nombre + "\n" + " Apellido: " + apellido + "\n" + " Nacimiento: " + nacimiento + "\n" + " Lugar: " + lugar + "\n" +" Expedicion: " + expedicion + "\n" + " Numero de documento: " + numero + "\n" +" Altura: " + altura + "\n" + " Genero:" + genero + "\n" +" Tipo de sangre: " + tipoSangre)

if (confirmacion) {
    
    let documento = {
        nombre: nombre,
        apellido: apellido,
        nacimiento: nacimiento,
        lugar: lugar,
        expedicion: expedicion,
        numero: numero,
        altura: altura,
        genero: genero,
        tipoSangre: tipoSangre
    }
    console.table(documento)
    alert("Registro exitoso!!")
}
else {
    alert("Vuelva a intentarlo en un mes")
}