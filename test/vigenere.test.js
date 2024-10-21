const assert = require('assert');
const { cifrar, descifrar, abecedario, generarMatrizCifrado } = require('../vigenere');

describe('Pruebas de Cifrado y Descifrado Vigenère', function() {

    it('Debería mostrar el abecedario', function() {
        console.log('Abecedario:', abecedario);
        assert.strictEqual(abecedario.length, 27); 
    });

    it('Debería generar y mostrar la matriz de cifrado', function() {
        const matriz = generarMatrizCifrado();
        console.log('Matriz de Cifrado:');
        matriz.forEach(fila => {
            console.log(fila.join(' ')); 
        });
        assert.strictEqual(matriz.length, 27); 
    });

    it('Debería cifrar el texto correctamente y mostrar el proceso', function() {
        let texto = 'HELLO';
        let clave = 'KEY';
        
        console.log('Texto a cifrar:', texto);
        console.log('Clave:', clave);

        let resultado = cifrar(texto, clave);
        console.log('Resultado del Cifrado:', resultado);
        
        let esperado = 'QIJUS';
        assert.strictEqual(resultado, esperado); 
    });

    it('Debería descifrar el texto correctamente y mostrar el proceso', function() {
        let textoCifrado = 'QIJUS';
        let clave = 'KEY';
        
        console.log('Texto a descifrar:', textoCifrado);
        console.log('Clave:', clave);

        let resultado = descifrar(textoCifrado, clave);
        console.log('Resultado del Descifrado:', resultado);

        let esperado = 'HELLO';
        assert.strictEqual(resultado, esperado); 
    });

    it('Debería cifrar correctamente incluyendo caracteres no alfabéticos', function() {
        let texto = 'HELLO 123!';
        let clave = 'KEY';
        
        console.log('Texto a cifrar:', texto);
        console.log('Clave:', clave);

        let resultado = cifrar(texto, clave);
        console.log('Resultado del Cifrado:', resultado);
        
        let esperado = 'QIJUS 123!';
        assert.strictEqual(resultado, esperado); 
    });

    it('Debería descifrar correctamente incluyendo caracteres no alfabéticos', function() {
        let textoCifrado = 'QIJUS 123!';
        let clave = 'KEY';
        
        console.log('Texto a descifrar:', textoCifrado);
        console.log('Clave:', clave);

        let resultado = descifrar(textoCifrado, clave);
        console.log('Resultado del Descifrado:', resultado);

        let esperado = 'HELLO 123!';
        assert.strictEqual(resultado, esperado); 
    });

});
