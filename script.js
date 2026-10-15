// Geração dinâmica das partículas flutuantes (estilo sementes de Eywa / Avatar)
function createSpores() {
    const sporesBg = document.getElementById('sporesBg');
    const sporeCount = 25;

    for (let i = 0; i < sporeCount; i++) {
        const spore = document.createElement('div');
        spore.classList.add('spore');
        
        const size = Math.random() * 8 + 4;
        spore.style.width = `${size}px`;
        spore.style.height = `${size}px`;

        spore.style.left = `${Math.random() * 100}%`;

        const duration = Math.random() * 6 + 4;
        const delay = Math.random() * 5;
        spore.style.animationDuration = `${duration}s`;
        spore.style.animationDelay = `${delay}s`;

        sporesBg.appendChild(spore);
    }
}

// Controle da animação de introdução e revelação da tela principal
window.addEventListener('DOMContentLoaded', () => {
    createSpores();

    // Tempo de duração da animação de introdução (2 segundos)
    setTimeout(() => {
        const introScreen = document.getElementById('introScreen');
        const mainApp = document.getElementById('mainApp');

        introScreen.classList.add('fade-out');
        
        mainApp.classList.remove('app-hidden');
        setTimeout(() => {
            mainApp.classList.add('show-app');
        }, 50);

        // Remove do DOM após a transição para otimizar
        setTimeout(() => {
            introScreen.remove();
        }, 500);

    }, 2000);
});

// Lógica de verificação do formulário e controle do Modal
const vagaForm = document.getElementById('vagaForm');
const resultModal = document.getElementById('resultModal');
const modalBox = document.getElementById('modalBox');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const closeModalBtn = document.getElementById('closeModalBtn');

vagaForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const altura = parseFloat(document.getElementById('altura').value);

    modalBox.classList.remove('sucesso', 'erro');

    // Validação dos critérios (altura >= 1.70 e idade >= 18)
    if (altura >= 1.70 && idade >= 18) {
        modalBox.classList.add('sucesso');
        modalTitle.textContent = "Apto para a Vaga";
        modalMessage.textContent = `Parabéns, ${nome}! Você pode prosseguir no processo para a vaga!`;
    } else {
        modalBox.classList.add('erro');
        modalTitle.textContent = "Sincronia Negada";
        modalMessage.textContent = `Infelizmente você não é apto à vaga, ${nome}.`;
    }

    resultModal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', function() {
    resultModal.classList.add('hidden');
    vagaForm.reset();
});