const botao = document.querySelector("#verificar")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
    const numero = Number(document.querySelector("#numero").value)
    let dia = ""
    let tipo = ""
    let classe = ""

    switch (numero) {
        case 1:
            dia = "Domingo"
            tipo = "fim de semana"
            classe = "alerta"
            break
        case 2:
            dia = "Segunda-feira"
            tipo = "dia útil"
            classe = "ok"
            break
        case 3:
            dia = "Terça-feira"
            tipo = "dia útil"
            classe = "ok"
            break
        case 4:
            dia = "Quarta-feira"
            tipo = "dia útil"
            classe = "ok"
            break
        case 5:
            dia = "Quinta-feira"
            tipo = "dia útil"
            classe = "ok"
            break
        case 6:
            dia = "Sexta-feira"
            tipo = "dia útil"
            classe = "ok"
            break
        case 7:
            dia = "Sábado"
            tipo = "fim de semana"
            classe = "alerta"
            break
        default:
            saida.textContent = "Digite um número de 1 a 7."
            saida.className = "erro"
            return
    }

    saida.textContent = dia + " (" + tipo + ")"
    saida.className = classe
}

// Sem o Number: .value devolve texto ("1"), e o switch compara com ===.
// "1" === 1 é false (tipos diferentes), então nenhum case bate e cai no default.