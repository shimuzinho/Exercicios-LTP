function divisao () {
  let numeros = pegaNumeros()
  let saida = document.getElementById("saida")
  let resultado = numeros[0] / numeros [1]

  try {
    saida.textContent = numeroValido(resultado)
  } catch (error){
    saida.textContent = `Erro: ${error.message}`
  }
}

function pegaNumeros() {
  let inputs = document.querySelectorAll(".numero")
  let array = []
  for (numero of inputs) {
    array.push(parseFloat(numero.value))
  }
  return array
}

function numeroValido (num) {
  if (isNaN(num)) {
    throw new Error("A obtenção do resultado não é possível.")
  }
}