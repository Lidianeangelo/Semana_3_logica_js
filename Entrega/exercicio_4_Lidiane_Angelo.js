/*4. Crie uma função que receba um número e devolva uma soma progressiva. 
Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5.*/ 


const read=require("readline-sync")

let numero=parseInt(read.question("Digite a quantidade de latas compradas: "))

let somaTotal=0

function somar(numero){
    for(let contador = numero; contador<=numero; contador++){
        somaTotal+=numero

}
console.log(somar(numero))

