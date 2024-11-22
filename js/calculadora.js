var num1 = 0;
var num2 = 0;
var operacion = '';

function setearValor(valor) {
    document.getElementById('id-display').innerText = valor;
}

function setearValorConcatenado(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    document.getElementById('id-display').innerText = valorActual + valor;
}

function recibirValor(valor) {
    if (num1 === null) {
        num1 = valor;
    } else {
        num2 = valor;
    }
    console.log(num1)
}

function evaluarOperacion(op) {
    operacion = op;
}

function igual() {
    let valorFinal;
    if (operacion === '+') {
        valorFinal = num1 + num2;
    } else if (operacion === '-') {
        valorFinal = num1 - num2;
    } else if (operacion === 'X') {
        valorFinal = num1 * num2;
    } else if (operacion === '/') {
        valorFinal = num1 / num2;
    }
    setearValor(valorFinal);
}

