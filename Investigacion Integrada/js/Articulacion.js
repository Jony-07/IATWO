
function InvalidName(name) {

    if(name.validity.patternMismatch){
       name.setCustomValidity('Campo no númerico, minímo 4 letras');
       
   }    
   else {
    name.setCustomValidity('');
   }
   return true;
}

function InvalidLastName(name) {

    if(name.validity.patternMismatch){
       name.setCustomValidity('Campo no númerico, minímo 4 letras');
       
   }    
   else {
    name.setCustomValidity('');
   }
   return true;
}



//
function registrar()
{
    document.getElementById('frm').addEventListener('submit', function(e){
        e.preventDefault();
        e.pre
    });
  /*  telefono =document.getElementById('telefono').value;
      RegExpTel =/^\+(5)\d{1,3}\ ?\-?\d{8}$/

    if(RegExpTel.test(telefono).validity)
    {
    telefono.setCustomValidity('Campo no númerico, minímo 4 letras');
    }
    else 
    {
        telefono.setCustomValidity('');
    }*/
    RegExpTel =/^\+(5)\d{1,3}\ ?\-?\d{8}$/
   valor = document.getElementById("telefono").value;
if( !(RegExpTel.test(valor)) ) {
   
  alert("False");
  
}
    
}
  







