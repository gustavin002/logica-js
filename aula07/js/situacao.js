const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
    const nota1 = Number(document.querySelector("#nota1").value)
    const nota2 = Number(document.querySelector("#nota2").value)

    const media = (nota1 + nota2) / 2

// Trecho A
// Erro: "=" é atribuição, não comparação. Coloca 7 em media, e como 7 é
// um valor verdadeiro, o if sempre entra e o valor original de media se perde.
    if(media >= 7){
        saida.textContent = "aprovado com média " + media.toFixed(1)
        saida.className = "ok"

    } else if(media >= 5){
        saida.textContent = "Recuperação com média " + media.toFixed(1)
        saida.className = "alerta"

    } else {
        saida.textContent = "Reprovado com média " + media.toFixed(1)
        saida.className = "erro"
    }

}