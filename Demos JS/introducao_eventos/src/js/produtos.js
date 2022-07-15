const produtos = [
    {
        id:0,
        nome:"Limão Siciliano Kg",
        preco:12.76,
        departamento: "hortifruti",
        oferta:true,
        estoque: true,
        imgeUrl:"limao.webp"
    },
    {
        id:1,
        nome:"Maracujá Azedo Kg",
        preco:10.19,
        departamento: "hortifruti",
        oferta:false,
        estoque: true,
        imgeUrl:"Maracuja.webp"
    },
    {
        id:2,
        nome:"Laranja Bahia Importada Kg",
        preco:5.35,
        departamento: "hortifruti",
        oferta:false,
        estoque: true,
        imgeUrl:"Laranja.webp"
    },
    {
        id:3,
        nome:"Banana Caturra/Nanica Kg",
        preco:4.52,
        departamento: "hortifruti",
        oferta:false,
        estoque: true,
        imgeUrl:"banana.webp"
    },
    {
        id:4,
        nome:"Macarrão Parati Sêmola Parafuso 500g",
        preco:4.52,
        departamento:"massa",
        oferta:false,
        estoque: true,
        imgeUrl:"macarrao.png"
    },
    {
        nome:"Macarrão Galo Sêmola Espaguete nº8 500g",
        preco:4.42,
        departamento:"massa",
        oferta:false,
        estoque: true,
        imgeUrl:"macarrao2.webp"
    },
    {
        nome:"Macarrão Instantâneo Nissin Lámen Galinha Caipira 85g",
        preco:2.56,
        departamento:"massa",
        oferta:false,
        estoque: true,
        imgeUrl:"macarrao3.webp"
    },
    {
        nome:"Cup Noodles Nissin Galinha Caipira 69g",
        preco:5.14,
        departamento:"massa",
        oferta:false,
        estoque: true,
        imgeUrl:"nissin.webp"
    },
    {
        nome:"Água Mineral Ouro Fino com Gás 500ml",
        preco:1.95,
        departamento:"bebidas",
        oferta:false,
        estoque: true,
        imgeUrl:"agua.webp"
    },
    {
        nome:"Refrigerante Coca-Cola Sem Açúcar 200ml",
        preco:1.21,
        departamento:"bebidas",
        oferta:false,
        estoque: true,
        imgeUrl:"Refrigerante.webp"
    },
    {
        nome:"Refrigerante Antarctica Guaraná sem Açúcar Lata 350ml",
        preco:2.29,
        departamento:"bebidas",
        oferta:false,
        estoque: true,
        imgeUrl:"Refrigerante1.webp"
    },
    {
        nome:"Refrigerante Coca-Cola Sabor Original 220ml",
        preco:2.15,
        departamento:"bebidas",
        oferta:false,
        estoque: true,
        imgeUrl:"Refrigerante4.webp"
    },
    {
        nome:"Fone De Ouvido Jbl Tune 510 Bluetooth Preto Headphone",
        preco:259.15,
        precoPromocional:199.90,
        departamento:"informatica",
        oferta:true,
        estoque: true,
        imgeUrl:"2798222_1.webp"
    },
    {
        nome:"Mouse sem Fio Logitech USB M170, Preto",
        preco:59.90,
        precoPromocional:57.90,
        departamento:"informatica",
        oferta:true,
        estoque: true,
        imgeUrl:"97855124180.webp"
    },
    {
        nome:"Mouse Gamer Fortrek G Crusader RGB 7200DPI, Preto",
        preco:299.90,
        precoPromocional:59.90,
        departamento:"informatica",
        oferta:true,
        estoque: true,
        imgeUrl:"7898554606648.webp"
    },
    {
        nome:"Webcam Logitech C270 HD com 3MP Widescreen 720p",
        preco:215.90,
        precoPromocional:59.90,
        departamento:"informatica",
        oferta:false,
        estoque: true,
        imgeUrl:"webcan.webp"
    }
]




// let listaHTML = document.querySelector(".produtos")

// function listarProdutosTela(produtosList){

//     for(let i = 0; i<produtosList.length; i++){

//         let produto             = produtosList[i]
//         let imgUrlProduto       = produto.imgeUrl
//         let nomeProduto         = produto.nome
//         let precoProduto        = produto.preco
//         let departamentoProduto = produto.departamento
//         let idProduto           = produto.id
//         let oferta           = produto.oferta

//         let tagLi     = document.createElement("li")
//         let tagImg    = document.createElement("img")
//         let tagH2     = document.createElement("h2")
//         let tagH3     = document.createElement("h3")
//         let tagP      = document.createElement("p")
//         let tagButton = document.createElement("button")
        
//         //VERIFICANDO ORFERTA
//         if(oferta == true){
//             tagLi.classList.add("oferta")
//         }

//         tagImg.src          =  `./src/img/${imgUrlProduto}`
//         tagImg.alt          =  nomeProduto
//         tagH2.innerText     =  nomeProduto
//         tagP.innerText      =  `R$ ${precoProduto}`
//         tagButton.innerText =  "Comprar"  
//         tagButton.id        =  idProduto
//         tagH3.innerText     =  departamentoProduto

//         tagLi.appendChild(tagImg)
//         tagLi.appendChild(tagH2)
//         tagLi.appendChild(tagH3)
//         tagLi.appendChild(tagP)
//         tagLi.appendChild(tagButton)
        
//         listaHTML.appendChild(tagLi)
       
//     }

// }
// listarProdutosTela(produtos)



// let produtosFiltrado  = produtos.filter(function(produto){

//     if(produto.oferta == true){
//         return produto
//     }

// })

// console.log(produtosFiltrado)


{/* 

<li class="oferta">
    <img class="imagemProduto" src="./src/img/limao.webp" alt="Limão Siciliano Kg">
    <h2>Limão Siciliano Kg</h2>
    <h3>Informatica</h3>
    <p>R$ 12,76</p>
    <button id="0">Comprar</button>
</li> 
*/}