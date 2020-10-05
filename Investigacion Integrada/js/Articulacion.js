RegExpTel = /^\+(5)\d{1,3}\ ?\-?\d{8}$/;
RegExpEmail = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
RegExpLastNameandName = /^[A-Z a-záéúíóñ]{4,30}$/;

RegExpLastName = /^[A-Z a-záéúíóñ]{4,30}$/;
//Anula submit
/*document.getElementById('frm').addEventListener('submit', function(e){
    e.preventDefault();
    e.e
});*/
//Valida submit
/*document.getElementById('frm')
{
    document.forms['frm'].submit();  
}
*/
document.getElementById("frm").addEventListener("submit", function (e) {
  e.preventDefault();
  e.e;
});

function registrar() {
  Telefono = document.getElementById("telefono").value;
  Email = document.getElementById("email").value;
  Apellido = document.getElementById("apellido").value;
  Nombre = document.getElementById("name").value;

  if (
    !RegExpTel.test(Telefono) ||
    !RegExpEmail.test(Email) ||
    !RegExpLastNameandName.test(Apellido) ||
    !RegExpLastName.test(Nombre)
  ) {
    document.getElementById("labelinvisible").style.visibility = "visible";
    document.getElementById("labelinvisible_correo").style.visibility =
      "visible";
    document.getElementById("labelinvisible_lastname").style.visibility =
      "visible";
    document.getElementById("labelinvisible_name").style.visibility = "visible";
  } else {
    document.getElementById("labelinvisible").style.visibility = "hidden";
    document.getElementById("labelinvisible_correo").style.visibility =
      "hidden";
    document.getElementById("labelinvisible_lastname").style.visibility =
      "hidden";
    document.getElementById("labelinvisible_name").style.visibility = "hidden";

    document.getElementById("frm");
    {
      document.forms["frm"].submit();
    }
  }
  /*
  if (!RegExpTel.test(Telefono)) {
    
    document.getElementById("labelinvisible").style.visibility = "visible";
  } else {
    document.getElementById("labelinvisible").style.visibility = "hidden";
    if (!RegExpEmail.test(Email)) {
       
      document.getElementById('labelinvisible_correo').style.visibility =
        "visible";
    } else {
      document.getElementById('labelinvisible_correo').style.visibility =
        "hidden";
        if(!RegExpLastNameandName.test(Apellido))
        {
            document.getElementById("labelinvisible_lastname").style.visibility =
            "visible";
            
        }
        else
        {
             
            document.getElementById("labelinvisible_lastname").style.visibility =
            "hidden";
            if(!RegExpLastNameandName.test(Nombre))
            {
                document.getElementById("labelinvisible_name").style.visibility =
                "visible";
                
            }
            else
            {
                 
                document.getElementById("labelinvisible_name").style.visibility =
                "hidden";
                document.getElementById('frm')
{
    document.forms['frm'].submit();  
}
                
            }
        }
        
    }
  }
  */
}
