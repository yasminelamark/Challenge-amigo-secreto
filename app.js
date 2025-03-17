let listaAmigos = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim(); 
    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    listaAmigos.push(nome); 
    atualizarLista(); 
    inputNome.value = ""; 
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    listaAmigos.forEach((amigo) => {
        let item = document.createElement("li"); 
        item.textContent = amigo; 
        lista.appendChild(item); 
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length); 
    let amigoSorteado = listaAmigos[indiceSorteado]; 

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> O amigo sorteado é: <strong>${amigoSorteado}</strong> </li>`;
}

function sortearPares() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear pares.");
        return;
    }

    let amigosEmbaralhados = [...listaAmigos].sort(() => Math.random() - 0.5);
    let pares = [];

    for (let i = 0; i < amigosEmbaralhados.length - 1; i += 2) {
        pares.push(`${amigosEmbaralhados[i]} & ${amigosEmbaralhados[i + 1]}`);
    }

    if (amigosEmbaralhados.length % 2 !== 0) {
        pares.push(`${amigosEmbaralhados[amigosEmbaralhados.length - 1]} está sem par.`);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = pares.map(par => `<li>${par}</li>`).join("");
}
