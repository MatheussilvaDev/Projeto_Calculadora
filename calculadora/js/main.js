

function soma(n1, n2){
    var soma = Number(n1)+Number(n2);
    return soma;
}

function sub(n1, n2){
    var sub = n1-n2;
    return sub;
}
function div(n1, n2){
    var div = n1/n2;
    return div;
}
function sub(n1, n2){
    var sub = n1*n2;
    return sub;
}



var n1,n, n2, operator, result;

var n1 = document.getElementsByClassName("number").value;
function conta(numeral){
    
    if(operator == null){
        
        
        let num = numeral ;
        let conca1 = document.querySelector('.output').innerHTML;
        let conca2 = document.querySelector('.output').innerHTML =conca1+ num  ;
        n1 = Number(conca2);
        console.log(n1);


    }else{
       
        let num = numeral;
        
        let conca1 = document.querySelector('.output').innerHTML;
        let conca2 = document.querySelector('.output').innerHTML = conca1 + num;
        n2 = Number(conca2)
        console.log(n2);
    }
    

}
/*function operation(num){
    n = num;
    if(operator == null){
        n1= num ;
    
        let numero = document.querySelector(".output").innerHTML;
    
        result = document.querySelector('.output').innerHTML = numero+num;
        n1=Number(result);
        console.log(result);
    }else{
        n2 = num ;
        let numero = document.querySelector(".output").innerHTML;
        result = document.querySelector('.output').innerHTML = numero+num;
        n2 = Number(result);
        console.log( n2);
    }
    if () {
        
    }
}
function del(){
    var del = String(result);
    
    result = document.querySelector('.output').innerHTML =  Number(del.slice(0, del.length -1));
    console.log(result);
}
function equacao(op){
    result = ""
    operator = op;
    let resultado = document.querySelector('.output').innerHTML = "";



    console.log(resultado);
}*/
function validaOperador(operador){
    operator=operador;
    console.log("op é "+ operator);
    let zera = document.querySelector('.output').innerHTML= "";
}
function validaEquacao(operator){
    switch (operator) {
        case "+":
            let soma = Number(n1)+Number(n2);
            return soma;
            // resultSoma = document.querySelector('.output').innerHTML = soma1;
            break;
    
        default:
            break;
    }
}
