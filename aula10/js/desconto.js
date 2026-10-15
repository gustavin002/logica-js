const botao = document.querySelector("#calcular")

const valorDoDesconto = (preco, porcentagem) => {
    return preco * porcentagem / 100
}

const aplicarDesconto = (preco, porcentagem) => {
    return preco - valorDoDesconto(preco, porcentagem)
}

botao.onclick = () => {
    const preco = Number(document.querySelector("#preco").value)
    const porcentagem = Number(document.querySelector("#porcentagem").value)

    const desconto = valorDoDesconto(preco, porcentagem)

    const precoFinal = aplicarDesconto(preco, porcentagem)

    mostrar1("Desconto: R$ " + desconto.toFixed(2) +
        "\nPreço final: R$ " + precoFinal.toFixed(2))

}
// Desconto: R$ 30.00 Preço final: R$ -15.00
// A ordem dos argumentos importa: primeiro vem o preço, depois o percentual.