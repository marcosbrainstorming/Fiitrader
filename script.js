document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Login efetuado com sucesso!');
        // Aqui você pode adicionar lógica para enviar os dados ao servidor
    }
});
