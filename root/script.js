function mostrarArea(id) {
    // Esconder todas as áreas
    var areas = document.getElementsByClassName('area-pt3');
    for (var i = 0; i < areas.length; i++) {
        areas[i].style.display = 'none';
    }

    // Remover a classe .btn-actived de todos os botões
    var botoes = document.getElementsByTagName('button');
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove('btn-actived');
    }

    // Mostrar a área correspondente ao botão clicado
    var areaSelecionada = document.getElementById(id);
    if (areaSelecionada) {
        areaSelecionada.style.display = 'block';
    }

    // Adicionar a classe .btn-actived ao botão clicado
    var botaoClicado = document.querySelector('button[data-id="' + id + '"]');
    if (botaoClicado) {
        botaoClicado.classList.add('btn-actived');
    }
}
