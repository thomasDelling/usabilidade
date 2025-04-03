export function encrypt(texto) {
    let saida = ""
    for (let i = 0; i < texto.length; i++) {
        saida = saida + texto.charAt(i) + "x"
    }
    return saida;
}

export function decrypt(original){
let original = ""
for (let i = 0; i < texto.length; i=i+2){
    saida = saida + texto.charAt(i)
}
}