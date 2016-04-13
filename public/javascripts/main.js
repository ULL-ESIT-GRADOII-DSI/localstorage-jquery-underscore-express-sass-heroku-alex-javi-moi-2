//Cuando la pagina este lista
$(document).ready(function () {
    
    // Comprueba la compatibilidad del navegador con localstorage y si tenemos algun dato almacenado
    if (window.localStorage && localStorage.original) 
    {
      original.value = localStorage.original; //pone en el area de texto lo que haya en el localstorage
    }
    
    $("button").click(crear);
});

//Creacion de la tabla y almacenimiento de datos en localstorage
function crear()
{
    var original = document.getElementById("original").value;
    
    if (window.localStorage) 
      localStorage.original = original; //almacena los datos en localstorage
      
}
  
//borrando datos de localstorage y tabla
function limpiar()
{

	  window.localStorage.removeItem("original");      //borrar datos de localstorage
	 	document.getElementById('original').value = ""; //borrar contenido areatexto

   
}