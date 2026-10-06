const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
    
    const n1 = Number(document.querySelector("#nota1").value)
    const n2 = Number(document.querySelector("#nota2").value)

    const media = (n1 + n2) / 2

    saida.textContent = "Média: " + media.toFixed(1)
}

/*
Sem Number(), os valores 2 e 3 são textos.
O operador + junta os textos, formando "23".
A divisão converte "23" em número e calcula 23 / 2.
Por isso, aparece Média: 11.5.
*/