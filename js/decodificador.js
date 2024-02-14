

function criptografar(texto) {
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

    // Verifica se o input está vazio
    if (input === "") {
        restalrarTags()
        removerTag("copiar", "#copia")
        textarea.value = ""
        alert("Por favor, insira um texto para criptografar.");
        return; // Retorna sem fazer mais nada se o input estiver vazio
    }

    // Verifica se o texto contém letras maiúsculas ou acentos
    if (/[À-ÖØ-öø-ÿA-Z]/.test(input)) {
        removerTag("copiar", "#copia")
        restalrarTags()
        textarea.value = ""
        alert("O texto não pode conter letras maiúsculas ou com acento.");
        return; // Retorna sem fazer mais nada se o texto contiver letras maiúsculas ou com acento
    }

    if (!/[aeiou]/i.test(input)) {
        restalrarTags()
        removerTag("copiar", "#copia")
        textarea.value = ""
        alert("é presciso de pelo menos uma vogal para ser criptografado")
        return;
    }


    
    input = criptografar(input);
    textarea.value = input;
    removerTag("subtitulo", "#subtitulo");
    removerTag("imagem", "#img_garoto");
    organizar();
    document.querySelector("#adicionar_texto").value = "";

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

    if (input === "") {
        alert("Por favor, insira um texto criptografado para ser descriptografado.");
        restalrarTags()
        textarea.value = ""
        removerTag("copiar", "#copia")
    }

    let textarea = document.querySelector("#decodificador_texto");
    input = descriptografar(input);
    textarea.value = input
    removerTag("subtitulo", "#subtitulo")
    removerTag("imagem", "#img_garoto")
    organizar()
    document.querySelector("#adicionar_texto").value = ""
    return input;
}



function removerTag(name, tag) {
    // retira as tags para ter uma melhor visão e colocara ou deixara as tags nescessarias.
    name = document.querySelector(tag);
    name.style.display = "none";

}

function restalrarTags() {
    if (window.innerWidth > 979) {
        let img = document.querySelector("#img_garoto");
        img.style.display = "flex"
        let subtitulo = document.querySelector("#subtitulo")
        subtitulo.style.display = "flex"

    }
    else {
        removerTag("subtitulo", "#subtitulo")
        removerTag("imagem", "#img_garoto")
    }
    
}
// Adiciona um listener para o evento 'resize' que chama a função de ajuste de tags
window.addEventListener('resize', restalrarTags);

// Chama a função de ajuste de tags quando a página é carregada
window.addEventListener('load', restalrarTags);



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