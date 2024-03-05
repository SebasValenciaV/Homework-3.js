//arrays
let varios = [1, "sebas", "medallo",3.3 , true];
console.log(varios.length);
console.log(varios[0]);
//ingrar valores pop
varios.push(33);
console.log(varios);
//sacar valores//
varios.pop();
let enteros =[1,2,3,4,5,6,7,8,9];
let concat = varios.concat(enteros);
console.log(concat);
let inicio = concat.unshift("Inicio");

const arreglouno=inicio;


for(i = 0;i<varios.length;i++){
    console.log(varios[i]);
}
//primer metodo para arreglos foreach
varios.forEach(elemento=>{
    console.log(elemento);
})

//segundo metodo .reduce()
let numeros =[100,300,2,5,10];
let resultado = numeros.reduce((accumulador,valorActual)=>{
    return accumulador+valorActual;
})
console.log(resultado);


//metodo filter//
let array = [10, 20, 30, 40, 50];
let filtrado = array.filter(elemento => elemento > 30);
console.log(filtrado); // Imprimirá [40, 50], los elementos mayores que 30

let filtering = numeros.filter(numero =>{
      return numero>10;
})
console.log(filtering);

let paises = ["colombia","mexico","estados unidos","alemania","francia","italia"];
let filtered =  paises.filter(pais=>{
    return pais.startsWith("a");

})
console.log(filtered);
//metodo map
const saludarpais= paises.map(country=>{
    return "bienvenidos pasajeroas de " + country;
})
console.log(saludarpais);


///10 ejercicios///
// Ejercicio 1: Usar forEach para saludar a cada usuario en un array
const usuarios = ["Juan", "María", "Carlos"];
usuarios.forEach(usuario => {
    console.log(`¡Hola ${usuario}! Bienvenido.`);
});

// Ejercicio 2: Utilizar reduce para calcular la cantidad total de dinero en una lista de compras
const listaCompras = [20, 35, 10, 15];
const totalDinero = listaCompras.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(`El total a pagar es: $${totalDinero}`);

// Ejercicio 3: Usar filter para encontrar los productos en oferta en una tienda en línea
const productos = [
    { nombre: "Camiseta", precio: 25, oferta: true },
    { nombre: "Pantalón", precio: 40, oferta: false },
    { nombre: "Zapatos", precio: 60, oferta: true }
];
const productosEnOferta = productos.filter(producto => producto.oferta);
console.log("Productos en oferta:", productosEnOferta);

// Ejercicio 4: Utilizar map para convertir una lista de nombres a nombres en mayúsculas
const nombres = ["juan", "maría", "carlos"];
const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log("Nombres en mayúsculas:", nombresMayusculas);

// Ejercicio 5: Usar forEach para iterar sobre una lista de tareas pendientes y marcarlas como completadas
let tareasPendientes = ["Limpiar la casa", "Hacer ejercicio", "Estudiar para el examen"];
tareasPendientes.forEach((tarea, index) => {
    console.log(`Tarea completada: ${tarea}`);
    tareasPendientes[index] = `✔️ ${tarea}`;
});
console.log("Tareas completadas:", tareasPendientes);

// Ejercicio 6: Utilizar reduce para calcular el promedio de calificaciones de un estudiante
const calificaciones = [85, 90, 92, 88, 95];
const promedioCalificaciones = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0) / calificaciones.length;
console.log(`El promedio de calificaciones es: ${promedioCalificaciones}`);

// Ejercicio 7: Usar filter para encontrar las palabras con más de 5 letras en un texto
const texto = "El lenguaje JavaScript es muy poderoso y versátil";
const palabrasLargas = texto.split(" ").filter(palabra => palabra.length > 5);
console.log("Palabras largas:", palabrasLargas);

// Ejercicio 8: Utilizar map para formatear fechas en un array de eventos
const eventos = ["2024-03-05", "2024-04-10", "2024-05-20"];
const fechasFormateadas = eventos.map(evento => new Date(evento).toLocaleDateString());
console.log("Fechas formateadas:", fechasFormateadas);

// Ejercicio 9: Usar forEach para imprimir la tabla del 2 hasta el 10
const tablaMultiplicar = 2;
const limite = 10;
console.log(`Tabla de multiplicar del ${tablaMultiplicar}:`);
let result;
for (let i = 1; i <= limite; i++) {
    resultado = tablaMultiplicar * i;
    console.log(`${tablaMultiplicar} x ${i} = ${resultado}`);
}

// Ejercicio 10: Utilizar reduce para encontrar la palabra más larga en un array de palabras
const palabras2 = ["gato", "perro", "elefante", "rinoceronte"];
const palabraMasLarga = palabras2.reduce((palabraMasLarga, palabra) => palabra.length > palabraMasLarga.length ? palabra : palabraMasLarga);
console.log("Palabra más larga:", palabraMasLarga);
