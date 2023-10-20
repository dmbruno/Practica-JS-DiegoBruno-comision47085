

const destinos = [
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
        <b class="precio">${destino.price}</b>
        <div class="contenedor-botones">
        <button type="submit" class="envio-mail" data-id=${destino.id}>Enviar Mail</button>
        </div>
    </div>
    </article>
    `;
}
document.body.append(contenedor);




const mails = document.querySelectorAll(".envio-mail");

for (const mail of mails) {
    mail.addEventListener("click", mandarMail);
}
function mandarMail() {
    const formularioMail = document.createElement("div");
    formularioMail.innerHTML = `
    <div class="formulario-correo">
    <form action="" id="form-viaje">
        <label for="nombre" class="nombre">Nombre</label>
        <input type="text" id="nombre" placeholder="Ingresa tu nombre...">
        <label for="E-mail" class="nombre">E-mail</label>
        <input type="text" id="e-mail" placeholder="Ingresa tu correo electronico...">
        <label for="correo" class="nombre">Escribinos tu consulta</label>
        <input type="text" id="correo" placeholder="Gracais por elegirnos, ingresa tu consulta y te responderemos via mail a la brevedad.">
        <button>Enviar Consulta</button>
    </form>
</div>
`
    document.body.append(formularioMail);
}










const btn = document.querySelector("#boton");
btn.addEventListener("click", saludar);
function saludar() {
    alert("si dale, con el usd a 1050????");
}

const input = document.querySelector("#input");
const inputTexto = document.querySelector("#input-texto");
input.addEventListener(`keyup`, mostrarKey);
function mostrarKey(e) {
    console.log(`tecla: `, e.key);
}

const boton2 = document.querySelector("#titulo");
const contenidoOriginal = boton2.innerHTML;
boton2.addEventListener(`click`, function () {
    if (boton2.innerHTML == contenidoOriginal) {
        modificandoHtml();
    } else {
        restaurarHtml();
    }
});

function modificandoHtml() {
    boton2.innerHTML = `En UBM, La mejor Agencia de viajes...`
}
function restaurarHtml() {
    boton2.innerHTML = contenidoOriginal;
}


const iniciar = document.querySelector("#sesion");
iniciar.addEventListener(`click`, inicioSesion);
function inicioSesion() {
    alert(iniciar.innerHTML = `formulario para usuario y contraseña`);
}

const cuenta = document.querySelector("#cuenta");
cuenta.addEventListener("click", pedirDatos);
function pedirDatos() {
    alert(pedirDatos.innerHTML = "formulario para ingresar datos");
}

const input2 = document.querySelector(`#input`);
const inputexto = document.querySelector(`#parrafo-vacio`);
input2.addEventListener(`input`, agregandoTexto);
function agregandoTexto() {
    inputexto.innerHTML = input.value;
}









