

function criptografar (texto) {
    //criptografar as vogais
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    
    return texto;
}

function criptografarText() {
    // chama a função criptografar, e colocar o valor criptografado no textarea.
    let input = document.querySelector("#adicionar_texto").value;
    let textarea = document.querySelector("#decodificador_texto");
    input = criptografar(input);
    textarea.value = input;
    removerTag("subtitulo", "#subtitulo");
    removerTag("imagem", "#img_garoto");
    organizar();

    return input;
}

function descriptografar(texto) {
    // descriptografica as vogais voltando para o texto original.
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    
    return texto;
}

function descriptografarTexto() {
    // chama a função descriptografar, e colocar o valor descriptografado no textarea.
    let input = document.querySelector("#adicionar_texto").value;
    let textarea = document.querySelector("#decodificador_texto");
    input = descriptografar(input);
    textarea.value = input
    removerTag("subtitulo", "#subtitulo")
    removerTag("imagem", "#img_garoto")
    organizar()
    return input;
}

function removerTag (name,tag) {
    // retira as tags para ter uma melhor visão e colocara ou deixara as tags nescessarias.
    name = document.querySelector(tag);
    name.style.display = "none";
    
}
function organizar() {
    let botao = document.querySelector("#copia")
    botao.style.display = "flex"
    let areaDecodificador = document.querySelector(".decodificador")
    areaDecodificador.style.justifyContent = "space-between"
    
}

function copiaTexto() {
    let textarea = document.getElementById("decodificador_texto");
    navigator.clipboard.writeText(textarea.value)
}

