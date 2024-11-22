var num1 = '';
var num2 = '';
var operacion = '';

function setearValor(valor) {
    document.getElementById('id-display').innerText = valor;
}

function setearValorConcatenado(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    if (valorActual === '0') {
        valorActual = '';
    }
    document.getElementById('id-display').innerText = valorActual + valor;
}

function recibirValor(valor) {
    if (operacion === '') {
        num1 += valor;
        setearValorConcatenado(valor);
    } else {
        num2 += valor;
        setearValorConcatenado(valor);
    }
}

function clearDisplay() {
    num1 = '';
    num2 = '';
    operacion = '';
    setearValor(0);
}

function backspace() {
    let valorActual = document.getElementById('id-display').innerText;
    if (valorActual.length > 1) {
        setearValor(valorActual.slice(0, -1));
    } else {
        setearValor(0);
    }
    if (operacion === '') {
        num1 = num1.slice(0, -1);
    } else {
        num2 = num2.slice(0, -1);
    }
}

function evaluarOperacion(op) {
    if (num1 !== '') {
        operacion = op;
        setearValorConcatenado(' ' + op + ' ');
    }
}

function igual() {
    let valorFinal;
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    switch (operacion) {
        case '+':
            valorFinal = n1 + n2;
            break;
        case '-':
            valorFinal = n1 - n2;
            break;
        case '*':
            valorFinal = n1 * n2;
            break;
        case '/':
            valorFinal = n1 / n2;
            break;
        case '%':
            valorFinal = n1 % n2;
            break;
        default:
            return;
    }
    setearValor(valorFinal);
    num1 = valorFinal.toString();
    num2 = '';
    operacion = '';
}
