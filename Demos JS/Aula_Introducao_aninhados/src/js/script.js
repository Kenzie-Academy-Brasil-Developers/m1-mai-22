//UNIDIMENSIONAL 
let array = [1,2,3,4,56]

//BIDIMENSIONAL
let arra1 = [[],[],[],[]]

//MULTIDIMENSIONAL
let array1 = [
    [[]],
    [[]],
    [[]],
    [[]]
]



//ARRAY NOTAS
let aluno2 = [90,45,56,87]

let arraysNotas = [
//  P   M  E.D L.G
    [100,45,56,87, 100], //ALUNO 1 
    [89,87,67,89, 100], //ALUNO 2 
    [65,45,43,65], //ALUNO 3 
    [56,87,76,34], //ALUNO 4 
]

arraysNotas.push
// arrayNotas[0][7] = 100


//arraysNotas[i[2]]

// -ARRAY de ALUNO[0] 
// --ARRAY NOTAS[1]
//0) ACESSAR 
//1) ADICIONAR
//2) SUBSTITUIR 

//
function retornarNotavermelha(){
   
    for(let linha = 0; linha<arraysNotas.length; linha++){

        let arrayNotasVermelhas = [[],[]] 
        console.log(`----- Aluno ${linha}----`)
       
    
        for(let colunas = 0; colunas < arraysNotas[linha].length; colunas++){
    
            let nota  = arraysNotas[linha][colunas]
            if(nota < 60){

                arrayNotasVermelhas.push(nota)
              
               
    
            }
    
        }
    
    }
    return arrayNotasVermelhas
}

//console.log(retornarNotavermelha())






let teste = []
teste[9] = 10
teste.push(12)
console.log(teste)