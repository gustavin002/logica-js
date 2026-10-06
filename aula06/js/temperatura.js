const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
    const celsius = Number(document.querySelector("#celsius").value)

    const fahrenheit = celsius * 9 / 5 + 32

    saida.textContent = celsius + " °C = " + fahrenheit.toFixed(1) + " °F"
}