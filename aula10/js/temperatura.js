const botao1 = document.querySelector("#calcular1")
const botao2 = document.querySelector("#calcular2")

botao1.onclick = () => {
    const celsius = Number(document.querySelector("#celsius").value)

    const fahrenheit = celsius * 9 / 5 + 32

    mostrar1(celsius + " °C = " + fahrenheit.toFixed(1) + " °F", "resultado")

}

botao2.onclick = () => {
    const fahrenheit = Number(document.querySelector("#fahrenheit").value)

    const celsius = (fahrenheit - 32) * 5 / 9

    mostrar2(fahrenheit + " °F = " + celsius.toFixed(1) + " °C", "resultado")

}