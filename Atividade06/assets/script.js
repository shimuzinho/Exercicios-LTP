function mostrarFraseNaTela () {
  mostrandoFrase()
  let intervalo = setInterval(mostrandoFrase, 1000)
  let buttonRemover = document.createElement("button")
  buttonRemover.onclick = function() {
    pararDeMostrarFrase(intervalo, buttonRemover)
  }
  buttonRemover.textContent = "Remover intervalo"
  document.body.appendChild(buttonRemover)
}

function mostrandoFrase (){
  let entrada = document.querySelector(".entrada").value
  let saida = document.getElementById("saida")

  try {
    saida.textContent = frase(entrada)
  } catch (error){
    saida.textContent = `Erro: ${error.message}`
  }
}

function pararDeMostrarFrase (variable, button) {
  clearInterval(variable)
  saida.textContent = ""
  document.body.removeChild(button)
}

function frase (string) {
  if (isNaN(string) == false) {
    throw new Error ("Não é uma frase.")
  }
  return string
}