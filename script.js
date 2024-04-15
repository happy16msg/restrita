const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('passwordInput');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    const password = passwordInput.value.trim().toLowerCase(); // Obtemos a senha em minúsculas

    if (password === 'tadinho') {
        window.location.href = 'baloes/index.html'; // Redireciona para index.html
    } else {
        alert('Senha incorreta');
    }
});
