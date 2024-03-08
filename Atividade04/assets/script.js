let array = []

function mostrarElemento () {
  let entrada = document.querySelector(".entrada-indice").value
  let saida = document.getElementById("saida")
  try {
    saida.textContent = acharElemento(array, entrada)
  } catch (error){
    saida.textContent = `Erro: ${error.message}`
  }
}

function adicionarElemento () {
  let entradaElemento = document.querySelector(".entrada-array")
  array.push(entradaElemento.value)
  entradaElemento.value = ""
}

function acharElemento (a, b) {
  if (a[b] == undefined || a[b] == "") {
    throw new Error ("Não existe elemento com esse índice ou elemento vazio.")
  }
  return a[b]
}