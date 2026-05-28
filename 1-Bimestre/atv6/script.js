const inputTarefa = document.getElementById('tarefa-input');
const btnAdicionar = document.getElementById('adicionar-btn');
const listaTarefas = document.getElementById('lista-tarefas');

function adicionarTarefa() {
    const texto = inputTarefa.value.trim();

    if (texto === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }
    
    const li = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'tarefa-checkbox';
    
    const span = document.createElement('span');
    span.textContent = texto;
    span.className = 'tarefa-texto';

    const conteudoDiv = document.createElement('div');
    conteudoDiv.className = 'tarefa-conteudo';
    conteudoDiv.appendChild(checkbox);
    conteudoDiv.appendChild(span);

    li.appendChild(conteudoDiv);

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            li.classList.add('concluida');
        } else {
            li.classList.remove('concluida');
        }
    });

    listaTarefas.appendChild(li);

    inputTarefa.value = '';
    inputTarefa.focus();
    
    console.log(`Tarefa adicionada: ${texto}`);
}

listaTarefas.addEventListener('click', function(event) {
    const li = event.target.closest('li');
    
    if (li) {
        li.remove();
        console.log('Tarefa removida');
    }
});

btnAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});