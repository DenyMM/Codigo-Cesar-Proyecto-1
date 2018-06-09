const showword=()=>{
  var getTextUser =document.getElementById('intUserText').value;
  document.getElementById('textToCiph').innerHTML=("El palabra que quieres codificar es:"+ getTextUser);
 }

 // Funcion para la posicion que introduce el usuario
const shownum=()=>{
 var getNumUser = document.getElementById('intUserNum').value;
  document.getElementById('numToCyph').innerHTML= ("El numero que quieres decodificar es:"+ getNumUser);
  }


//function goToCiph() {
//window.location.href = "cipher.js";}
