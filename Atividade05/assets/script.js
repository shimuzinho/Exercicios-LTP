function acessandoElemento () {
  let id = document.querySelector(".class-desejada").value
  let saida = document.getElementById("saida")

  try {
    elementoValido(id)
    saida.textContent = "Elemento encontrado."
  } catch (error){
    saida.textContent = `Erro: ${error.message}`
  }
}

function elementoValido (num) {
  if (document.getElementById(num) == null) {
    throw new Error("Elemento inexistente.")
  }
}