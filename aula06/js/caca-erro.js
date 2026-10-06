/*
Erro 1:
O seletor "#calcula" não correspondia ao id "calcular" do botão.
Isso fazia querySelector retornar null e impedia definir onclick.
O erro foi identificado comparando o seletor com o id no HTML.
A correção foi trocar "#calcula" por "#calcular".
*/

const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
    /*
    Erro 2:
    Os valores dos campos eram lidos como texto.
    Com isso, o operador + concatenava os valores.
    O erro foi identificado pela leitura de .value sem conversão.
    A correção foi usar Number() nas três notas.
    */

    const n1 = Number(document.querySelector("#nota1").value)
    const n2 = Number(document.querySelector("#nota2").value)
    const n3 = Number(document.querySelector("#nota3").value)

    /*
    Erro 3:
    A expressão n1 + n2 + n3 / 3 dividia apenas a terceira nota.
    O erro foi identificado pela prioridade da divisão sobre a soma.
    A correção foi colocar a soma das três notas entre parênteses.
    */

    const media = (n1 + n2 + n3) / 3

    saida.textContent = "Média: " + media.toFixed(1)
}