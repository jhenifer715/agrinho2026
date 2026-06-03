// Mostrar/ocultar informações extras
const btnMaisInfo = document.getElementById('btnMaisInfo');
const maisInfo = document.getElementById('maisInfo');

btnMaisInfo.addEventListener('click', () => {
    if (maisInfo.classList.contains('hidden')) {
        maisInfo.classList.remove('hidden');
        btnMaisInfo.textContent = 'Mostrar Menos';
    } else {
        maisInfo.classList.add('hidden');
        btnMaisInfo.textContent = 'Saiba Mais';
    }
});

// Formulário de contato
const formContato = document.getElementById('formContato');
const resposta = document.getElementById('resposta');

formContato.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    resposta.classList.remove('hidden');
    formContato.reset();
});