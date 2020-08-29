/*2. Agora faça o contrário, um programa que receba uma 
temperatura em Fahrenheit e chame uma função que converta para Celsius.*/

const read=require("readline-sync")

const grau=parseInt(read.question("Digite a temperatura de hoje em Fahrenheit: "))

function calculoGrau(){
    
    return ((grau-32)/1.8)
}

console.log("A temperatura convertida para Celsius é "+calculoGrau().toFixed()+"°")