/* EL OBJETIVO DEL PROYECTO ES "LEVANTAR" LA INFO DE UN PROVEEDOR DE LA AGENCIA DE MI MUJER
PARA DE ESTA MANERA TRANSFORMAR TODA ESA INFO EN CARDS (ESTILADAS CON LA TIPOGRAFIA DE LA AGENCIA) Y PODER PROMOCIONAR
POR LAS DISTINTAS REDES, ES DECIR QUE AL VER LAS CARDS, SI EL PASAJERO ESTA INTERESADO LO QUE HACE ES
ENVIAR UN CORREO CON SUS DATOS Y SU CONSULTA, DE ESTA MANERA PODEMOS CONFECCIONAR BASE DE DATOS DE CLIENTES DE LA AGENCIA
Y ADEMAS ORGANIZAR LOS PRESUPUESTOS POR DESTINOS ETC ETC */
const usuarios = [{
    id: 'Florencia',
    password: 1234,
},
{
    id: 'Paz',
    password: 1234,
},
{
    id: 'Agustina',
    password: 1234,
},
{
    id: 'admin',
    password: 1234,
    
},
{
    id: 'Lucia',
    password: 1234,

}];

//array de destinos , QUE DEBERIA SER LA INFO A SUSTRAER DE LA PAGINA DEL PROVEEDOR 
const destinos = [
    {
        id: `Brasil`,
        title: `Rio De Janeiro`,
        description: `Brasil es conocido por sus playas, que atraen a turistas de todo el mundo. Las playas de Brasil son famosas por su belleza natural, su ambiente relajado y su vibrante cultura. 
        `,
        thumbnail: `https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80`,
        price: 900
    },
    {
        id: `Mexico`,
        title: `Rivera Maya`,
        description: `La Riviera Maya es una hermosa región costera en México que cuenta con muchas playas impresionantes`,
        thumbnail: `https://images.unsplash.com/photo-1616423841125-8307665a0469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80`,
        price: 1000
    },
    {
        id: `Nepal`,
        title: `Nepal`,
        description: `Nepal es un país multicultural y multilingüe ubicado en Asia del Sur, entre India y China `,
        thumbnail: `https://images.unsplash.com/photo-1571401835393-8c5f35328320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80`,
        price: 1200
    },
    {
        id: `Tailandia`,
        title: `Tailandia`,
        description: `Tailandia es un país conocido por sus hermosas playas, que atraen a turistas de todo el mundo`,
        thumbnail: `https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`,
        price: 1300
    },
    {
        id: `New York`,
        title: `NYC`,
        description: `Nueva York es una ciudad vibrante y emocionante que atrae a turistas de todo el mundo.`,
        thumbnail: `https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`,
        price: 1300
    },
    {
        id: `Paris`,
        title: `Paris`,
        description: `París es una ciudad hermosa y vibrante que atrae a turistas de todo el mundo. La ciudad es conocida por su rica historia, su cultura vibrante y su arquitectura impresionante`,
        thumbnail: `https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`,
        price: 1300
    }
];

localStorage.setItem('usuarios', JSON.stringify(usuarios));//mando a guardar en local el array de datos con usuarios

sessionStorage.setItem('destinos', JSON.stringify(destinos));//aca mando solo a la sesion, para que siempre levante la info mas actualizada



const iniciar = document.getElementById('inicio-sesion');
iniciar.addEventListener('click', inicioSesion);

function inicioSesion() {
    const inicioSesion = document.createElement("div");
    inicioSesion.innerHTML =
        `
        <section class="conteiner-sesion">
            <label for="nombre" id="usuario">Usuario</label>
            <input type="text" id="nombreUsuario" placeholder="Ingresa tu Usuario..." required>
            <label for="nombre" id="usuario">Contraseña</label>
            <input type="password" id="contraseñaUsuario" placeholder="Ingresa tu Contraseña..." required>
            <button type="submit" id="btnIngresar">Ingresar</button>
        </section>
        `
    document.body.append(inicioSesion);
    const ingresar = document.querySelector('#btnIngresar');
    ingresar.addEventListener('click', login);

}

function login() {

    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const contraseñaUsuario = parseInt(document.getElementById('contraseñaUsuario').value);

    for (const usuario of usuarios) {
        if (usuario.id === nombreUsuario && usuario.password === contraseñaUsuario) {

            let saludos = document.createElement("div");
            saludos.innerHTML =
                `
                    <h2 class='saludo'>Bienvenido/a ${usuario.id}</h2>
                `;

            let contenedor = document.createElement("div");
            for (const destino of destinos) {
                contenedor.innerHTML += `

                            <article class = "contenedor-card">
                                <img class="contenedor-img" src= ${destino.thumbnail} alt = "imagen sobre ${destino.title}">
                                <div class="contenedor-texto">
                                    <h2>${destino.title}</h2>                                 
                                    <p>${destino.description}</p>
                                    <p class="precioM">USD</p>
                                    <b class="precio">${destino.price}</b>
                                        <div class="contenedor-botones">
                                            <button type="submit" class="envio-mail" data-id=${destino.id}>Enviar Mail</button>
                                        </div>
                                </div>
                            </article>
    `;

            }
            document.body.append(saludos);
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
                            <input type="text" id="nombre" placeholder="Ingresa tu nombre..." required>
                            <label for="apellido" class="nombre">Apellido</label>
                            <input type="text" id="apellido" placeholder="Ingresa tu apellido..." required>
                            <label for="cantidad" class="nombre">Cantidad de pasajeros</label>
                            <input type="number" id="number" placeholder="Ingrese un numero" required>
                            <label for="desde" class="nombre">Salida</label>
                            <input type="date" id="nombre" required>
                            <label for="hasta" class="nombre">Regreso</label>
                            <input type="date" id="nombre" required>
                            <label for="E-mail" class="nombre">E-mail</label>
                            <input type="text" id="e-mail" placeholder="Ingresa tu correo electronico..." required>
                            <label for="correo" class="nombre">Mandanos aca tus dudas...</label>
                            <input type="text" id="correo" placeholder="Gracais por elegirnos, ingresa tu consulta y te responderemos via mail a la brevedad." required>
                            <button class="botonMail">Enviar Consulta</button>
                        </form>
                    </div>
                            `
                document.body.append(formularioMail);
            }
            
            document.querySelector('.conteiner-sesion').remove();
            
            return;
        }
    }
 

Toastify({
    text: "Contraseña Invalida",
    duration: 3000,
    gravity: "top",
    stopOnFocus: true,
    close: true,
    className: "cartel",
    }).showToast();
}



































//ESTAS SON FUNCIONES QUE TENGO EN PROCESO DE CONSTRUCCION, PERO ESTAN FUNCIONANDO CON INFO FALSA - DESESTIMAR
const btn = document.querySelector("#boton");
btn.addEventListener("click", saludar);
function saludar() {
    Toastify({
        text: "Estas Seguro con el USD en 1050?",
        duration: 3000,
        gravity: "top",
        stopOnFocus: true,
        close: true,
        className: "cartel",
        }).showToast();

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

const input2 = document.querySelector(`#input`);
const inputexto = document.querySelector(`#parrafo-vacio`);
input2.addEventListener(`input`, agregandoTexto);
function agregandoTexto() {
    inputexto.innerHTML = input.value;
}
