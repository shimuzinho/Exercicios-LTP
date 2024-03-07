function acessandoElemento () {
  let id = document.querySelector(".class-desejada")
  let saida = document.getElementById("saida")

  try {
    document.getElementById(id)
    elementoValido(id)
    saida.textContent = "Elemento encontrado."
  } catch (error){
    saida.textContent = `Erro: ${error.message}`
  }
}

function elementoValido (num) {
  if (document.body.contains(document.getElementById(num))) {
    throw new Error("Elemento inexistente.")
  }
}