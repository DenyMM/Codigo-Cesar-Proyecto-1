
     //Funcion para mostrar el mensaje codificado
  const finalCyph=()=>{
   let textIntUser = document.getElementById('intUserText').value;
   document.getElementById('ciphTextHere').innerHTML=(cipher.encode(textIntUser, 33)); //lanza la operacion (funcion(string,posicion))
   }
     //Funcion para mostra el mensaje decodificado
  const finalDeCyph=()=>{
   let numIntUser = document.getElementById('intUserNum').value;
   document.getElementById('ciphNumHere').innerHTML= (cipher.decode(numIntUser, 33));
   }
