
//---- CONDICIONAIS------//

//IDADE
// let idade = 20

// // //SE idade >= 18 => "Atingiu maior idade"
// if(idade >= 18){
    
//     console.log("Atingiu maior idade")

// //SENÃO
// }else{
//     console.log("Não atingiu maior idade")
// }







// let usuario = "Abner"
// let senha   = "12345"


//     //TRUE                                                  TRUE
// if((usuario == "Hudson" || usuario == "Abner") && senha == "12345"){


//     console.log("Login com sucesso")

//     if(usuario == "Hudson"){

//         console.log("Admin")
        
//     }
    
// }else{

//     console.log("Dados incorretos")
// }



//RECEBENDO DADOS DO USUÁRIO
// let num1 = prompt("Digite o primeiro número")
// let num2 = prompt("Digite o segundo número")

// let resultado  = 0


// if(num1 > 0 && num2 > 0){
    
//     //CONVERTER DADOS PARA INTEIROS
//     resultado = Number(num1) +  Number(num2)
//     alert(`O resultado dessa operação é: ${resultado}`)

// }else{

//     alert("Numeros são menores que 0")
// }



// +    => SOMA 
// -    => SUBTRAÇÃO 
// *    => MULTIPLICAÇÃO 
// /    => DIVISÃO
// ++ / +=   => INCREMENTO 
// -- / -=   => DECREMENTO

// let numero = 3
// console.log(numero)

// numero -= 1
// console.log(numero)

// numero -= 1
// console.log(numero)

// numero -= 1
// console.log(numero)





//EXEMPLO CALCULADORA



    //(+)
    //resultado = Number(num1) +  Number(num2)
    //(-)
    //resultado = Number(num1) -  Number(num2)
    //(*)
    //resultado = Number(num1) *  Number(num2)
    //(/)
    //resultado = Number(num1) /  Number(num2)

//5) ARMAZENAR O RESULTADO/ E MOSTRAR PARA O USUÁRIO

//RECUPERANDO DADOS DO USUÁRIO
//1) OPERAÇÃO
// let operacao = prompt("Digite a operação (+/-/*)")
// //2) PRIMEIRO NUMERO 
// let numero1 = prompt("Digite o primeiro numero")
// //3) SEGUNDO  NUMERO
// let numero2 = prompt("Digite o segundo numero")
// let resultado = 0

// //4) FAZER UMA VERIFICAÇÃO => OPERAÇÃO
// if(operacao == "+"){

//     resultado = Number(numero1) + Number(numero2)

// } 

// if(operacao == "-"){

//     resultado = Number(numero1) - Number(numero2)

// }

// if(operacao == "*"){

//     resultado = Number(numero1) * Number(numero2)

// }

// if(operacao == "/"){

//     resultado = Number(numero1) / Number(numero2)

// }else{
//     alert(`Operação não encontrada: ${operacao}`)
// }
// alert(`O resultado da operação é: ${resultado}`)


//FUNÇÕES
//IDADE
//VERIFICAÇÃO
//RETURN 
//DECLARAÇÃO
function verificaMaiorIdade(idade){
  
   
    if(idade >= 18){
        
        return "Atingiu maior idade"

    }
 
    
    return "Não atingiu maior idade"
    
}

//CHAMADA DE FUNÇÃO






