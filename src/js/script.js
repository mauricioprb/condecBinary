let text = document.querySelector("binario");
var binario = input.binario;

function binarioParaDecimal(binario) {
    let resultado = 0;
    for (let i = 0; i < binario.length; i++)
        resultado += Math.pow(2, i) * binario[binario.length - i - 1]
    console.log()
}