const exercicio01 = document.querySelector("#Ex01")
const exercicio02 = document.querySelector("#Ex02")
const exercicio03 = document.querySelector("#Ex03")
const exercicio04 = document.querySelector("#Ex04")
const exercicio05 = document.querySelector("#Ex05")
const exercicio06 = document.querySelector("#Ex06")
const exercicio07 = document.querySelector("#Ex07")
const exercicio08 = document.querySelector("#Ex08")
const exercicio09 = document.querySelector("#Ex09")
const exercicio10 = document.querySelector("#Ex10")
const exercicio11 = document.querySelector("#Ex11")
const exercicio12 = document.querySelector("#Ex12")
const exercicio13 = document.querySelector("#Ex13")
const exercicio14 = document.querySelector("#Ex14")
const exercicio15 = document.querySelector("#Ex15")

const res = document.querySelector(".res")

exercicio01.addEventListener("click", () => {
    /*Faça um programa que exiba os números de 1 a 10 usando o loop "while".*/

    let contadora = 1

    while (contadora <= 10) {
        res.innerHTML += contadora
        contadora++

    }
})

exercicio02.addEventListener("click", () => {

    /*Escreva um programa que calcule a soma dos números de 1 a 100 usando o loop "while".*/

    let numero = 1;
    let soma = 0;

    while (numero <= 100) {
        soma += numero
        numero++
    }

    res.innerHTML = `O resultado da soma ${soma}`

})

exercicio03.addEventListener("click", () => {

    /*Crie um programa que exiba os números pares de 1 a 50 usando o loop "while" */
    let contadora = 1

    while (contadora <= 50) {
        if (contadora % 2 == 0) {
            res.innerHTML += contadora
        }
        contadora++
    }

})

exercicio04.addEventListener("click", () => {

    /* Faça um programa que leia 5 números inteiros usando o loop "while" e exiba a média aritmética dos valores lidos */

    let contadora = 1
    let soma = 0
    let media = 0

    while (contadora <= 5) {
        const numero = Number(prompt(`Digite o ${contadora}° numero`))
        soma += numero
        contadora++
    }

    media = soma / 5
    res.innerHTML = media

})

exercicio05.addEventListener("click", () => {

    /* Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "while".*/

    const numero = parseInt(prompt("Digite um numero"))

    let contadora = 1

    while (contadora <= 10) {

        res.innerHTML += `<p>${numero} x ${contadora} = ${numero * contadora}</p>`
        contadora++

    }


})

exercicio06.addEventListener("click", () => {

    /*Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "while".*/
    let numero = parseInt(prompt("Digite um numero:"))
    let contadora = 1

    while (contadora <= numero) {
        if (numero % contadora == 0) {
            res.innerHTML += contadora + "</br>"

        }
        contadora++
    }

})

exercicio07.addEventListener("click", () => {

    // Faça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "while"

    let num = parseInt(prompt("Digite um número inteiro:"));
    let i = 2;
    let primo = true;

    while (i < num) {
        if (num % i == 0) {
            primo = false;
        }
        i++;
    }

    if (primo && num > 1) {
        alert("É primo");
    } else {
        alert("Não é primo");
    }

})

exercicio08.addEventListener("click", () => {

    //Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "while".

    let limite = parseInt(prompt("Digite um número inteiro:"));

    let a = 0;
    let b = 1;

    while (a <= limite) {
        alert(a); // mostra o número atual
        let proximo = a + b;
        a = b;
        b = proximo;
    }



})

exercicio09.addEventListener("click", () => {

    // Crie um programa que leia o nome e a idade de 5 pessoas usando o loop "while" e exiba a média das idades.

    let i = 1;
    let soma = 0;

    while (i <= 5) {
        let nome = prompt("Digite o nome da pessoa " + i + ":");
        let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
        soma += idade;
        i++;
    }

    let media = soma / 5;
    alert("A média das idades é: " + media);


})

exercicio10.addEventListener("click", () => {

    //Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "while".

    let a = 0;
    let b = 1;
    let i = 1;

    while (i <= 20) {
        alert(a);
        let proximo = a + b;
        a = b;
        b = proximo;
        i++;
    }
})


exercicio11.addEventListener("click", () => {

    //Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "while".

    let num = parseInt(prompt("Digite um número inteiro:"));
    let i = 1;
    let soma = 0;

    while (i <= num) {
        if (i % 2 === 0) {
            soma += i;
        }
        i++;
    }

    alert("A soma dos números pares entre 1 e " + num + " é: " + soma);


})

exercicio12.addEventListener("click", () => {
    //Crie um programa que exiba os números ímpares de 1 a 50 usando o loop "while"

    let i = 1;

    while (i <= 50) {
        if (i % 2 !== 0) {
            alert(i);
        }
        i++;
    }
})

exercicio13.addEventListener("click", () => {
    //Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "while".

    let num = prompt("Digite um número inteiro:");
    let i = 0;

    while (i < num.length) {
        alert(num[i]);
        i++;
    }

})

exercicio14.addEventListener("click", () => {
    //Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "while".

    let num = parseInt(prompt("Digite um número inteiro:"));
    let fatorial = 1;
    let i = num;

    while (i > 1) {
        fatorial *= i;
        i--;
    }

    alert("O fatorial de " + num + " é: " + fatorial);

})


exercicio15.addEventListener("click", () => {
    // Crie um programa que leia o nome e a idade de várias pessoas usando o loop "while" até que o nome "fim" seja informado. Ao final, exiba a média das idades.

    let soma = 0;
    let pessoas = 0;
    let nome = "";

    while (nome.toLowerCase() !== "fim") {
        nome = prompt("Digite o nome da pessoa (ou 'fim' para encerrar):");

        if (nome.toLowerCase() !== "fim") {
            let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
            soma += idade;
            pessoas++;
        }
    }

    if (pessoas > 0) {
        alert("A média das idades é: " + (soma / pessoas).toFixed(2));
    } else {
        alert("Nenhuma idade foi informada.");
    }

})