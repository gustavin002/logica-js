const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
    const total = Number(document.querySelector("#minutos").value)

    const horas = Math.floor(total / 60)
    const minutos = total % 60

    saida.textContent = total + " minutos = " + horas + " h e " + minutos + " min"
}