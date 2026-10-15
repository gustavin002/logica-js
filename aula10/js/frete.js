const valorDoFrete = (regiao) => {
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

    return frete
}

// Regra 3: sem break, o switch continua executando o case de baixo.
// Ex.: sem break no "sul", o frete passaria por todos os cases e acabaria em 35.

const temFreteGratis = (compra, regiao) => {
    return compra >= 200 && (regiao === "sul" || regiao === "sudeste")
}

const botao = document.querySelector("#calcular")

botao.onclick = () => {
    const campoCompra = document.querySelector("#compra")
    const compra = Number(campoCompra.value)
    const regiao = document.querySelector("#regiao").value

    if (campoCompra.value === "" || regiao === "") {
        mostrar1("Preencha o valor da compra e selecione a região.", "erro")
    } else if (compra <= 0) {
        mostrar1("O valor da compra deve ser maior que zero.", "erro")
    } else {
        const frete = temFreteGratis(compra, regiao) ? 0 : valorDoFrete(regiao)
        const total = compra + frete
        const textoFrete = frete === 0 ? "grátis" : "R$ " + frete.toFixed(2)

        mostrar1("Frete: " + textoFrete + "\nTotal: R$ " + total.toFixed(2), "ok")
    }
}