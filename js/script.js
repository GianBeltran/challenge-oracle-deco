const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEcriptar(){
    const textoEncript = encriptar(textArea.value);
    mensaje.value = textoEncript;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
};

function encriptar(stringEncript){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncript = stringEncript.toLowerCase();

    for(let i=0; i<matriz.length; i++){
        if(stringEncript.includes(matriz[i][0])){
            stringEncript = stringEncript.replaceAll(matriz[i][0], matriz[i][1]);
        };
    };

    return stringEncript;
};

function btnDescriptar(){
    const textoEncript = desencriptar(textArea.value);
    mensaje.value = textoEncript;
    textArea.value = "";
};

function desencriptar(stringDesencript){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencript = stringDesencript.toLowerCase();

    for(let i=0; i<matriz.length; i++){
        if(stringDesencript.includes(matriz[i][1])){
            stringDesencript = stringDesencript.replaceAll(matriz[i][1], matriz[i][0]);
        };
    };

    return stringDesencript;
};

function copiarTexto(){
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    document.execCommand('copy');
}


