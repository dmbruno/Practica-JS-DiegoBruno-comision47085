
class Paquete {
    constructor(destino, precio, equipaje) {
        this.destino = destino;
        this.precio = precio;
        this.equipaje = equipaje;
        this.vendido = false;
    }
    sumaIVA() {
        this.precio = this.precio * 1.21;
    }
}
let savedPin = "1234";

function Login() {
    let ingresar = false;
    let intentos = 3;
    for (let i = intentos; i > 0; i--){
        let userPin = prompt("ingresa tu pin");
        if (userPin === savedPin) {
            alert("Bienvendio/a");
            ingresar = true;
            break;
        } else {
            alert("error, te quedan " + (i-1) + " intentos")
        }
    }
    return ingresar; //esto hace que que el valor de ingresar sea true , entonces if el login es true + hacer tal cosa
} 


function sumaPaquete(numeroA, numeroB) {
    let resultado = numeroA + numeroB;
    return resultado;
}
const paquete1 = new Paquete("Brasil", 1000, 100);
const paquete2 = new Paquete("Mexico", 1100, 150);
const paquete3 = new Paquete("Nepal", 1150, 180);
const paquete4 = new Paquete("Tailandia", 1200, 190);
const paquete5 = new Paquete("NYC", 1100, 150);
const paquete6 = new Paquete("Paris", 1100, 150);


if (Login()) {
    
    let opcion = prompt("ingresa una opcion : \n1 - Playa \n2 - Montaña \n3 - City \n4 - ver promos");
    switch (opcion) {
        case "1":
            let playas = (prompt("Elegi a que playa queres ir: \n1 - Brasil \n2 - Mexico"))
            switch (playas) {
                case "1":
                    alert("**Elegiste ir a Brasil**");
                    let desicion0 = (prompt("\n1 - Con equipaje \n2 - Sin Equipaje"));
                    if (desicion0 == "1") {
                        let resultado = sumaPaquete(paquete1.precio, paquete1.equipaje);
                        alert("El precio de tu viaje a Brasil CON equipaje es: " + parseInt(resultado));
                    } else if (desicion0 == "2") {
                        alert("El precio de tu viaje a Brasil SIN equipaje es :" + paquete1.precio);
                    } else {
                        alert("Ingresaste una opcion invalida");
                    }
                    break;
                case "2":
                    alert("***Elegiste ir a Mexico***");
                    let desicion2 = (prompt("\n1 - Con equipaje \n2 - Sin Equipaje"));
                    if (desicion2 == "1") {
                        let resultado = sumaPaquete(paquete2.precio, paquete2.equipaje);
                        alert("El precio de tu viaje a Mexico CON equipaje es: " + parseInt(resultado));
                    } else if (desicion2 == "2") {
                        alert("El precio de tu viaje a Mexico SIN equipaje es :" + paquete2.precio);
                    } else {
                        alert("Ingresaste una opcion invalida");
                    }
                default:
                    alert("Ingresaste una opcion invalida");
            }
            break;
        case "2":
            let montaña = (prompt("Elegi a que Montaña queres ir: \n1 - Nepal \n2 - Tailandia"));
            switch (montaña) {
                case "1":
                    alert("**Elegiste ir a Nepal**");
                    let desicion1 = (prompt("\n1 - Con equipaje \n2 - Sin Equipaje"));
                    if (desicion1 == "1") {
                        let resultado = sumaPaquete(paquete3.precio, paquete3.equipaje);
                        alert("El precio de tu viaje a Nepal CON equipaje es: " + parseInt(resultado));
                    } else if (desicion1 == "2") {
                        alert("El precio de tu viaje a Nepal SIN equipaje es :" + paquete3.precio);
                    } else {
                        alert("Ingresaste una opcion invalida");
                    }
                    break;
                case "2":
                    alert("**Elegiste ir a Tailandia**");
                    let desicion3 = (prompt("\n1 - Con equipaje \n2 - Sin Equipaje"));
                    if (desicion3 == "1") {
                        let resultado = sumaPaquete(paquete4.precio, paquete4.equipaje);
                        alert("El precio de tu viaje a Tailandia CON equipaje es: " + parseInt(resultado));
                    } else if (desicion3 == "2") {
                        alert("El precio de tu viaje a Tailandia SIN equipaje es :" + paquete4.precio);
                    } else {
                        alert("Ingresaste una opcion invalida");
                    }
                default:
                    alert("Ingresaste una opcion invalida");
            }
            break;
        case "3":
            let lugar = (prompt("Elegi a que Cuidad queres ir: \n1 - New York \n2 - Paris"))
            switch (lugar) {
                case "1":
                    alert("**Elegiste ir a New York**");
                    let desicion4 = (prompt("\n1 - Con equipaje \n2 - Sin Equipaje"));
                    if (desicion4 == "1") {
                        let resultado = sumaPaquete(paquete5.precio, paquete5.equipaje);
                        alert("El precio de tu viaje a New York CON equipaje es: " + parseInt(resultado));
                    } else if (desicion4 == "2") {
                        alert("El precio de tu viaje a New York SIN equipaje es :" + paquete5.precio);
                    } else {
                        alert("Ingresaste una opcion invalida"); 3
                    }
                    break;
                case "2":
                    alert("**Elegiste ir a Paris**");
                    let desicion5 = (prompt("\n1 - Con equipaje \n2 - Sin Equipaje"));
                    if (desicion5 == "1") {
                        let resultado = sumaPaquete(paquete6.precio, paquete6.equipaje);
                        alert("El precio de tu viaje a Paris CON equipaje es: " + parseInt(resultado));
                    } else if (desicion5 == "2") {
                        alert("El precio de tu viaje a Paris SIN equipaje es :" + paquete6.precio);
                    } else {
                        alert("Ingresaste una opcion invalida"); 3
                    }
                    break;
                default:
                    alert("Ingresaste una opcion invalida");
                    break;
            }
            break;
        case "4":
            alert("Comunicate con nosotros a traves de nuestro correo \ xxx@turismo.com o \ haciendo clieck aca" + "\n **Quiero que se abra una pantalla para disparar un mail de consulta**");
            break;
        default:
            alert("ingresaste una opcion invalida");
            break;
    }

}else{
    alert("Tarjeta Retenida");
}
