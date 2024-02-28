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

const saludarpais= paises.map(country=>{
    return "bienvenidos pasajeroas de " + country;
})
console.log(saludarpais);