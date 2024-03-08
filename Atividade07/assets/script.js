let pessoa = {
  "nome": "Pedro",
  "sobrenome": "Rossini",
  "cpf": 12394301232,
  "altura": 1.75,
  "idade": 16,
  "dataNascimento": "26/12/2007",
  "endereco": {
    "bairro": "Centro",
    "rua": "Levino Lopes da Silva",
    "numero": 1923
  }
}

function procurarValor() {
  let entrada = document.querySelector(".entrada").value
  let saida = document.getElementById("saida")
  try {
    saida.textContent = verificaExistencia(pessoa[entrada])
  } catch (erro){
    saida.textContent = `Erro: ${erro.message}`
  }
}

function verificaExistencia(el) {
  if (el == undefined) {
    throw new Error ("Valor não encontrado.")
  }
  return el
}