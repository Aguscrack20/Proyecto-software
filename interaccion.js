function validar(){
  var usuario = document.getElementById("nombre").value;
  var clave = document.getElementById("password").value;

  if (usuario == "aguscrack20" && clave == "2006") {
    window.location.href = "./index2.html"; 
  } else {
    alert("USUARIO Y CLAVE INCORRECTAS...");
  }
}