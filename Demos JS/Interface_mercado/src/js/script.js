
//LISTAR OS PRODUTOS
function listarProdutos(listaProdutos){
    
    //LOOP PARA PERCORRER OS PRODUTOS
    for(let i = 0; i<listaProdutos.length; i++){
        
        //ACESSANDOC ADA UM DOS PRODUTOS
        let produto = listaProdutos[i]

        //CRIANDO CARD DE PRODUTO
        let card    = criarCardProduto(produto)
        // lista.appendChild(card)
        // console.log(card)
       
    }

}
listarProdutos(produtos)



{/* <li>
    <img src="./src/img/limao.webp" alt="limao">
    <h2>Limão Siciliano Kg - Hortifruti</h2>
    <p>R$ 9,90</p>
    <button>Comprar</button>
</li> */}
function criarCardProduto(produto){

    //ACESSAR OS DADOS DO PRODUTO 
    let nome            = produto.nome
    let preco           = produto.preco
    let imgeUrl         = produto.imgeUrl
    
    //CRIANDO ELEMENTOS
    let li = document.createElement("li")

   
    return li
}