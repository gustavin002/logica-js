const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
    const distancia = Number(document.querySelector("#distancia").value)
    const consumo = Number(document.querySelector("#consumo").value)
    const precoLitro = Number(document.querySelector("#preco_litro").value)

    const litros = distancia / consumo
    const custoIda = litros * precoLitro
    const custoIdaVolta = custoIda * 2

    saida.textContent = "Litros: " + litros.toFixed(1) +
        "\nCusto da ida: R$ " + custoIda.toFixed(2) +
        "\nCusto de ida e volta: R$ " + custoIdaVolta.toFixed(2)
}

/*
Com distância e preço positivos, se o consumo for 0,
aparece Infinity nos litros e nos custos, pois a divisão
de um número positivo por zero resulta em Infinity.
Se a distância também for 0, a divisão 0 / 0 resulta em NaN.
*/