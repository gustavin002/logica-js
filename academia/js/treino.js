// Academia Movimente-se, parte 8 (aula 8): a página repete
const MENSALIDADE = 99.90

// Desafio 1 (Extrato de Mensalidades): for + acumulador
const botao1 = document.querySelector("#d1-gerar")
const saida1 = document.querySelector("#d1-resultado")

botao1.onclick = () => {
  const meses = Number(document.querySelector("#d1-meses").value)
  let acumulado = 0
  let texto = ""

  for (let mes = 1; mes <= meses; mes++) {
    acumulado += MENSALIDADE
    texto += "Mês " + mes + ": R$ " + MENSALIDADE.toFixed(2) +
             " (acumulado R$ " + acumulado.toFixed(2) + ")\n"
  }

  saida1.textContent = texto
}

// Desafio 2 (Progressão de Carga): 8 semanas, aumento percentual por semana
const botao2 = document.querySelector("#d2-gerar")
const saida2 = document.querySelector("#d2-resultado")

botao2.onclick = () => {
  let carga = Number(document.querySelector("#d2-carga").value)
  const aumento = Number(document.querySelector("#d2-aumento").value)
  let texto = ""

  for (let semana = 1; semana <= 8; semana++) {
    texto += "Semana " + semana + ": " + carga.toFixed(1) + " kg\n"
    carga = carga * (1 + aumento / 100)
  }

  saida2.textContent = texto
}

// Desafio 3 (Desafio dos 10 km): while, +10% por semana
const botao3 = document.querySelector("#d3-calcular")
const saida3 = document.querySelector("#d3-resultado")

botao3.onclick = () => {
  let km = Number(document.querySelector("#d3-km").value)
  let semanas = 0

  if (km <= 0) {
    saida3.textContent = "Digite quantos km você corre hoje (maior que zero)."
    saida3.className = "erro"
  } else {
    while (km < 10) {
      km = km * 1.1
      semanas++
    }
    saida3.textContent = "Você chega aos 10 km em " + semanas + " semanas" +
                         " (" + km.toFixed(1) + " km na última)."
    saida3.className = "ok"
  }
}
