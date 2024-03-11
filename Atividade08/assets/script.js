function pegarValor (url) {
  fetch(url).then(el => {
    if(!el.ok) {
      throw new Error ("Erro na requisição.")
    }
    return el
  }).then(el => el.json()).then(el => console.log(el)).catch(erro => console.log(erro.message))
}

pegarValor("https://jsonplaceholder.typicode.com/todos/1")