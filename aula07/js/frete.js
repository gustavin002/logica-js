const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
    const campoCompra = document.querySelector("#compra")
    const compra = Number(campoCompra.value)
    const regiao = document.querySelector("#regiao").value

    if (campoCompra.value === "" || regiao === "") {
        saida.textContent = "Preencha o valor da compra e selecione a região."
        saida.className = "erro"
    } else if (compra <= 0) {
        saida.textContent = "O valor da compra deve ser maior que zero."
        saida.className = "erro"
    } else {
        let frete = 0

        switch (regiao) {
            case "sul":
                frete = 15
                break
            case "sudeste":
                frete = 20
                break
            case "centro-oeste":
                frete = 25
                break
            case "nordeste":
                frete = 30
                break
            case "norte":
                frete = 35
                break
        }

        if (compra >= 200 && (regiao === "sul" || regiao === "sudeste")) {
            frete = 0
        }

        const total = compra + frete
        const textoFrete = frete === 0 ? "grátis" : "R$ " + frete.toFixed(2)

        saida.textContent = "Frete: " + textoFrete + "\nTotal: R$ " + total.toFixed(2)
        saida.className = "ok"
    }
}

// Regra 3: sem break, o switch continua executando o case de baixo.
// Ex.: sem break no "sul", o frete passaria por todos os cases e acabaria em 35.