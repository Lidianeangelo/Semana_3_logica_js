/*4. Crie uma função que receba um número e devolva uma soma progressiva. 
Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5.*/ 


const read=require("readline-sync")

const numero=parseInt(read.question("Digite a quantidade de latas compradas: "))

function soma(){
    return (numero+1)*5
}
console.log(soma())