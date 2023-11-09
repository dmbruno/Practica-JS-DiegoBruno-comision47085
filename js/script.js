

const iniciar = document.getElementById('inicio-sesion');
iniciar.addEventListener('click', inicioSesion);
const ApiUsuarios = './js/ApiUsuarios.json'
function getData() {
    fetch(ApiUsuarios)
        .then(res => {
            if (!res.ok) {
                throw new error('error throw')
            }
        })
        .then(data => {
            inicioSesion();
            login()
                .catch(error => console.log('hubo un error', error));
        })

}
getData();

function inicioSesion(event) {
    event.preventDefault();
    const main = document.querySelector('#main');
    const inicioSesion = document.createElement("div");
    inicioSesion.innerHTML =
        `
        <section class="conteiner-sesion">
            <label for="nombre" id="usuario">Usuario</label>
            <input type="text" id="nombreUsuario" placeholder="Ingresa tu Usuario..." required>
            <label for="nombre" id="usuario">Contraseña</label>
            <input type="password" id="contraseñaUsuario" placeholder="Ingresa tu Contraseña..." required>
            <button type="submit" id="btnIngresar" class="btn btn-success">Ingresar</button>
        </section>
        `
    main.appendChild(inicioSesion)
    const ingresar = document.querySelector('#btnIngresar');
    ingresar.addEventListener('click', login);
}

async function login() {
    const nombreUsuario = document.getElementById('nombreUsuario').value; //tomo el valor del imput
    const contraseñaUsuario = parseInt(document.getElementById('contraseñaUsuario').value);//tomo el valor del imput
    localStorage.setItem('user', nombreUsuario); //guardo solo usarios en el local storage

    const responseUsuarios = await fetch('./js/ApiUsuarios.json'); //se aguarda la respuesta del fetch y se guarda en responseUsuarios
    const usuarios = await responseUsuarios.json();// se lee la respuesta del .json y se guarda en usuarios

    const responseDestinos = await fetch('./js/ApiDestinos.json');// se aguarda la respuesta del fetch y se guarda en responseDestinos
    const destinos = await responseDestinos.json();// luego se guarda esta info en la variable destinos 


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
            <div class="contenedor-gral">
                    <div id="contenedor-card">
                        <img id="imagen" src=${destino.thumbnail} alt={destino.title}>
                    <div class="contenedor-info">
                        <p class="paquete">Paquete</p>
                        <h5 class="titulo">${destino.title}</h5>
                        <p class="subtitulo">Desde Bs as</p>
                        <p class="caracteristicas">${destino.description}</p>
                        <p class="ver-mas"><strong>¡Ver Mas!</strong></p>
                        <p class="precio">PRECIO POR PASAJERO</p>
                            <div class="precio-cantidad">
                                <p class="usd">USD</p>
                                <p class="monto"> ${destino.price} </p>
                            </div>
                        <p class="tarifa">Tarifa base doble. No incluye Impuestos</p>
                        <button class="boton-enviar" data-id="${destino.id}">Enviar Mail</button>
                    </div>
                </div>
            </div>
    `;
            }
            main.appendChild(saludos);
            main.appendChild(contenedor);
            const mails = document.querySelectorAll(".boton-enviar");

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
                            <button class="btn btn-primary">Enviar Consulta</button>
                        </form>
                    </div>
                            `
                main.appendChild(formularioMail);
                contenedor.remove();
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
