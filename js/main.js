
/* NAVEGADOR RESPONSIVO */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* VENTANA DE FORMULARIO DE BUSQUEDA */
function openNav() {
  document.getElementById("mySidepanel").style.width = "30%";
}
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
} 

/* GALERIA DE FOTOS PORTAL */
$(document).ready(function(){
	$('#gallery').simplegallery({
        galltime : 400,
        gallcontent: '.content',
        gallthumbnail: '.thumbnail',
        gallthumb: '.thumb'
    });
});