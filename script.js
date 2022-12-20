function solNombreProf(){
    let nombreIngresado = prompt("Ingrese su nombre")
    console.log (nombreIngresado)
    alert("Hola, " + nombreIngresado.toLocaleUpperCase() + ", a continuación le pediremos unos datos")
}

solNombreProf()


do {
    let cantPersonas = parseInt(prompt("Ingrese cantidad de personas"))
    let datos = []

for (let i=0; i<cantPersonas; i++){
    let nombrePedido = prompt ("Ingrese nombre")
    let alturaPedida = Number(parseFloat(prompt ("Cuanto mide en Metros? Ej: 1.80")))
    let pesoPedido = Number(parseFloat(prompt ("Cuanto Pesa? Ej: 100")))
    
    let alturaCuadrada = alturaPedida * alturaPedida
    let imc = pesoPedido / alturaCuadrada
    datos.push({nombre : nombrePedido, altura : alturaPedida, peso : pesoPedido, imc: imc})
}

console.log(datos)
console.log(cantPersonas)

let imcPromedio = 0

for(let i=0; i < datos.length; i++){
    console.log(datos[i].imc)
    imcPromedio = imcPromedio + datos[i].imc / cantPersonas
}

console.log(imcPromedio)
alert("El IMC PROMEDIO DE LA CLASE ES: " + imcPromedio.toFixed(2))

    if (imcPromedio > 40){
        console.log ("Obesidad Morbida")
        alert("El IMC Promedio indica Obesidad Morbida")
    }else if ((imcPromedio <= 40) && (imcPromedio > 30)){
        console.log ("Obesidad")
        alert("El IMC Promedio indica Obesidad")
    }else if ((imcPromedio <= 30) && (imcPromedio > 25)){
        console.log ("Sobrepeso")
        alert("El IMC Promedio indica Sobrepeso")
    }else if ((imcPromedio <= 25) && (imcPromedio > 20)){
        console.log ("Normopeso")
        alert("El IMC Promedio indica Normopeso")
    }else if ((imcPromedio < 20)){
        console.log ("Bajo peso")
        alert("El IMC Promedio indica Bajo peso")
    }
console.log([datos])

//ahora quiero que rescate en un nuevo array nombre y el indice mayor a 20

let datosFiltrado = datos.filter((dato) => dato.imc > 20)
console.log(datosFiltrado)

let nuevosDatos = []
for(let i=0; i<datosFiltrado.length; i++){
    for(let key in datosFiltrado[i]){
        if (datosFiltrado[i].hasOwnProperty(key) && key === "imc"){
            nuevosDatos.push(datosFiltrado[i][key])
        }
    }
}

for(let i=0; i < datosFiltrado.length; i++){
    console.log("muestra: "+ datosFiltrado[i].imc)
    alert("El IMC arriba de la media lo tiene, "+ datosFiltrado[i].nombre + " ,con un IMC de:  " + datosFiltrado[i].imc.toFixed(2))
}
//

opciones = Number(prompt("Ingrese 1 para iniciar o reiniciar \n Presione enter para terminar "))
} while (opciones != 0)



alert("Hasta Luego, si desea reiniciar presione f5")