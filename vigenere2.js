document.getElementById('vigenereForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const texto = document.getElementById('texto').value;
    const clave = document.getElementById('clave').value;
    let resultado = '';

    if (event.submitter.value === "Cifrar") {
        resultado = cifrar(texto, clave);
        mostrarOracion("cifrado", resultado);
    } else if (event.submitter.value === "Descifrar") {
        resultado = descifrar(texto, clave);
        mostrarOracion("descifrado", resultado);
    }

    mostrarResultados(texto, clave, resultado);
});

function mostrarOracion(tipo, resultado) {
    const resultadoFinal = document.getElementById('resultadoFinal');
    let mensaje = '';

    if (tipo === "cifrado") {
        mensaje = `El texto cifrado es: ${resultado}`;
    } else if (tipo === "descifrado") {
        mensaje = `El texto descifrado es: ${resultado}`;
    }

    resultadoFinal.textContent = mensaje;
}

function mostrarResultados(texto, clave, resultado) {
    const tabla = document.getElementById('tablaResultados');
    tabla.innerHTML = '';

    const encabezado = `
        <table>
            <thead>
                <tr>
                    <th>Texto Original</th>
                    <th>Clave Repetida</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
    `;

    let cuerpo = '';
    let textoMayus = texto.toUpperCase();
    let claveRepetida = repetirClave(textoMayus, clave);

    for (let i = 0; i < textoMayus.length; i++) {
        cuerpo += `
            <tr>
                <td>${textoMayus[i]}</td>
                <td>${claveRepetida[i]}</td>
                <td>${resultado[i] || ' '}</td>
            </tr>
        `;
    }

    const tablaFinal = encabezado + cuerpo + '</tbody></table>';
    tabla.innerHTML = tablaFinal;
}

function repetirClave(texto, clave) {
    let claveCompleta = '';
    let indiceClave = 0;

    for (let i = 0; i < texto.length; i++) {
        if (/[A-Z]/.test(texto[i])) {
            claveCompleta += clave[indiceClave % clave.length].toUpperCase();
            indiceClave++;
        } else {
            claveCompleta += texto[i];
        }
    }
    return claveCompleta;
}
