const cipherTextOp = (string , offset)=>{
  let result = ""; // no se puede operar con string vacio
  let ciphText = result;    //asignarle un valor nuevo como variable
  for (let i = 0; i < string.length; i++){   //empieza desde 0 hasta el numero final de la palabra variable string, se incremente 1
    if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
      ciphText = (((string.charCodeAt(i)-65) + offset) % 26)+65;
    }
    else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
    ciphText = (((string.charCodeAt(i)-97) + offset) % 26) + 97;
    }
    else if (string.charCodeAt(i)>=32 && string.charCodeAt(i)<=64){
    ciphText = (((string.charCodeAt(i) - 32)+offset) % 26) + 32;
    }
    result= result + String.fromCharCode(ciphText); /// //reescribe cifrado convierte el ascii a la letra String.fromCharCode()
    }
    return result;
    }
const finalCyph=()=>{
  let textIntUser = document.getElementById('intUserText').value;
document.getElementById('ciphTextHere').innerHTML=(cipherTextOp(textIntUser,33)); //lanza la operacion (funcion(string,posicion))
}
const cypherNumOp=(string , offset)=>{
  let resultD = "";
  let cyphNum = resultD;
    for (let i = 0; i < string.length; i++){
      if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
        cyphNum = (((string.charCodeAt(i)+65) - offset) % 26) +65;
      }
      else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
      cyphNum = (((string.charCodeAt(i)+97) + offset) % 26) + 97;
      }
      else if (string.charCodeAt(i)>=32 && string.charCodeAt(i)<=64){
      cyphNum = (((string.charCodeAt(i) - 32) + offset) % 26) + 32;
      }
        resultD = resultD + String.fromCharCode(cyphNum);
      }
      return resultD;
      }
const finalDeCyph=()=>{
  let numIntUser = document.getElementById('intUserNum').value;
  document.getElementById('ciphNumHere').innerHTML= (cypherNumOp(numIntUser,33));
}
//funcion
//window.cipher = {
  // ...
//};
