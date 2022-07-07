const arrays = ["Java Script", "PHP", "Node", "Java", "React","Vue", "Jest", "TDD"]

//1) PERCORRER ESSA LISTA => ARRAY => loop for 
//2) CRIAR UM LI PARA CADA UMA DAS LINGUAGENS 
//3) ALIMENTAR ESSE LI => JAVA
//4) PENDURAR EM UMA REFERENCIA => UL


let lista = document.querySelector(".linguagens")
console.log(lista)
for(let i = 0; i<arrays.length; i++){

    //SELECIONANDO LINGUAGEM
    let linguagem = arrays[i]

    //CRIANDO LI
    let li = document.createElement("li")
    let imagem = document.createElement("img")
    let strong = document.createElement("strong")

    strong.innerText = linguagem
    imagem.src = "./src/img/js.png"
    imagem.alt = linguagem

    if(linguagem == "PHP"){
        item.classList.add("destacar")
    }
   

    li.appendChild(imagem)
    li.appendChild(strong)
    lista.appendChild(li)

    //ELEMENTOPAI.appendChild(ELEMENTOFILHO)
    


//     let strong = document.createElement("strong")

//     if(linguagem == "React"){
//         item.classList.add("destacar")
//     }

//     //ALIMENTEI COM INFORMAÇÕES 
//     item.innerText = `${linguagem}`
//    // item.innerHTML = `<strong> ${linguagem} </strong>`



//     lista.appendChild(item)
}









//CRIANDO ELEMENTOS NO PELO JS

//1) CRIANDO ELEMENTO => LI
// let li = document.createElement("li")

// //2) ATRIBUIR UM VALOR PRA O ELEMENTO 
// li.innerText = "Java Script"

// //3) SELECIONADO REFERENCIA NO HTML
// let lista = document.querySelector(".linguagens")

// //4) PENDURAR O LI NA LISTA
// lista.appendChild(li)


