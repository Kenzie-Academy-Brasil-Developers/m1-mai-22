
// let secaoProdutos = document.querySelector(".produtos")

// //LISTAR OS PRODUTOS
// function listarProdutos(listaProdutos){

//     //LOOP PARA PERCORRER OS PRODUTOS
//     for(let i = 0; i<listaProdutos.length; i++){
        
//         //ACESSANDO CADA UM DOS PRODUTOS
//         let produto = listaProdutos[i]

//         //CRIANDO CARD DE PRODUTO => PASSO A RESPONSABILIDADE PARA OUTRA FUNÇÃO
//         let cardProduto    = criarCardProduto(produto)
    
//         //PENDURANDO O CARD DE PRODUTO NA LISTA => HTML
//         secaoProdutos.appendChild(cardProduto)

//     }
   
// }
// listarProdutos(produtos)

let vitrineHortifruti   = document.querySelector(".hortifruti")
let vitrineMassa        = document.querySelector(".massa")
let vitrineBebidas      = document.querySelector(".bebidas")
let vitrineInformatica  = document.querySelector(".informatica")

//LISTAR OS PRODUTOS
function listarProdutos(listaProdutos, departamentoVitrine, vitrine){

    //LOOP PARA PERCORRER OS PRODUTOS
    for(let i = 0; i<listaProdutos.length; i++){
        
        let produto             = listaProdutos[i]
        let departamentoProduto = produto.departamento
        
        //VERIFICANDO DEPARTAMENTO
        if(departamentoProduto == departamentoVitrine){
            let cardProduto    = criarCardProduto(produto)
            vitrine.appendChild(cardProduto)
        }
    }
   
}
listarProdutos(produtos, "hortifruti", vitrineHortifruti)
listarProdutos(produtos, "massa", vitrineMassa)
listarProdutos(produtos, "bebidas", vitrineBebidas)
listarProdutos(produtos, "informatica", vitrineInformatica)



//1) PRODUTO
//2) INFORMAÇÕES DESSE PRODUTO
//3) UM MODELO DE TEMPLATE 
    //A) TAG LI 
    //B) TAG IMAGEM 
    //C) TAG P => PREÇO
    //D) BUTTON => COMPRAR 
//4) CONSTRUIR O CARD 
//5) RETORNAR ESSE CARD PARA FUNÇÃO "LISTARPRODUTOS" 

function criarCardProduto(produto){

    //1) ACESSAR OS DADOS DO PRODUTO 
    let nome            = produto.nome
    let preco           = produto.preco
    let imgeUrl         = produto.imgeUrl
    let oferta          = produto.oferta
  
    //2) CRIANDO ELEMENTOS
    let tagLi       = document.createElement("li")
    let tagImge     = document.createElement("img")
    let tagNome     = document.createElement("h2")
    let tagPreco    = document.createElement("p")
    let btnComprar  = document.createElement("button")
    
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

// <!-- <li>
//  <img src="./src/img/limao.webp" alt="limao">
//  <h2>Limão Siciliano Kg - Hortifruti</h2>
//  <p>R$ 9,90</p>
//  <button>Comprar</button>
// </li> -->









