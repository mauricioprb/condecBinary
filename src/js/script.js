function converterDec(numero) {
    let decimal = parseInt(document.getElementById('decimal').value)
    let binario = decimal.toString(2)
    document.getElementById('binario').innerHTML = binario;
}