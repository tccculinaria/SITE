document.getElementById('toggleModo').addEventListener('click', function() {
    document.body.classList.toggle('modo-claro');
    document.body.classList.toggle('modo-escuro');
    document.querySelector('.nav-bar').classList.toggle('modo-claro');
    document.querySelector('.nav-bar').classList.toggle('modo-escuro');
    document.querySelector('.conteudo').classList.toggle('modo-claro');
    document.querySelector('.conteudo').classList.toggle('modo-escuro');
});
