//NOME EDIT CSV

//                  0 1 2 3
let arrayNumeros = [1,2,3,5] // 4

function maiorNumero(numeros){
    
    //MEU MAIOR NUMERO
    let maiorNumero = 0
    
    for(let i = 0; i<numeros.length; i++){
        
        //NUMERO ATUAL ENCOTNRADO NO ARRAY
        let numeroAtual = numeros[i]

        //VERIFICÇÃO SE O NUMERO ATUAL(numeroAtual) 
        //É MAIOR QUE O NÚMERO QUE TENHO(maiorNumero)
        if(numeroAtual > maiorNumero){
            
            maiorNumero = numeroAtual

        }

    }

    return maiorNumero
}

// let numeroMaior  = maiorNumero(arrayNumeros)

// console.log(numeroMaior)



function contarNumeromax(maxNumber){
    let arrayNumeros = []
    for(let i = 0; i <= maxNumber; i++){

       
        arrayNumeros.push(i)
    }

    console.log(arrayNumeros)
}
contarNumeromax(10)




