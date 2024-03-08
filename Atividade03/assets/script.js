function transformando () {
  let entrada = document.querySelector(".entrada").value
  let saida = document.getElementById("saida")

  try {
    let operacao = eval(entrada)
    saida.textContent = operacao
  } catch (error){
    saida.textContent = `Erro: Isso não é uma operação`
  }
}