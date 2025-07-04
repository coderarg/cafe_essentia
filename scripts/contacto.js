
const mimensajelindo = document.getElementById('mensaje_respuesta')

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('inputName');
    const email = document.getElementById('inputEmail');
    const message = document.getElementById('inputMessage');

    let valid = true;

    // Nombre
    if (name.value.trim() === '') {
        name.classList.add('is-invalid');
        name.classList.remove('is-valid');
        valid = false;
    } else {
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        valid = false;
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }

    // Mensaje
    if (message.value.trim() === '') {
        message.classList.add('is-invalid');
        message.classList.remove('is-valid');
        valid = false;
    } else {
        message.classList.remove('is-invalid');
        message.classList.add('is-valid');
    }

    if (valid) {
        const parrafo = document.createElement('p')
        parrafo.textContent = `${name.value()} tu mensaje ha sido enviado exitosamente!`;
        console.log(parrafo);
        mimensajelindo.innerHTML = '';
        mimensajelindo.appendChild(parrafo);
    }
});