/*1. Faça um programa que receba uma temperatura em Celsius 
e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32*/

const read=require("readline-sync")

const grau=parseInt(read.question("Digite a temperatura de hoje: "))

function calculoGrau(){
    return ((9*grau)/5)+32
}

console.log(calculoGrau().toFixed()+"°F")