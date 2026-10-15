const mostrar1 = (mensagem, classe) => {
    const saida = document.querySelector("#resultado1")
    saida.textContent = mensagem
    saida.className = classe
}

const mostrar2 = (mensagem, classe) => {
    const saida = document.querySelector("#resultado2")
    saida.textContent = mensagem
    saida.className = classe
}