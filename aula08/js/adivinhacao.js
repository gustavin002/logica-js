const botao = document.querySelector("#chutar")
const campo = document.querySelector("#chute")
const saida = document.querySelector("#resultado")

const LIMITE = 7
const secreto = Math.floor(Math.random() * 100) + 1
let tentativas = 0
let historico = "" 
let fim = false

botao.onclick = () => {
  const chute = Number(campo.value)

    if (fim) {
        saida.textContent = "O jogo terminou. Aperte F5 para jogar de novamente."
    }else if (campo.value === "" || chute < 1 || chute > 100) {
        saida.textContent = "Digite um número de 1 a 100."
        saida.className = "erro"
    } else {
        tentativas++
        historico += chute + " "
        const restam = LIMITE - tentativas
    if (chute === secreto) {
        saida.textContent = "Acertou em " + tentativas + " tentativas!"
        saida.className = "ok"
        fim = true
    } else if (restam === 0) {
        saida.textContent = "Suas " + LIMITE + " tentativas acabaram. O número era " + secreto + "."
        saida.className = "erro"
        fim = true
    } else if (chute < secreto) {
      saida.textContent = chute + ": é MAIOR. Restam " + restam + " tentativas."
      saida.className = "alerta"
    } else {
      saida.textContent = chute + ": é MENOR. Restam " + restam + " tentativas."
      saida.className = "alerta"
    }

    saida.textContent += "\nChutes: " + historico
    
    }

}