const abecedario = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');

function generarMatrizCifrado() {
    let matriz = [];
    for (let i = 0; i < abecedario.length; i++) {
        matriz[i] = abecedario.slice(i).concat(abecedario.slice(0, i));
    }
    return matriz;
}

function cifrar(texto, clave) {
    let textoMayus = texto.toUpperCase();
    let claveMayus = clave.toUpperCase();
    let resultado = '';
    let matriz = generarMatrizCifrado();
    let claveCompleta = '';
    let indiceClave = 0;

    for (let i = 0; i < textoMayus.length; i++) {
        let letraTexto = textoMayus[i];
        if (abecedario.includes(letraTexto)) {
            claveCompleta += claveMayus[indiceClave % claveMayus.length];
            indiceClave++;
        } else {
            claveCompleta += letraTexto;
        }
    }

    for (let i = 0; i < textoMayus.length; i++) {
        let letraTexto = textoMayus[i];
        let letraClave = claveCompleta[i];
        if (abecedario.includes(letraTexto)) {
            let fila = abecedario.indexOf(letraTexto);
            let columna = abecedario.indexOf(letraClave);
            resultado += matriz[fila][columna];
        } else {
            resultado += letraTexto;
        }
    }
    return resultado;
}

function descifrar(textoCifrado, clave) {
    let textoCifradoMayus = textoCifrado.toUpperCase();
    let claveMayus = clave.toUpperCase();
    let resultado = '';
    let matriz = generarMatrizCifrado();
    let claveCompleta = '';
    let indiceClave = 0;

    for (let i = 0; i < textoCifradoMayus.length; i++) {
        let letraTexto = textoCifradoMayus[i];
        if (abecedario.includes(letraTexto)) {
            claveCompleta += claveMayus[indiceClave % claveMayus.length];
            indiceClave++;
        } else {
            claveCompleta += letraTexto;
        }
    }

    for (let i = 0; i < textoCifradoMayus.length; i++) {
        let letraTextoCifrado = textoCifradoMayus[i];
        let letraClave = claveCompleta[i];
        if (abecedario.includes(letraTextoCifrado)) {
            let fila = abecedario.indexOf(letraClave);
            let columna = matriz[fila].indexOf(letraTextoCifrado);
            resultado += abecedario[columna];
        } else {
            resultado += letraTextoCifrado;
        }
    }
    return resultado;
}

module.exports = {
    cifrar,
    descifrar,
    abecedario,
    generarMatrizCifrado
};
