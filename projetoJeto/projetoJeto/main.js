import { encrypt, decrypt } from "./cripto.js";
import {areaCirculo} from "./matematica.js;"


let segredo = encrypt("alguma coisa")
console.log("segredo " ,segredo);

let original = decrypt(segredo)
console.log("original " , original);

