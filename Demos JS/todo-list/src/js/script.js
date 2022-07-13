//SELECIONADO ELEMENTOS
let inputText       = document.querySelector(".inputText")
let btnAdicionar    = document.querySelector(".btnAdicionar")
let tagLista        = document.querySelector(".lista")

//LISTA DE TAREFAS
const listaTarefas = [
    {nome:"Terefa Modelo", status: false},
  
]

//FUNÇÃO ADICIONAR TAREFAS
function adicionarTarefa(){
    
    //Recuperar valor digitado no campo (input)
    let textValue = inputText.value.trim()

    //Validar campo se o campo está vazio ⇒ trim()
    if(textValue !== ""){

        //Modelagem da tarefa
        const novatarefa = {}

        novatarefa.nome   = textValue
        novatarefa.status = false

        //Adicionar tarefa no início ou final do array?
        //listaTarefas.push(novatarefa)
        listaTarefas.unshift(novatarefa)

        //LISTANDO TAREFAS ADICIONADAS
        listarTarefas(listaTarefas, tagLista)
        
        //LIMPAR O CAMPO 
        inputText.value = ""
    }

}
btnAdicionar.addEventListener("click", adicionarTarefa)


//LISTAR TAREFAS
function listarTarefas(arrayTarefas, tagLista){
    
    //Limpar lista ⇒ inner.HTML
   tagLista.innerText = ""
    
    //Executar loop para recuperar cada uma das tarefas (for / forEach)
    for(let i = 0; i<arrayTarefas.length; i++){
        
        //RECUPERANDO TAREFA DO ARRAY
        let tarefa = arrayTarefas[i]

        //RECUPERANDO TEMPLATE MONTADO
        let template = montarTemplate(tarefa, i)
        
        //ADICIONANDO TEMPLATE PRONTO NA LISTA (HTML => UL)
        tagLista.appendChild(template)
    }
    
}
//LISTANDO TAREFAS ADICIONADAS
listarTarefas(listaTarefas, tagLista)

//MONTANDO TEMPLATE PARA CADA TAREFA
function montarTemplate(tarefa, index){
   
    //CRIANDO TAG LI
    let tagLi  = document.createElement("li")
    
    //ALIMENTANDO A TAG 
    tagLi.innerHTML = `
        <h2>${tarefa.nome}</h2>
        <button id="${index}">X</button>
    ` 

    //RETORNANDO LI
    return tagLi

}

{/* <li>
    <h2>TEste</h2>
    <button id="1">X</button>
</li> */}

//REMOVER TAREFA 
function removerTarefa(event){

    //INTERCEPTANDO BOTÃO (REMOÇÃO)
    let btnRemover = event.target

    //VERIFICANDO SE É UM BUTTON
    if(btnRemover.tagName == "BUTTON"){

        btnRemover.parentElement.classList.add("remover")

        //RECUPERAR O ID
        let index = btnRemover.id

        //REMOVENDO TAREFA DO ARRAY (POSICAO INDEX DA TAREFA, QTD DE ELEMENTOS QUE QUERO REMOVER)
        listaTarefas.splice(index,1)

        //LISTAR AS TAREFAS NOVAMENTE

        setTimeout(function(){
            listarTarefas(listaTarefas, tagLista)
        },500)
        
    }

}
tagLista.addEventListener("click", removerTarefa)



