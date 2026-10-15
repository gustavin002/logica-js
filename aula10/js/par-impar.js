const botao = document.querySelector("#calcular")

const ehPar = (numero) => {
    return numero % 2 === 0
}

botao.onclick = () => {
    const campo = document.querySelector("#numero").value

    if (campo === "") {
        mostrar1("Digite um número.", "erro")
        return
    }

    const numero = Number(campo)

    if (ehPar(numero)) {
        mostrar1(`${numero} é par.`, "ok")
    } else {
        mostrar1(`${numero} é ímpar.`, "alerta")
    }

}