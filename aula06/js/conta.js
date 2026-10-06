const TAXA_SERVICO = 0.1

const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
    const conta = Number(document.querySelector("#conta").value)
    const pessoas = Number(document.querySelector("#pessoas").value)

    const servico = conta * TAXA_SERVICO
    const total = conta + servico
    const porPessoa = total / pessoas

    saida.textContent = "Serviço: R$ " + servico.toFixed(2) +
        "\nTotal: R$ " + total.toFixed(2) +
        "\nPor pessoa: R$ " + porPessoa.toFixed(2)
}