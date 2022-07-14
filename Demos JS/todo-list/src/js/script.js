//SELECIONADO ELEMENTOS
let inputText       = document.querySelector(".inputText")
let btnAdicionar    = document.querySelector(".btnAdicionar")
let tagLista        = document.querySelector(".lista")
let filtroTarefas   = document.getElementById("filtroTarefas") 

//LISTA DE TAREFAS
const listaTarefas = [
    {nome:"Terefa Modelo", status: false},
    {nome:"Terefa Modelo concluida", status: true},
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
function listarTarefas(arrayTarefas, tagLista, statusFiltro = false){
    
    //Limpar lista ⇒ inner.HTML
   tagLista.innerText = ""
   
    //Executar loop para recuperar cada uma das tarefas (for / forEach)
    for(let i = 0; i<arrayTarefas.length; i++){
        
        //RECUPERANDO TAREFA DO ARRAY
        let tarefa = arrayTarefas[i]

        //LISTAR TAREFAS A PARTIR DO STATUS
        if(tarefa.status == statusFiltro){
            
            //RECUPERANDO TEMPLATE MONTADO
            let templateTarefa = montarTemplate(tarefa, i)
            
            //ADICIONANDO TEMPLATE PRONTO NA LISTA (HTML => UL)
            tagLista.appendChild(templateTarefa)
        }
    }
    
    // arrayTarefas.forEach(function(tarefa, index){
    //     let templateTarefa = montarTemplate(tarefa, index)
    //     tagLista.appendChild(templateTarefa)
    // });
    
}
//LISTANDO TAREFAS ADICIONADAS
listarTarefas(listaTarefas, tagLista)

//MONTANDO TEMPLATE PARA CADA TAREFA
function montarTemplate(tarefa, index){
   
    //CRIANDO TAG LI
    let tagLi  = document.createElement("li")
    let status = tarefa.status

    if(status){
        tagLi.classList.add("concluida")
    }
    
    //ALIMENTANDO A TAG 
    tagLi.innerHTML = `
        <h2>${tarefa.nome}</h2>
        <button id="${index}">X</button>
    ` 

    //RETORNANDO LI
    return tagLi

}

//REMOVER TAREFA 
function concluirTarefa(event){

    //INTERCEPTANDO BOTÃO (REMOÇÃO)
    let btnRemover = event.target

    //VERIFICANDO SE É UM BUTTON
    if(btnRemover.tagName == "BUTTON"){

        //RECUPERAR O ID
        let index = btnRemover.id

        listaTarefas[index].status = true
        
        //listaTarefas.splice(index,1)

        listarTarefas(listaTarefas, tagLista)
        
    }

}
tagLista.addEventListener("click", concluirTarefa)

let statusFiltro = false
function filtrarTarefa(){

    statusFiltro = !statusFiltro

    if(statusFiltro){
        filtroTarefas.innerText = "Tarefas concluidas"
    }

    filtroTarefas.innerText = "Tarefas não concluidas"
    listarTarefas(listaTarefas, tagLista, statusFiltro)

}
filtroTarefas.addEventListener("click", filtrarTarefa)

