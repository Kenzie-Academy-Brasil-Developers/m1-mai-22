//MÉTODOS DE STRING

//toLowerCase() => RETORNA UMA NOVA STRING convertido em letras minúsculas.
//toUpperCase() => RETORNA UMA NOVA STRING convertido em letras maiúsculas.

const nome = "Hudson"
const nomeFormatado = nome.toLowerCase()

// console.log(nome)
// console.log(nomeFormatado)

//trim()
const senha = "  12334  "
const senhaFormatada = senha.trim()

// console.log(senha)
// console.log(senhaFormatada)

//replace / replaceAll()
const cpf = "108.266.049-23"
const cpfFormatado  = cpf.replaceAll(".","").replace("-", "")


//split
let nomes = "Hudson, Gabriel, Renato, João, Eduardo"
const listaNomes = nomes.split(",")

// console.log(nomes)
// console.log(listaNomes)

//includes
// const email = "hudson@gmail.com"

// if(email.includes("@") == true){

//     console.log("E-mail valido")


// }

//slice()

//"Hudson".slice(3,-2)  => s

// function verificarBanjo(nome,sobrenome){

//     let novoNome = nome.toLowerCase()
//     let novoSobrenome= sobrenome.toLowerCase()

//     if(novoNome[0] == "s" || novoSobrenome[0]== "s"){
//         return "Está tocando banjo"
//     }

//     return "Não está tocando banjo"

// }


