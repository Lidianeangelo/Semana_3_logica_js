/*1. Faça um programa que receba uma temperatura em Celsius 
e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32*/

const read=require("readline-sync")

const grau=parseInt(read.question("Digite a temperatura de hoje em Celsius: "))

function calculoGrau(){
    
    return ((grau*1.8)+32)
}

console.log("A temperatura convertida para Fahrenheit é "+calculoGrau().toFixed()+"°F")