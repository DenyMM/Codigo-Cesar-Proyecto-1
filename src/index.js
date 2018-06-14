
const showword=()=>{
  var getTextUser =document.getElementById('intUserText').value;
  document.getElementById('textToCiph').innerHTML=("El palabra que quieres codificar es:"+ getTextUser);
 }

 // Funcion para la posicion que introduce el usuario
const shownum=()=>{
 var getNumUser = document.getElementById('intUserNum').value;
  document.getElementById('numToCyph').innerHTML= ("El numero que quieres decodificar es:"+ getNumUser);
  }

  const finalCyph=()=>{
   let textIntUser = document.getElementById('intUserText').value;
   document.getElementById('ciphTextHere').innerHTML=(cipher.encode(textIntUser,33)); //lanza la operacion (funcion(string,posicion))
   }
   const finalDeCyph=()=>{
   let numIntUser = document.getElementById('intUserNum').value;
   document.getElementById('ciphNumHere').innerHTML= (cipher.decode(numIntUser,33));
 }
//function goToCiph() {
//window.location.href = "cipher.js";}
