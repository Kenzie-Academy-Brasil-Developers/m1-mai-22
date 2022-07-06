//(DOM) Document Object Model => Modelo de objeto de documento

//window
//document => documento html

//SELETORES

//SELETOR MAIS GENÉRICO => POSSO UTILIZAR QUALQUER SELETOR (CSS)

//POR ID
//document.querySelector("#titulo")

//POR CLASSNAME
//document.querySelector(".tituloPrincipal")

//POR TAGNAME
//document.querySelector("h1")

//TIPO RETORNO => UMA COLEÇÃO 
//document.querySelectorAll("li")

// SELECIONAR ELEMENTO PELO ID
//document.getElementById("titulo")

//SELECIONAR MAIS DE UM ELEMENTO PELO NOME DA TAG => RETORNA UMA COLEÇÃO
//document.getElementsByTagName("li")



//let tituloPrincipal = document.querySelector("h1")

// //console.log(tituloPrincipal)
// console.dir(tituloPrincipal.className)
// console.dir(tituloPrincipal.id)

// tituloPrincipal.innerText = "Hudson"
// console.dir(tituloPrincipal.innerText)


// let img  = document.querySelector(".imagem")

// console.dir(img.alt)
// console.dir(img.src)
// console.dir(img.id)
// console.dir(img.className)


let ps = document.querySelectorAll("p")

console.log(ps)

for(let i  = 0;  i<ps.length; i++){

    let p  = ps[i]

    if(p.className == "text-center"){
        p.innerText = "Hudson"
    }
    
}

//QUAIS PROPRIEDADES PODEMOS ALTERAR
//console.dir()
//innerText
//className
//alt
//id
//src

//ADICIONANDO E REMOVENDO CLASSES
let h2 = document.querySelector("h2")
console.dir(h2)
//h2.classList.add("novaClasse")
//h2.classList.remove()

 