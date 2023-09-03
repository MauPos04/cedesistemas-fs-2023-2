function saludar (nombre){
    console.log("Hola", nombre);


}


saludar('Juan')


//sumar
function sumar(n1,n2){
    // let suma = n1 + n2;
    // return suma;
    return n1+ n2
}

sumar(10,7) // 17

//arrow function
const restar = (n1, n2) => {
    return n1 - n2
}

const multiplicar = (n1,n2) => n1*n2

// var /let

const scope = () =>{
    if(true){
        let var1 = 'variable 1'
        var var2 = 'variable2'
    }
    console.log('var2', var2)
    console.log('var1', var1)
}