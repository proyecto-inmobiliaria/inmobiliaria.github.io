
/* NAVEGADOR RESPONSIVO */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* CIERRE VENTANA BUSQUEDA */
window.onclick = function(event) {
  var modal = document.getElementById("buscador-nodal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* SCROLL DE BOTON BUSCADOR */
function smoothscroll(){
  if ( $(window).width() > 990) {     
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  else {
    window.scrollTo({ top: 550, behavior: 'smooth' });
  }
}; 

/* VENTANA DE FORMULARIO DE BUSQUEDA */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
} 

/* GALERIA DE FOTOS PORTAL */
$(document).ready(function(){
	$("#gallery").simplegallery({
        galltime : 400,
        gallcontent: '.content',
        gallthumbnail: '.thumbnail',
        gallthumb: '.thumb'
    });
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function abrirNav() {
  document.getElementById("menu-mobile-izquierda").style.width = "250px";
  document.getElementById("opacidad").style.opacity = "0.5"; 
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function cerrarNav() {
  document.getElementById("menu-mobile-izquierda").style.width = "0";
  document.body.style.backgroundColor = "white";
} 


   
  
$(function () {
 $('.toggle-menu').click(function(){
  $('.exo-menu').toggleClass('display');
  
 });
 
});



/*$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  scroll_header(scroll);  
});

function scroll_header(scroll){
  if(scroll < 50 ){ 
    $('.logo-top-img').css('width', '80%'); 
  }if else (scroll > 50 ){
    $('.logo-top-img').css('width', '60%');
  }};


/*function scroll_header(scroll){
  if(scroll < 50 ){ 
    if($(".logo-top-img").hasClass("img-width")){
    }else{
      $('.fixed-top').css('background', 'transparent', 'transition', 'all 0.3s ease-in-out 0s');
    }   
  } else{
      $('.fixed-top').css('background', 'rgba(0, 0, 0, 0.6)');
  }
}*/