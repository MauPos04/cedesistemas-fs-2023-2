let edad = 18

// condicionales simples
if(edad >= 18){ //true
    console.log("Eres mayor de edad");

}

// condicionales compuestos
if (edad >= 18){
    console.log('mayor de edad')
} else{
    console.log('No es mayor de edad')
}

// condicionales anidados
if (edad > 18){
    console.log('es mayor de 18 años')
} else if (edad === 18){
    console.log('tiene 18 años')
} else if (edad === 17){
    console.log('tiene 17 años')
}else {
    console.log('es menor de 18')
}


if (edad > 18) console.log('>18')
else console.log('<17')

// condiciones ternarias
let mensaje = edad >= 18 ? 'Bienvenido': ' No tienes acceso' 