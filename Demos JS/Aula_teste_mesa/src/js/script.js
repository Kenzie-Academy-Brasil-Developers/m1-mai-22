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




//UNIDIMIENSIONAL 
let array = [1,2,3,4]

//BIDIMENSIONAL
let array2  = [[],[],[]]

//MULTIDIMENSIONAL
let array3 = [
    [[]],[[]],[[]],[[]],
    [[]],[[]],[[]],[[]],
]

//ARRAY DE NOTAS 
const arrayNotas = [
    [90,30,10,20],
    [30,50,60,70],
    [56,34,40,50],
    [67,76,45,67],
]

console.table(arrayNotas)

//0) ACESSAR
//1) ADICIONAR 
//2) SUBSTITUIR

//ACESSAR COLUNA
// for(let i = 0; i < arrayNotas.length;i++){
//     console.log(arrayNotas[i][1])
// }


//ACESSAR COLUNA VERTICAL
for(let i = 0; i < arrayNotas.length;i++){
    console.log(arrayNotas[i][i])
}