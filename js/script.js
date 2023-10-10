
const destinos = [
    {
        id: `Brasil`,
        title: `Rio De Janeiro`,
        description: `Brasil es conocido por sus playas, que atraen a turistas de todo el mundo. Las playas de Brasil son famosas por su belleza natural, su ambiente relajado y su vibrante cultura. 
        `,
        thumbnail: `https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80`,
        price: 955.32,
        equipaje: 15.35,
    },
    {
        id: `Mexico`,
        title: `Rivera Maya`,
        description: `La Riviera Maya es una hermosa región costera en México que cuenta con muchas playas impresionantes`,
        thumbnail: `https://images.unsplash.com/photo-1616423841125-8307665a0469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80`,
        price:  1255.54,
        equipaje: 157.65,
    },
    {
        id: `Nepal`,
        title: `Montañas en Nepal`,
        description: `Nepal es un país multicultural y multilingüe ubicado en Asia del Sur, entre India y China `,
        thumbnail: `https://images.unsplash.com/photo-1571401835393-8c5f35328320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80`,
        price: 1225.31,
        equipaje: 152.67,
    },
    {
        id: `Tailandia`,
        title: `Montañas en Tailandia`,
        description: `Tailandia es un país conocido por sus hermosas playas, que atraen a turistas de todo el mundo`,
        thumbnail: `https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`,
        price: 1353.55,
        equipaje: 152.99,
    },
    {
        id: `New York`,
        title: `NYC`,
        description: `Nueva York es una ciudad vibrante y emocionante que atrae a turistas de todo el mundo.`,
        thumbnail: `https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`,
        price: 1356.99,
        equipaje: 169.35
    },
    {
        id: `Paris`,
        title: `Paris`,
        description: `París es una ciudad hermosa y vibrante que atrae a turistas de todo el mundo. La ciudad es conocida por su rica historia, su cultura vibrante y su arquitectura impresionante`,
        thumbnail: `https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`,
        price: 1399.54,
        equipaje: 178.36,
    }
]


const mostrarViajes = () => {
    let mensaje = "\nMira los paquetes que tenemos disponibles esta semana: \n"
    destinos.map((destino) => {
        mensaje += `\n Destino: ${destino.title} \n Precio: ${destino.price} USD \n ----------`
    });
    alert(mensaje);
};

let savedPin = "1234";
function Login() {
    let ingresar = false;
    let intentos = 3;
    for (let i = intentos; i > 0; i--) {
        let userPin = prompt("ingresa tu pin");
        if (userPin === savedPin) {
            ingresar = true;
            break;
        } else {
            alert("error, te quedan " + (i - 1) + " intentos")
        }
    }
    return ingresar;
}

function sumaPaquete(a, b) {
    let resultado = Math.round(a + b);
    return resultado;
}


if (Login()) {
    let fecha = new Date();
    alert("Bienvenido la fecha de hoy es: " + fecha.toLocaleDateString());
    mostrarViajes();
    let opcion = prompt("ingresa una opcion : \n1 - Playa \n2 - Montaña \n3 - City \n4 - ver promos");
    switch (opcion) {
        case "1":
            let playas = (prompt("Elegi a que playa queres ir: \n1 - Brasil \n2 - Mexico"))
            switch (playas) {
                case "1":
                    alert("**Elegiste ir a Brasil**");
                    let desicion0 = (prompt("\n1 - Con equipaje \n2 - Sin Equipaje"));
                    if (desicion0 == "1") {
                        let resultado = sumaPaquete(destinos[0].price, destinos[0].equipaje);
                        alert("El precio de tu viaje a Brasil CON equipaje es: " + resultado);
                    } else if (desicion0 == "2") {
                        alert("El precio de tu viaje a Brasil SIN equipaje es :" + Math.round(destinos[0].price));
                    } else {
                        alert("Ingresaste una opcion invalida");
                    }
                    break;
                case "2":
                    alert("***Elegiste ir a Mexico***");
                    let desicion2 = (prompt("\n1 - Con equipaje \n2 - Sin Equipaje"));
                    if (desicion2 == "1") {
                        let resultado = sumaPaquete(destinos[1].price, destinos[1].equipaje);
                        alert("El precio de tu viaje a Mexico CON equipaje es: " + resultado);
                    } else if (desicion2 == "2") {
                        alert("El precio de tu viaje a Mexico SIN equipaje es :" + Math.round(destinos[1].price));
                    } else {
                        alert("Ingresaste una opcion invalida");
                    }
                default:
                    break;
            }
            break;
        case "2":
            let montaña = (prompt("Elegi a que Montaña queres ir: \n1 - Nepal \n2 - Tailandia"));
            switch (montaña) {
                case "1":
                    alert("**Elegiste ir a Nepal**");
                    let desicion1 = (prompt("\n1 - Con equipaje \n2 - Sin Equipaje"));
                    if (desicion1 == "1") {
                        let resultado = sumaPaquete(destinos[2].price, destinos[2].equipaje);
                        alert("El precio de tu viaje a Nepal CON equipaje es: " + resultado);
                    } else if (desicion1 == "2") {
                        alert("El precio de tu viaje a Nepal SIN equipaje es :" + Math.round(destinos[2].price));
                    } else {
                        alert("Ingresaste una opcion invalida");
                    }
                    break;
                case "2":
                    alert("**Elegiste ir a Tailandia**");
                    let desicion3 = (prompt("\n1 - Con equipaje \n2 - Sin Equipaje"));
                    if (desicion3 == "1") {
                        let resultado = sumaPaquete(destinos[3].price, destinos[3].equipaje);
                        alert("El precio de tu viaje a Tailandia CON equipaje es: " + resultado);
                    } else if (desicion3 == "2") {
                        alert("El precio de tu viaje a Tailandia SIN equipaje es :" + Math.round(destinos[3].price));
                    } else {
                        alert("Ingresaste una opcion invalida");
                    }
                default:
                    break;
            }
            break;
        case "3":
            let lugar = (prompt("Elegi a que Cuidad queres ir: \n1 - New York \n2 - Paris"))
            switch (lugar) {
                case "1":
                    alert("**Elegiste ir a New York**");
                    let desicion4 = (prompt("\n1 - Con equipaje \n2 - Sin Equipaje"));
                    if (desicion4 == "1") {
                        let resultado = sumaPaquete(destinos[4].price, destinos[4].equipaje);
                        alert("El precio de tu viaje a New York CON equipaje es: " + resultado);
                    } else if (desicion4 == "2") {
                        alert("El precio de tu viaje a New York SIN equipaje es :" + Math.round(destinos[4].price));
                    } else {
                        alert("Ingresaste una opcion invalida"); 3
                    }
                    break;
                case "2":
                    alert("**Elegiste ir a Paris**");
                    let desicion5 = (prompt("\n1 - Con equipaje \n2 - Sin Equipaje"));
                    if (desicion5 == "1") {
                        let resultado = sumaPaquete(destinos[5].price, destinos[5].equipaje);
                        alert("El precio de tu viaje a Paris CON equipaje es: " + resultado);
                    } else if (desicion5 == "2") {
                        alert("El precio de tu viaje a Paris SIN equipaje es :" + Math.round(destinos[5].price));
                    } else {
                        alert("Ingresaste una opcion invalida"); 3
                    }
                    break;
                default:
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
} else {
    alert("Tarjeta Retenida/veme el lunes...");
}












































/*  const destinos = [
    {
        id: `Brasil`,
        title: `Rio De Janeiro`,
        description: `Brasil es conocido por sus playas, que atraen a turistas de todo el mundo. Las playas de Brasil son famosas por su belleza natural, su ambiente relajado y su vibrante cultura. 
        `,
        thumbnail: `https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80`,
        price: "USD " + 900
    },
    {
        id: `Mexico`,
        title: `Rivera Maya`,
        description: `La Riviera Maya es una hermosa región costera en México que cuenta con muchas playas impresionantes`,
        thumbnail: `https://images.unsplash.com/photo-1616423841125-8307665a0469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80`,
        price: "USD " + 1000
    },
    {
        id: `Nepal`,
        title: `Montañas en Nepal`,
        description: `Nepal es un país multicultural y multilingüe ubicado en Asia del Sur, entre India y China `,
        thumbnail: `https://images.unsplash.com/photo-1571401835393-8c5f35328320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80`,
        price: "USD " + 1200
    },
    {
        id: `Tailandia`,
        title: `Montañas en Tailandia`,
        description: `Tailandia es un país conocido por sus hermosas playas, que atraen a turistas de todo el mundo`,
        thumbnail: `https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`,
        price: "USD " + 1300
    },
    {
        id: `New York`,
        title: `NYC`,
        description: `Nueva York es una ciudad vibrante y emocionante que atrae a turistas de todo el mundo.`,
        thumbnail: `https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`,
        price: "USD " + 1300
    },
    {
        id: `Paris`,
        title: `Paris`,
        description: `París es una ciudad hermosa y vibrante que atrae a turistas de todo el mundo. La ciudad es conocida por su rica historia, su cultura vibrante y su arquitectura impresionante`,
        thumbnail: `https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`,
        price: "USD " + 1300
    }
]

let contenedor = document.createElement("div");

for (const destino of destinos) {
    contenedor.innerHTML += `
    
    <article class = "contenedor-card">
        <img class="contenedor-img" src= ${destino.thumbnail} alt = "imagen sobre ${destino.title}">
    <div class="contenedor-texto">
        <h2>${destino.title}</h2>
        <p>${destino.description}</p>
        <b>${destino.price}</b>
    </div>
    </article>
    
    `;
}

document.body.append(contenedor);  */

