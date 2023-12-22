function submitForm() {
    var emailInput = document.getElementById('email');
    var nameInput = document.getElementById('attribute1');
    var numInput = document.getElementById('attribute5');
    var errorDivEmail = document.getElementById('msgErrorEmail');
    var errorDivName = document.getElementById('msgErrorName');
    var successDiv = document.getElementById('msgSuccess');

    var email = emailInput.value;
    var name = nameInput.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Oculta todas as divs de mensagem de erro e a de sucesso
    errorDivEmail.style.display = 'none';
    errorDivName.style.display = 'none';
    successDiv.style.display = 'none';

    // Verifica se o campo de e-mail está vazio ou não corresponde ao padrão de e-mail
    if (!email || !emailPattern.test(email)) {
        errorDivEmail.innerHTML = 'Insira um e-mail válido.';
        errorDivEmail.style.display = 'block';
        setTimeout(function() {
            errorDivEmail.style.display = 'none'; // Oculta a mensagem após 3 segundos
        }, 3000);
        return false; // Impede o envio do formulário
    }

    // Verifica se o campo de nome está vazio
    if (!name) {
        errorDivName.innerHTML = 'Campo "Nome" vazio.';
        errorDivName.style.display = 'block';
        setTimeout(function() {
            errorDivName.style.display = 'none'; // Oculta a mensagem após 3 segundos
        }, 3000);
        return false; // Impede o envio do formulário
    }

    // Exibe a mensagem de sucesso
    successDiv.innerHTML = 'Inscrição realizada com sucesso!';
    successDiv.style.display = 'block';
    setTimeout(function() {
        successDiv.style.display = 'none'; // Oculta a mensagem de sucesso após 3 segundos
    }, 3000);


    /*
    
    // Limpa os campos de entrada após 3 segundos
    setTimeout(function() {
        emailInput.value = ''; // Limpa o campo de e-mail
        nameInput.value = ''; // Limpa o campo de nome
        numInput.value = ''; // Limpa o campo de nome
    }, 3000);

    */

    return true; // Permite o envio do formulário
}

/*

// Função para formatar o campo de telefone
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}

// Associa a função ao evento "input" do campo de telefone

var phoneNumberInput = document.getElementById('attribute5');
phoneNumberInput.addEventListener('input', function() {
    formatPhoneNumber(this);
});

// Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')

*/
