document.getElementById('login-btn').addEventListener('click', async function () {
    const usuario = document.getElementById('username').value;
    const contrasenia = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: usuario, password: contrasenia }),
        });
        const data = await response.json();

        if (response.ok) {
            alert(data.message); 
        } else {
            alert(data.message);  
        }
    } catch (error) {
        console.error('Error en la petición:', error);
        alert('Hubo un error al intentar hacer login. Intenta nuevamente.');
    }
});
