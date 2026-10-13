const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
    const numero = Number(document.querySelector("#numero").value)

    const tipo = numero % 2 === 0 ? "par" : "ímpar"
    saida.textContent = numero + " é " + tipo
    saida.className = numero % 2 === 0 ? "ok" : "alerta"
 
}