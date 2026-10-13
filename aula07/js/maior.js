const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
// Trecho B (o usuário digitou 9 e 10)
// Erro: .value devolve texto. "9" > "10" compara caractere por caractere,
// e "9" vem depois de "1", então dá true e mostra "O maior é 9" (errado).
    const numero1 = Number(document.querySelector("#numero1").value)
    const numero2 = Number(document.querySelector("#numero2").value)

    if(numero1 > numero2){
        saida.textContent = " O numero " +  numero1 + " é maior"

    } else if(numero1 < numero2){
        saida.textContent = " O numero " +  numero2 + " é maior"
        
    } else {
        saida.textContent = "Os dois numeros são iguais"
        saida.className(alerta)
    }
 
}