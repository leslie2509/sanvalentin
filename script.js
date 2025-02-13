let contador = 0;
let audio;

function mostrarFormulario() {
    document.getElementById("pregunta").style.display = "flex";
    document.getElementById("boton-iniciar").style.display = "none";
}

function bloquearBoton() {
    const botonNo = document.getElementById("no");
    const botonSi = document.getElementById("si");

    botonNo.addEventListener('touchstart', function(event) {
        event.preventDefault(); 

        contador++;

        if (contador < 4) {
            const randomX = Math.floor(Math.random() * 200) - 100; 
            const randomY = Math.floor(Math.random() * 200) - 100; 

            botonNo.style.transform = `translate(${randomX}px, ${randomY}px)`; 
        }

        if (contador === 3) {
            setTimeout(function() {
                mostrarVentanaEmergenteNo();
                reproducirMusica();  
            }, 1000); 
        }
    });

    botonSi.addEventListener('click', function(event) {
        event.preventDefault(); 
        mostrarVentanaEmergenteSi();
    });
}

function mostrarVentanaEmergenteNo() {
    const ventanaEmergente = document.createElement('div');
    ventanaEmergente.style.position = 'fixed';
    ventanaEmergente.style.top = '0';
    ventanaEmergente.style.left = '0';
    ventanaEmergente.style.width = '100vw';
    ventanaEmergente.style.height = '100vh';
    ventanaEmergente.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    ventanaEmergente.style.display = 'flex';
    ventanaEmergente.style.justifyContent = 'center';
    ventanaEmergente.style.alignItems = 'center';
    ventanaEmergente.style.zIndex = '9999';

    const imagen = document.createElement('img');
    imagen.src = 'triste.jpg';  
    imagen.alt = 'Gato feo tiste';
    imagen.style.width = '80%';  
    imagen.style.borderRadius = '10px';

    ventanaEmergente.appendChild(imagen);

    const botonCerrar = document.createElement('button');
    botonCerrar.innerHTML = 'X'; 
    botonCerrar.style.position = 'absolute';
    botonCerrar.style.top = '10px';
    botonCerrar.style.right = '10px';
    botonCerrar.style.fontSize = '24px';
    botonCerrar.style.padding = '5px 10px';
    botonCerrar.style.backgroundColor = 'transparent'; 
    botonCerrar.style.color = 'white'; 
    botonCerrar.style.border = 'none'; 
    botonCerrar.style.borderRadius = '50%';
    botonCerrar.style.cursor = 'pointer';

    ventanaEmergente.appendChild(botonCerrar);

    botonCerrar.addEventListener('click', function() {
        detenerMusica();
        location.reload(); 
        document.body.removeChild(ventanaEmergente);
    });

    document.body.appendChild(ventanaEmergente);
}

function mostrarVentanaEmergenteSi() {
    const ventanaEmergente = document.createElement('div');
    ventanaEmergente.style.position = 'fixed';
    ventanaEmergente.style.top = '0';
    ventanaEmergente.style.left = '0';
    ventanaEmergente.style.width = '100vw';
    ventanaEmergente.style.height = '100vh';
    ventanaEmergente.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    ventanaEmergente.style.display = 'flex';
    ventanaEmergente.style.justifyContent = 'center';
    ventanaEmergente.style.alignItems = 'center';
    ventanaEmergente.style.zIndex = '9999';

    const contenedor = document.createElement('div');
    contenedor.style.textAlign = 'center';  
    contenedor.style.display = 'flex';
    contenedor.style.flexDirection = 'column';
    contenedor.style.justifyContent = 'center';
    contenedor.style.alignItems = 'center';

    const imagen = document.createElement('img');
    imagen.src = 'feli.jpg'; 
    imagen.alt = 'GatoFeoFeli';
    imagen.style.width = '80%';  
    imagen.style.borderRadius = '10px';
    imagen.style.marginBottom = '20px'; 

    const mensaje = document.createElement('div');
    mensaje.innerHTML = 'Nos vemos el viernes a las 7:00 pm, papi c;';
    mensaje.style.color = 'white';
    mensaje.style.fontSize = '1em';
    mensaje.style.fontWeight = 'bold';

  
    contenedor.appendChild(imagen);
    contenedor.appendChild(mensaje);

    ventanaEmergente.appendChild(contenedor);
    const botonCerrar = document.createElement('button');
    botonCerrar.innerHTML = 'X'; 
    botonCerrar.style.position = 'absolute';
    botonCerrar.style.top = '10px';
    botonCerrar.style.right = '10px';
    botonCerrar.style.fontSize = '24px';
    botonCerrar.style.padding = '5px 10px';
    botonCerrar.style.backgroundColor = 'transparent'; 
    botonCerrar.style.color = 'white'; 
    botonCerrar.style.border = 'none'; 
    botonCerrar.style.borderRadius = '50%';
    botonCerrar.style.cursor = 'pointer';

    ventanaEmergente.appendChild(botonCerrar);

    botonCerrar.addEventListener('click', function() {
        document.body.removeChild(ventanaEmergente);
    });

    document.body.appendChild(ventanaEmergente);
}

function reproducirMusica() {
    audio = new Audio('tiste.mp3');  
    audio.play();  
}

function detenerMusica() {
    if (audio) {
        audio.pause(); 
        audio.currentTime = 0;  
    }
}

document.addEventListener("DOMContentLoaded", function() {
    bloquearBoton();
});
