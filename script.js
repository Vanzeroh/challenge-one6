//Variables

const textArea = document.querySelector(".content-textarea");
const message = document.querySelector(".crypted-message");

//Crypt Button

function btnCrypt(){
    const cryptedText = crypt(textArea.value);
    message.value = cryptedText
    textArea.value =""
}

function crypt(cryptedString){
    let matrixCode = [["e","enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    cryptedString = cryptedString.toLowerCase()

    for(let i = 0; i < matrixCode.length; i++){
        if(cryptedString.includes(matrixCode[i][0])){
            cryptedString = cryptedString.replaceAll(matrixCode[i][0], matrixCode[i][1])

        }       
    }
    return cryptedString
}

//Decrypt Button

function btnDecrypt(){
    const cryptedText = decrypt(textArea.value);
    message.value = cryptedText
    textArea.value =""
}

function decrypt(decryptedString){
    let matrixCode = [["e","enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    decryptedString = decryptedString.toLowerCase()

    for(let i = 0; i < matrixCode.length; i++){
        if(decryptedString.includes(matrixCode[i][1])){
            decryptedString = decryptedString.replaceAll(matrixCode[i][1], matrixCode[i][0])

        }       
    }
    return decryptedString
}

//Copy Button

function copyMessage(){
    var copyText = document.querySelector(".crypted-message")

    copyText.select();

    navigator.clipboard.writeText(copyText.value);

    alert("Texto Copiado");
}









