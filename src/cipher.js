const cipherTextOp = (string , offset)=>{
  let result = ""; // no se puede operar con string vacio
  let ciphText = result;    //asignarle un valor nuevo como variable
  for (let i = 0; i < string.length; i++){   //empieza desde 0 hasta el numero final de la palabra variable string, se incremente 1
    //Mayusculas, en la tabla ASCII aparecen del 65-90
    if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
      ciphText = (((string.charCodeAt(i)-65) + offset) % 26)+65;
    }
    //Minusculas, en la tabla ASCII aparecen del 97 al 122
    else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
      ciphText = (((string.charCodeAt(i)-97) + offset) % 26) + 97;
    }
    //Strings unicos, en la tabla ASCII aparecen del 32 al 64
    else if (string.charCodeAt(i)>=32 && string.charCodeAt(i)<=64){
      ciphText = (((string.charCodeAt(i) - 32)+offset) % 26) + 32;
    }
    result= result + String.fromCharCode(ciphText); /// //reescribe cifrado convierte el ascii a la letra String.fromCharCode()
  }
  return result;
}
const final=()=>{
  let textIntUser = document.getElementById('intUserText').value; //agarra el texto del usuario
  // Para introducir en una variable el numero de posiciones que de el usuario y usarlo en vex de 33
//  let poscIntUser = document.getElementById('numPosicUser').value;
document.getElementById('ciphTextHere').innerHTML=(cipherTextOp(textIntUser,33)); //lanza la operacion (funcion(string,posicion))
}
//funcion
//window.cipher = {
  // ...
//};
