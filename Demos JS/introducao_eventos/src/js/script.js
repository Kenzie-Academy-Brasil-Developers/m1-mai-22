
let secaoProdutos = document.querySelector(".produtos")
let secaoCarrinho = document.querySelector(".carrinho ul")


//********************************** */
    //LISTAR OS PRODUTOS//
//********************************** */
function listarProdutos(listaProdutos, secao){

    //ANTES DE LISTAR QUALQUER PRODUTO => PRECISO GARANTIR QUE MINHA VITRINE VAI ESTAR VAZIA
    secao.innerHTML = ""
    
    //LOOP PARA PERCORRER OS PRODUTOS
    for(let i = 0; i<listaProdutos.length; i++){
        
        //ACESSANDO CADA UM DOS PRODUTOS
        let produto = listaProdutos[i]

        //CRIANDO CARD DE PRODUTO => PASSO A RESPONSABILIDADE PARA OUTRA FUNÇÃO
        let cardProduto    = criarCardProduto(produto)
    
        //PENDURANDO O CARD DE PRODUTO NA LISTA => HTML
        secao.appendChild(cardProduto)

    }
   
}
listarProdutos(produtos, secaoProdutos)



//********************************** */
    //CRIANDO O CARD DE PRODUTO//
//********************************** */
function criarCardProduto(produto){

    //1) ACESSAR OS DADOS DO PRODUTO 
    let nome            = produto.nome
    let preco           = produto.preco
    let imgeUrl         = produto.imgeUrl
    let oferta          = produto.oferta
    let id              = produto.id
  
    //2) CRIANDO ELEMENTOS
    let tagLi       = document.createElement("li")
    let tagImge     = document.createElement("img")
    let tagNome     = document.createElement("h2")
    let tagPreco    = document.createElement("p")
    let btnComprar  = document.createElement("button")
   
    //ADICIONANDO ID NO BOTÃO
    if(id != undefined){

        btnComprar.id =  id
    }

    tagImge.classList.add("imagemProduto")
    
    //VERIFICANDO ORFERTA
    if(oferta == true){
        tagLi.classList.add("oferta")
    }

    //3) ALIMENTAR ESSAS TEGAS COM AS INFORMAÇÕES 
    tagImge.src          = `./src/img/${imgeUrl}`
    tagImge.alt          = nome
    tagNome.innerText    = nome
    tagPreco.innerText   = `R$ ${preco}`.replace(".",",")
    btnComprar.innerText = "Comprar"
  
    //4) MONTANDO O TEMPLATE
    tagLi.appendChild(tagImge)
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagPreco)
    tagLi.appendChild(btnComprar)

    //ALTERNATIVA
    // tagLi.append(tagImge,tagNome,tagPreco,btnComprar)
    //5) RETORNANDO O TEMPLATE MONTADO
    return tagLi
}

//*************************************** */
    //ADICIONAR PRODUTOS NO CARRINHO//
//********************* ******************/
secaoProdutos.addEventListener("click", interceptandoProduto)

let carrinhoCompras = []

//CRIAR UM ARRAY DE CARRINHO 
//RECEBER ESSES PRODUTOS
function interceptandoProduto(event){

    let btnComprar  = event.target
    
    if(btnComprar.tagName == "BUTTON"){

        //IDENTIFICANDO PRODUTO PELO (ID)
        let idProduto = btnComprar.id

        //VERIFICANDO SE PRODUDO ESTÁ NA BASE
        let produto = produtos.find(function(produto){

            if(produto.id == idProduto && produto.estoque == true){
                return produto
            }
            
        })

        //FUNÇÃO ADICIONAR PRODUTO NO CARRINHO
        adicionarCarrinho(produto)

    }

}

//FUNÇÃO ADICIONAR PRODUTO NO CARRINHO
function adicionarCarrinho(produto){

    if(produto !== undefined){
        carrinhoCompras.push(produto)

        listarProdutos(carrinhoCompras,secaoCarrinho)
    }
 
}

//
function removerProdutoCarrinho(){
    //INTERCEPTAR O CLIQUE NO CARRINHO => addEventListener
    //IDENTIFICAR O PRODUTO
    //ENCONTRAR ESSE PRODUTO DENTRO DO CARRINHO => carrinhoCompras
    //ENCONTRAR O INDEX => indexOf 
    //APLICAR O SPLICE 
    //LISTAR NOVAMENTE NA SEÇÃO CARRINHO => listarProdutos(carrinhoCompras,secaoCarrinho)
}


// function adicionarProdutoCarrinho(event){

//     //event.target => QUEM RECEBEU O CLIQUE(EVENTO)
//     //event.currentTarget => QUEM ESTÁ COM O addEventListener(INTERCEPTADOR)

//     let btnComprar  = event.target
    
//     //VERIFICANDO SE O CLIQUE FOI EM UM BOTÃO => PELA PROPRIEDADE TAGNAME 
//     if(btnComprar.tagName == "BUTTON"){
      
        
//        let produto  = btnComprar.closest("li").cloneNode(true)
//        carrinho.appendChild(produto)

//     }

// }






//********************* */
    //PESQUISA//
//********************* */
// ÁREA DE PESQUISA 
let inputBusca  = document.querySelector(".campoBusca input")
let btnBusca    = document.querySelector(".campoBusca button")

btnBusca.addEventListener("click", function(){
    
    //RECEBENDO O VALOR DO USUÁRIO
    let pesquisaUsuario = inputBusca.value

    //PASSANDO PARA FAZER A BUSCA 
    let resultadoBusca  = busca(pesquisaUsuario)

    //LISTAR NA TELA
    listarProdutos(resultadoBusca, secaoProdutos)

})

function busca(valorPesquisa){
    
    let resultBusca = []

    for(let i = 0; i<produtos.length; i++){
        
        if(valorPesquisa == produtos[i].nome){
            
            resultBusca.push(produtos[i])
        
        }
    }

    return resultBusca
}











