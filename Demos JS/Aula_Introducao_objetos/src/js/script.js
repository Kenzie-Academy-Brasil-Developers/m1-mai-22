//PESSOA

// let nome = "Hudson"
// let idade = "25"
// let profissao = "Front-end"

//ARRAY 
// let pessoas = ["Hudson", "25", "Front-end"]
//console.log(pessoas)



//DECLARANDO UM OBJETO
// let hudson = {
//     nome: "Hudson",
//     idade: 25,
//     profissao:"Front-end",
//     empresa: "Kenzie Academy",
//     ativo: false,
//     modulos: ["M1","M2","M3"]
// }


//DECLARANDO UM OBJETO
let hudson = {
    nome:"Hudson",
    sobrenome:"Carolino",
    idade: "31/10/1996",
    cpf:"108.266.49.36",
    ativo: true,
    modulos:["M1", "M2", "M3"]
}

//CONVERTE OS VALORES DO OBJETO PARA UMA ARRAY
//console.log(Object.values(hudson))


//ACESSANDO VALORES
//console.log(`Meu nome é ${hudson.nome} ${hudson.sobrenome}`)

// console.log(hudson.idade)
// console.log(hudson.modulos)
// console.log(hudson.cpf)
// console.log(hudson["cpf"])




let produto  = {
    nome:"Camiseta",
    preco:29.90,
    categorias: ["sportes", "Casual"],
    tamanhos:["P","M","G"]
}

//for(propriedade in objeto)
for(let chave in produto){
  
    //console.log(produto[chave])

    // if(chave == "categorias"){
    //     for(let i = 0; i < produto.categorias.length; i++){
            
    //         console.log(produto.categorias[i])
    //     }
    // }

}



// let jogador = {
//     nome:"Jogador 1",
//     posicaoX:{x:10}, 
//     posicaoY:{y:10},
//     vida:100
// }

// jogador.nome




//METODO x FUNÇÃO 

// let pessoa = {
//     nome:"Hudson",
//     sobrenome:"Carolino",
//     idade:20,

//     falarNomecompleto(){

//         console.log(`Meu nome completo é ${this.nome} ${this.sobrenome}`)
        
//     }
// }

// pessoa.nome
// pessoa.falarNomecompleto()




// let listaTarefas = {
//     tarefas:[],

//     adicionarTarefa(tarefa){

//         if(tarefa.trim() !== ""){
//             this.tarefas.push(tarefa)
//         }
        
//     },

//     removerTarefa(tarefa){

//         let index = this.tarefas.indexOf(tarefa)
//         this.tarefas.splice(index, 1)

//     },

// }

// listaTarefas.adicionarTarefa("Limpar a casa")
// listaTarefas.adicionarTarefa("Estudar Js")


// console.log(listaTarefas)


function pessoa(nome, idade, cpf){

    let novaPessoa = {
        nome:nome,
        idade:idade,
        cpf:cpf,
       
    }

    return novaPessoa
}

//CONSTRUINDO OBJETO
function Frutas(nome, frutas, cpf){
    
    //RETORNANDO UM OBJETO
    return {
        nome:nome,
        idade:idade,
        cpf:cpf,
        categorias: []
    }
}

function Pessoa(nome, idade, cpf){
    
    //RETORNANDO UM OBJETO
    return {
        nome:nome,
        idade:idade,
        cpf:cpf,
        sexo:"M"
        
    }
}

Pessoa()






let secaoFrutas = []
let secaoBedias = []





//ARRAY DE PRODUTOS => OBJETOS
let listasProdutos  = [
    {
       "id":1,
       "name":"Jaleco",
       "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 999,99",
       "estoque":false,
    },
    {
       "id":2,
       "name":"Avental",
       "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 999,99",
       "estoque":true
    },
    {
       "id":3,
       "name":"Touca",
       "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 999,99",
       "estoque":true
    },
    {
       "id":4,
       "name":"Fronha",
       "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 999,99",
       "estoque":false
    },
    {
       "id":5,
       "name":"Embalagem",
       "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 999,99",
       "estoque":true
    },
    {
       "id":6,
       "name":"Porta talher",
       "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 999,99",
       "estoque":false
    },
    {
       "id":7,
       "name":"Porta absorvente",
       "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 999,99",
       "estoque":true
    }
 ]


//  function listarProdutos(){
//     for(let i  = 0; i < listasProdutos.length; i++){

//         let produto =  listasProdutos[i]
//         console.log(`Produto nome: ${produto.name}`)
//         console.log(`Produto descrição: ${produto.description}`)
//         console.log(`Produto preço: ${produto.price}`)
//         console.log("---------------------")
//     }
//  }
 //listarProdutos()


 function pesquisarProdutoId(idPesquisa){

    for(let i  = 0; i < listasProdutos.length; i++){

        let produto = listasProdutos[i]

        if(produto.id == idPesquisa){
            return  produto
        }
        
    }

 }
let resultadoBUscar =  pesquisarProdutoId(1)

//console.log(resultadoBUscar)


function retornarProdutosForaEstoque(arrayProdutos){

    let produtosFiltrados = []

    for(let i  = 0; i < arrayProdutos.length; i++){

        let produto = arrayProdutos[i]

        if(produto.estoque == false){
            produtosFiltrados.push(produto.name)
        }

    }

    return produtosFiltrados
}

let produtosEstoqueFiltrado =retornarProdutosForaEstoque(listasProdutos)

//console.log(produtosEstoqueFiltrado)


const pessoa2 ={

    nome: "Hudson"
}

delete pessoa2.nome