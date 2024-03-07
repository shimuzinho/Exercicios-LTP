function transformar () {
  let string = document.querySelector(".entrada").value
  let saida = document.getElementById("saida")

  try {
    saida.textContent = testeTransformacao(string)
  } catch (error){
    saida.textContent = `Erro: ${error.message}`
  }
}

function testeTransformacao (text) {
  if (isNaN(text)) {
    throw new Error("Não é possível transformar em número.")
  }
  return parseFloat(text)
}