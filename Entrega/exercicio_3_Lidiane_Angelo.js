/*Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.*/

const read=require("readline-sync")
const metros=read.question("Digite, em metros, o tamanho da sala: ")

function converter(){
    return metros*1000
}
console.log("O tamanho da sua sala em milímetros é "+converter()+" mm.")
