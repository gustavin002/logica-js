const calcularImc = (peso, altura) => {
    return peso / (altura * altura)
}

const classificarImc = (imc) => {
// Trecho C
// Erro: a ordem. Qualquer IMC abaixo de 30 entra no primeiro if
// e vira "Sobrepeso"; o segundo nunca roda. Testar do menor para o maior.
    if (imc < 18.5) {
        return "Abaixo do peso"
    }
    if (imc < 25) {
        return "Peso normal"
    }
    if (imc < 30) {
        return "Sobrepeso"
    }
    return "Obesidade"
}

const classeDaFaixa = (faixa) => {
    switch (faixa) {
        case "Peso normal":
            return "ok"
        case "Abaixo do peso":
        case "Sobrepeso":
            return "alerta"
        default:
            return "erro"
    }
}

const botao = document.querySelector("#calcular")

botao.onclick = () => {
    const campoPeso = document.querySelector("#peso")
    const campoAltura = document.querySelector("#altura")

    const peso = Number(campoPeso.value)
    const altura = Number(campoAltura.value)


    if (campoPeso.value === "" || campoAltura.value === "") {
        mostrar1("Preencha os campos peso e altura.", "erro")
    } else if (peso <= 0 || altura <= 0) {
        mostrar1("Peso e altura devem ser maiores que zero.", "erro")
    } else {
        const imc = calcularImc(peso, altura)
        const faixa = classificarImc(imc)
        const classe = classeDaFaixa(faixa)

        mostrar1("IMC: " + imc.toFixed(1) + " " + faixa, classe)
    }
}
// Campos vazios: "IMC: NaN Obesidade"
// Só o peso preenchido: "IMC: Infinity Obesidade"