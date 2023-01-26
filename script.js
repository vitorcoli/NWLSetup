const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add) // eventlistener é um gatilho para um evento no elemento selecionado, recebendo dois parametros: o que ativa o gatilho e a função que vai ser atribuída
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) //new Date busca a data de hoje / .toLocaleDateString ("pt-br") coloca no formato local / .slice (0, -05) seleciona o período da string que vai ser mantido

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Esse dia já existe")
    return
  }

  alert("adicionado com sucesso")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) //localStorage.setItem guarda uma informação em uma "pasta" em forma de objeto chamada NLWSetup@habitsm. O JSON.stringfy () transforma em esse objeto em uma string aao salvar.
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //  transforma a string em objeto novamente e armazena na constante data. se não houver no armazenamento local, cria um objeto vazio.

nlwSetup.setData(data) // constroi a tabela de habitos em html
nlwSetup.load(data) // carrega os dados locais construídos e renderiza o layout
//teste teste
