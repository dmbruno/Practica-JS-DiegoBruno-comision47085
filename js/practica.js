/* let numero = 5;

numero ++;

console.log(numero);


let tempe = 31

if(tempe>30){
    console.log("dia caluroso");
}else{
    console.log("dia agradable");
} */
//operador ternario ?
//condicion ? resultado positivo : resultado negativo
/* let edad = 23;

edad >= 21 ? console.log("si podes tomar") : console.log("no podes tomar"); */

//operador logico "and" &&


/* let carrito = [];

if(carrito.length === 0){
    console.log("el carrito esta vacio");
}

carrito.length === 0 && console.log("el carrito esta vacio"); */

/* const user = {
    username: "diego",
    password: "1234"
}

if(user.username === "diego" && user.password === "1234"){
    console.log("bienvenido");
}else{
    console.log("credenciales invalidas");
} */

//operador OR  ||   

/* const user1 = "diego"
const user2 = "flor"
const MensajeOk = "Bienvenido"
const MensajeNoOk = "clave invalida"

if (user1 === "diego1" || user2 === "flor1" || user2 === 0) {
    console.log(MensajeOk);
} else {
    console.log(MensajeNoOk);
} */

//operador NULISH ?? para saber si el dato es o no null o undefined

/* let variable = 9;

console.log(variable ?? "la variable es null o undefined"); */

//acceso condicional a un objeto 

/* const user = {
    username: "admin",
    password: "1234",
    caracteristicas:{
        crear: true,
        actualizar: true,
        borrar: true,
    }
}

console.log(user?.caracteristicas?.leer || "no existe dicho elemento"); */

//se usa el signo de ? para hacer que sea condicional y no se rompa el codigo si algun dato no existe

//desestructuracion de objetos
/* const user = {
    username: "admin",
    password: "1234",
    caracteristicas:{
        crear: true,
        actualizar: true,
        borrar: true,
    }
}

const {username, password} = user;

console.log(username, password); */

//desestructuracion de arrays
/* const nombres = ["fer", "german", "groot", "rio de janeiro"];
const [a,,c,] = nombres;
console.log(a,c); */
//este ejemplo es para seleccionar diferentes objetos dentro del array

//SPREAD DE ARRAYS

/* const nombres = ["german", "groot", "rio de janeiro"];
const nombres2 = [...nombres]; //copio el array original y lo meto dentro del nuevo
nombres2[0]= "flor"//nodifico el valor del array original por flor

console.log(nombres2); */

//de esta manera "copiamos" el array original y lo metemos dentro de una copia, y es esa copia la que debemos gestionar

/* const userData = [{username: "admin", mail: "mail@gmail.com"}];
const profilePic = [{thumbnail: "direcion de foto de perfil "}]; */
/* console.log(userData);
console.log(profilePic); */
/* const [{mail}]= userData;

const usuario = [mail, ...profilePic]; */ //de esta manera no solo copiamos, sino que agrupamos toda la info en un nuevo
//array
/* de esta manera saco las propiedades de los arrays oroginales y los meto y construyo el array que yo necesito
para de esa manera me quede mas comodo para trabajarlo */

/* console.log(usuario); */


// local storage, guarda los datos en la local storage, queda guardado en esa computadora
//setintem es para mandarlo 

/* let hola = `esta es la mejor comidsadsasion`
let hola2 = `calve de acceso`
localStorage.setItem(`holi`, hola); */
//localStorage.setItem(`accestoken`, hola2); 

//get item es para traerlo 

/* let token = localStorage.getItem("accestoken"); //nos traemos el elemento que tiene la clave holi, trae el valor de esa clave


const user = document.querySelector("#user")

if(token){
    user.innerHTML="cerrar sesion"
}else{
    user.innerHTML="iniciar sesion"
} */

//SesionStorage se guardan datos solo por la sesion, se cierra el navegador y se pirde la info


//sessionStorage.setItem(`accestoken`, hola2); 


/* const diego = {
    name: "martin",
    edad: 40
}

localStorage.setItem("destinos" , JSON.stringify(destinos));

const resDestinos = JSON.parse(localStorage.getItem("destinos"));

console.log(resDestinos); */


// armador de paquetes de viaje por precio y calidad con IA



//funcion para borrar la card

/* contenedor.addEventListener(`click` , function (e) {
    if (e.target && e.target.classList.contains(`borrar-button`)) {
        const idBorrar = e.target.getAttribute(`data-id`);
        console.log(idBorrar);
        borrarViaje(idBorrar);
    }
});
function borrarViaje(id) {
    const iD = destinos.findIndex((destino) => destino.id === id);
    if (iD != -1) {
        destinos.splice(id, 1);
        const btnBorrar = document.getElementById(id);
        if (btnBorrar) {
            btnBorrar.remove();
        }
    }
    
}   */