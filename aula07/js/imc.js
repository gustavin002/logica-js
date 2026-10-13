const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
    const campoPeso = document.querySelector("#peso")
    const campoAltura = document.querySelector("#altura")

    const peso = Number(campoPeso.value)
    const altura = Number(campoAltura.value)


    if (campoPeso.value === "" || campoAltura.value === "") {
        saida.textContent = "Preencha os campos peso e altura."
        saida.className = "erro"
    } else if (peso <= 0 || altura <= 0) {
        saida.textContent = "Peso e altura devem ser maiores que zero."
        saida.className = "erro"
    } else {
        const imc = peso / (altura * altura)

        if (imc < 18.5) {
            saida.textContent = "IMC: " + imc.toFixed(1) + " Abaixo do peso"
            saida.className = "alerta"
// Trecho C
// Erro: a ordem. Qualquer IMC abaixo de 30 entra no primeiro if
// e vira "Sobrepeso"; o segundo nunca roda. Testar do menor para o maior.
        } else if (imc < 25) {
            saida.textContent = "IMC: " + imc.toFixed(1) + " Peso normal"
            saida.className = "ok"
        } else if (imc < 30) {
            saida.textContent = "IMC: " + imc.toFixed(1) + " Sobrepeso"
            saida.className = "alerta"
        } else {
            saida.textContent = "IMC: " + imc.toFixed(1) + " Obesidade"
            saida.className = "erro"
        }
    }
}    
// Campos vazios: "IMC: NaN Obesidade"
// Só o peso preenchido: "IMC: Infinity Obesidade"