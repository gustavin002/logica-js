const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
    const nota1 = Number(document.querySelector("#nota1").value)
    const nota2 = Number(document.querySelector("#nota2").value)

    const media = (nota1 + nota2) / 2

    if(media >= 7){
        saida.textContent = "aprovado com média " + media.toFixed(1)
        saida.className = "ok"
    } else {
        saida.textContent = "Reprovado com média " + media.toFixed(1)
        saida.className = "erro"
    }

}