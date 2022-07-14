
const body = document.querySelector("body")
const main = document.createElement("main")
const h1 = document.createElement("h1")
const section = document.createElement("section")
const header = document.createElement("header")
const tagPItem = document.createElement("p")
const tagPTValor = document.createElement("p")

h1.innerText = "Título"
main.appendChild(h1)

section.appendChild(header)

header.appendChild(tagPItem)
header.appendChild(tagPTValor)


main.appendChild(section)


body.appendChild(main)









// //SELECIONADO ELEMENTOS
// let inputText       = document.querySelector(".inputText")
// let form    = document.querySelector("form")
// let tagLista        = document.querySelector(".lista")
// let filtroTarefas   = document.getElementById("filtroTarefas") 

// //LISTA DE TAREFAS
// const listaTarefas = [
//     {nome:"Terefa Modelo", status: false},
//     {nome:"Terefa Modelo concluida", status: true},
// ]

// //FUNÇÃO ADICIONAR TAREFAS
// function adicionarTarefa(event){

//     event.preventDefault()
    
//     let formulario  = event.currentTarget
//     console.log(event.currentTarget[0].value)
//     console.log(event.currentTarget[1].value)
//     console.log(event.currentTarget[2].value)

    

//     //Recuperar valor digitado no campo (input)
//     // let textValue = inputText.value.trim()

//     // //Validar campo se o campo está vazio ⇒ trim()
//     // if(textValue !== ""){

//     //     //Modelagem da tarefa
//     //     const novatarefa = {}

//     //     novatarefa.nome   = textValue
//     //     novatarefa.status = false

//     //     //Adicionar tarefa no início ou final do array?
//     //     //listaTarefas.push(novatarefa)
//     //     listaTarefas.unshift(novatarefa)

//     //     //LISTANDO TAREFAS ADICIONADAS
//     //     listarTarefas(listaTarefas, tagLista)
        
//     //     //LIMPAR O CAMPO 
//     //     inputText.value = ""
//     // }

// }
// form.addEventListener("submit", adicionarTarefa)









const carrinho = [
    {
        nome: "produto 1",
        preco: 10,

    },
    {
        nome: "produto 2",
        preco: 20,

    },
    {
        nome: "produto 3",
        preco: 25,

    }
]

let total = 0
carrinho.forEach(function(produto){
   
    total += produto.preco

})

function somarTotal(){

    let total = 0
    for(let i = 0 ; i <carrinho.length;i++){
        total += carrinho[i].preco
    }
    return total
}


function adicionarProduto(){


    somarTotal()
}


function removerProduto(){


    somarTotal()
}






// //arraytarefas = [1,2,3,4,5]


// //template.innterHTML = ""
// //TEMPLATE VISUAL TAG HTML
// //1
// //2
// //3,4,5