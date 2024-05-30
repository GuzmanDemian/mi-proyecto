document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Formulario enviado');
    console.log('Username:', username);
    console.log('Password:', password);

    if (username === 'vero123' && password === '1409') {
        console.log('Credenciales correctas');
        window.location.href = 'welcome.html';
    } else {
        console.log('Credenciales incorrectas');
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
