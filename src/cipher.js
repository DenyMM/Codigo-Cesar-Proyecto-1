
  window.cipher ={
   offset:33,
  encode:(string, offset)=>{
    //const FunCipher = (string , offset)=>{
      let result = ""; // no se puede operar con string vacio
      let ciphText = result;    //asignarle un valor nuevo como variable
      let space = " ";
      for (let i = 0; i < string.length; i++){   //empieza desde 0 hasta el numero final de la palabra variable string, se incremente 1
        //Codifica las mayusculas
        if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
         ciphText = (((string.charCodeAt(i)-65) + offset) % 26)+65;
         }
        //Codifica las mayusculas
         else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
         ciphText = (((string.charCodeAt(i)-97) + offset) % 26) + 97;
         }
         else if (string.charCodeAt(i) === 32){
        ciphText = 32;
        }
        //Codifica los caracteres
         else if (string.charCodeAt(i)>=32 && string.charCodeAt(i)<=64){
         ciphText = (((string.charCodeAt(i) - 32)+offset) % 26) + 32;
         }
         result= result + String.fromCharCode(ciphText); /// //reescribe cifrado convierte el ascii a la letra String.fromCharCode()
         }
         return result;
      //   }

  },
  decode:(string, offset)=>{
    //  const FunDecipher =(string , offset)=>{
        let resultD = "";
        let cyphNum = resultD;
        for (let i = 0; i < string.length; i++){
          //Decodifica unicamente las mayusculas
          if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
            cyphNum = (((string.charCodeAt(i)+65) - offset) % 26) +65;
            }
            //Decodifica las minusculas
            else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
            cyphNum = (((string.charCodeAt(i)+97) + offset) % 26) + 97;
            }
            else if (string.charCodeAt(i) === 32){
           cyphNum = 32;
           }
            //Decodifica los caracteres
            else if (string.charCodeAt(i)>=32 && string.charCodeAt(i)<=64){
            cyphNum = (((string.charCodeAt(i) - 32) + offset) % 26) + 32;
            }
              resultD = resultD + String.fromCharCode(cyphNum);
            }
            return resultD;
  },
  createCipherWithOffset:()=>{
    return

  }
};
