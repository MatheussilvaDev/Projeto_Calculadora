

function soma(n1, n2) {
    var soma = Number(n1) + Number(n2);
    return soma;
}

function sub(n1, n2) {
    var sub = n1 - n2;
    return sub;
}
function div(n1, n2) {
    var div = n1 / n2;
    return div;
}
function sub(n1, n2) {
    var sub = n1 * n2;
    return sub;
}



var n1, n, n2, operator, result;

//Pega os numeros digitados, atribui para n1 e n2 da equação
function conta(numeral) {

    if (operator == null) {
        document.querySelector('.output').innerHTML = "";
        n1 = 0;

        let num = numeral;
        let conca1 = document.querySelector('.output').innerHTML;
        var conca2 = document.querySelector('.output').innerHTML = conca1 + num;
        n1 = Number(conca2);
        console.log("n1: " + n1);


    } else {

        let num = numeral;

        let conca1 = document.querySelector('.output').innerHTML;
        var conca2 = document.querySelector('.output').innerHTML = conca1 + num;
        n2 = Number(conca2)
        console.log("n2: " + n2);
    }


}
//transforma o numero em negativo ou poositivo multiplicando por -1
function maisOuMenos(){
    let display = Number(document.querySelector('.output').innerHTML) * (-1);
    console.log(display);
    document.querySelector('.output').innerHTML = display;
    if (operator == null) {
        n1 = display;
        console.log("N1 negativo" + n1);
    }else{
        n2=display;
        console.log("N2 negativo" + n2);
    }
    
}
function del() {
    let del = String(document.querySelector('.output').innerHTML);
    result = document.querySelector('.output').innerHTML = Number(del.slice(0, del.length - 1));
    console.log(result);

    if (result == '0') {
        n1 = 0;
        n2 = 0;
        document.querySelector('.output').innerHTML = "";
    }
}


//Atribui o operador digitado para o operador da equação e zera o display de saida ao digitar o operador
function validaOperador(operador) {
    operator = operador;
    console.log("op é " + operator);
    let zera = document.querySelector('.output').innerHTML = "";
}
//Faz a equação de acordo com operador recebido
function validaEquacao() {
    switch (operator) {
        case "+":
            let soma = Number(n1) + Number(n2);

            resultSoma = document.querySelector('.output').innerHTML = soma;
            n1 = soma;
            // console.log("n1 com soma:" + n1);
            operator = null;
            break;

        case "*":
            let multi = Number(n1) * Number(n2);

            resultMult = document.querySelector('.output').innerHTML = multi;
            operator = null;
            break;

        case "÷":
            let div = Number(n1) / Number(n2);

            resultMult = document.querySelector('.output').innerHTML = div;
            operator = null;
            break;
        case "-":
            let sub = Number(n1) - Number(n2);

            resultMult = document.querySelector('.output').innerHTML = sub;
            operator = null;
            break;
    }
}
