document.querySelector('.button').addEventListener('click', () => {
    alert('Indo para o perfil!');
});
// Seleciona todos os botões
const buttons = document.querySelectorAll('.button');

// Adiciona evento de clique para animação
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('bounce');
        setTimeout(() => button.classList.remove('bounce'), 300);
    });
});
