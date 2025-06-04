var num1;
var num2;
var total;

function entrada(){
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
}

function converter(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
}

function somar(){
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    
    total = num1 + num2;
    tela = document.getElementById("resultado");
    tela.innerHTML = total;
}

function subtrair(){
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    total = num1 - num2;
    tela = document.getElementById("resultado");
    tela.innerHTML = total;
}

function multiplicar(){
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    
    total = num1 * num2;
    tela = document.getElementById("resultado");
    tela.innerHTML = total;
}

function dividir(){
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    
    total = num1 / num2;
    tela = document.getElementById("resultado");
    tela.innerHTML = total;
}

function limpar(){
    num1 = document.getElementById("n1").value="";
    num2 = document.getElementById("n2").value="";
    tela = document.getElementById("resultado");
    tela.innerHTML = "";
}