// Academia Movimente-se, parte 7 (aula 7): a página decide

// Desafio 1 (Valor do Plano): switch
const botao1 = document.querySelector("#d1-calcular")
const saida1 = document.querySelector("#d1-resultado")

botao1.onclick = () => {
  const plano = document.querySelector("#d1-plano").value
  let porMes
  let meses

  switch (plano) {
    case "mensal":
      porMes = 99.90
      meses = 1
      break
    case "trimestral":
      porMes = 89.90
      meses = 3
      break
    case "anual":
      porMes = 79.90
      meses = 12
      break
    default:
      meses = 0
  }

  if (meses === 0) {
    saida1.textContent = "Escolha um plano."
    saida1.className = "erro"
  } else {
    const total = porMes * meses
    saida1.textContent = "Plano " + plano + ": " + meses + " x R$ " + porMes.toFixed(2) +
                         " = R$ " + total.toFixed(2)
    saida1.className = "ok"
  }
}

// Desafio 2 (Meia Mensalidade): menores de 18 OU a partir de 60 anos
const botao2 = document.querySelector("#d2-verificar")
const saida2 = document.querySelector("#d2-resultado")

botao2.onclick = () => {
  const campoIdade = document.querySelector("#d2-idade")
  const idade = Number(campoIdade.value)

  if (campoIdade.value === "" || idade <= 0) {
    saida2.textContent = "Digite uma idade válida."
    saida2.className = "erro"
  } else if (idade < 18 || idade >= 60) {
    saida2.textContent = "Você tem direito a meia mensalidade: R$ " + (99.90 / 2).toFixed(2)
    saida2.className = "ok"
  } else {
    saida2.textContent = "Mensalidade: R$ 99.90"
    saida2.className = "resultado"
  }
}

// Desafio 3 (Está Aberta?): && dentro de cada regra
const botao3 = document.querySelector("#d3-verificar")
const saida3 = document.querySelector("#d3-resultado")

botao3.onclick = () => {
  const dia = document.querySelector("#d3-dia").value
  const hora = Number(document.querySelector("#d3-hora").value)
  let aberta

  if (dia === "util") {
    aberta = hora >= 6 && hora < 22
  } else if (dia === "sabado") {
    aberta = hora >= 8 && hora < 14
  } else {
    aberta = false   // domingo (ou nenhum dia escolhido)
  }

  if (dia === "") {
    saida3.textContent = "Escolha o dia."
    saida3.className = "erro"
  } else if (aberta) {
    saida3.textContent = "Às " + hora + "h a academia está ABERTA"
    saida3.className = "ok"
  } else {
    saida3.textContent = "Às " + hora + "h a academia está FECHADA"
    saida3.className = "erro"
  }
}