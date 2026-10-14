// Academia Movimente-se, parte 6 (aula 6): a página calcula
const MENSALIDADE = 99.90

// Desafio 1 (Simulador de Mensalidades)
const botao1 = document.querySelector("#d1-calcular")
const saida1 = document.querySelector("#d1-resultado")

botao1.onclick = () => {
  const meses = Number(document.querySelector("#d1-meses").value)
  const total = MENSALIDADE * meses
  saida1.textContent = meses + " meses x R$ " + MENSALIDADE.toFixed(2) + " = R$ " + total.toFixed(2)
}

// Desafio 2 (Gasto Calórico): kcal = MET x peso x horas (musculação: MET 5)
const MET_MUSCULACAO = 5
const botao2 = document.querySelector("#d2-calcular")
const saida2 = document.querySelector("#d2-resultado")

botao2.onclick = () => {
  const peso = Number(document.querySelector("#d2-peso").value)
  const minutos = Number(document.querySelector("#d2-minutos").value)
  const horas = minutos / 60
  const calorias = MET_MUSCULACAO * peso * horas
  saida2.textContent = "Gasto aproximado: " + Math.round(calorias) + " kcal"
}

// Desafio 3 (Matrícula à Vista): taxa de R$ 50 + mensalidades com 10% de desconto
const TAXA_MATRICULA = 50
const botao3 = document.querySelector("#d3-calcular")
const saida3 = document.querySelector("#d3-resultado")

botao3.onclick = () => {
  const meses = Number(document.querySelector("#d3-meses").value)
  const mensalidades = MENSALIDADE * meses
  const desconto = mensalidades * 0.1
  const total = TAXA_MATRICULA + mensalidades - desconto

  saida3.textContent = "Mensalidades: R$ " + mensalidades.toFixed(2) + "\n" +
                       "Desconto à vista (10%): R$ " + desconto.toFixed(2) + "\n" +
                       "Taxa de matrícula: R$ " + TAXA_MATRICULA.toFixed(2) + "\n" +
                       "Total: R$ " + total.toFixed(2).replace(".", ",")   // extra: vírgula
}