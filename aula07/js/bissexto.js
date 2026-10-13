const botao = document.querySelector("#verificar")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
    const campoAno = document.querySelector("#ano")
    const ano = Number(campoAno.value)

    if (campoAno.value === "" || ano <= 0) {
        saida.textContent = "Digite um ano válido."
        saida.className = "erro"
    } else if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        saida.textContent = ano + " é bissexto."
        saida.className = "ok"
    } else {
        saida.textContent = ano + " não é bissexto."
        saida.className = "alerta"
    }
}

// Testes: 2024 é, 1900 não é, 2000 é, 2023 não é.