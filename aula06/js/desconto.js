const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
    const preco = Number(document.querySelector("#preco").value)
    const porcentagem = Number(document.querySelector("#porcentagem").value)

    const desconto = preco * porcentagem / 100
    const precoFinal = preco - desconto

    saida.textContent = "Desconto: R$ " + desconto.toFixed(2) +
        "\nPreço final: R$ " + precoFinal.toFixed(2)
}