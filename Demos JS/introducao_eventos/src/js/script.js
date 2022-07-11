
let secaoProdutos = document.querySelector(".produtos")

//LISTAR OS PRODUTOS
function listarProdutos(listaProdutos){

    //ANTES DE LISTAR QUALQUER PRODUTO => PRECISO GARANTIR QUE MINHA VITRINE VAI ESTAR VAZIA
    secaoProdutos.innerHTML = ""
    
    //LOOP PARA PERCORRER OS PRODUTOS
    for(let i = 0; i<listaProdutos.length; i++){
        
        //ACESSANDO CADA UM DOS PRODUTOS
        let produto = listaProdutos[i]

        //CRIANDO CARD DE PRODUTO => PASSO A RESPONSABILIDADE PARA OUTRA FUNÇÃO
        let cardProduto    = criarCardProduto(produto)
    
        //PENDURANDO O CARD DE PRODUTO NA LISTA => HTML
        secaoProdutos.appendChild(cardProduto)

    }
   
}
listarProdutos(produtos)


//CRIANDO O CARD DE PRODUTO
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


// ÁREA DE PESQUISA 
let inputBusca  = document.querySelector(".campoBusca input")
let btnBusca    = document.querySelector(".campoBusca button")

//1) interceptar o clique no button
//2) pegar as informações digitadas pelo usuário(pesquisa)
//3) preciso fazer uma busca no array do produto
//4) Preciso retornar esse produto na tela 

btnBusca.addEventListener("click", function(){
    
    //RECEBENDO O VALOR DO USUÁRIO
    let pesquisaUsuario = inputBusca.value

    //PASSANDO PARA FAZER A BUSCA 
    let resultadoBusca  = busca(pesquisaUsuario)

    //LISTAR NA TELA
    listarProdutos(resultadoBusca)

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











