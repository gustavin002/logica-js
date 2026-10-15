const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

const calcularMedia = (A,B) => {
    return (A + B) / 2
}

botao.onclick = () => {
    
    const n1 = Number(document.querySelector("#nota1").value)
    const n2 = Number(document.querySelector("#nota2").value)

    const media = calcularMedia(n1, n2)

    mostrar1("Média: " + media.toFixed(1))
}