
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

/* IMAGEN MODAL */

$(document).ready(function(){
        var current = {x: 0, y: 0, zoom: 1};
  $(document).on("click","#modal-zoom-photo",function(e){
    
    if(current.zoom > 1){
      current = {x: 0, y: 0, zoom: 1};
      $(this).removeClass().addClass("zoom-in-cursor");
    }
    else{
      $(this).removeClass().addClass("zoom-out-cursor");
       var coef = e.shiftKey || e.ctrlKey ? 0.5 : 2,
        delm = document.documentElement,
        oz = current.zoom,
        nz = current.zoom * coef,
        sx = delm.scrollLeft,
        sy = delm.scrollTop,
        ox = 50 + 21,
        oy = 50 + 22,
        mx = e.clientX - ox + sx,
        my = e.clientY - oy + sy,
        ix = (mx - current.x) / oz,
        iy = (my - current.y) / oz,
        nx = ix * nz,
        ny = iy * nz,
        cx = (ix + (mx - ix) - nx),
        cy = (iy + (my - iy) - ny)
      ;
        current.zoom = nz;
        current.x = cx;
        current.y = cy;
    }
      
    $(".modal-zoom-large-photo-wrap").css({
      '-webkit-transform' : 'translate('+current.x+'px, '+current.y+'px) scale(' + current.zoom + ')',
      '-moz-transform'    : 'translate('+current.x+'px, '+current.y+'px) scale(' + current.zoom + ')',
      '-ms-transform'     : 'translate('+current.x+'px, '+current.y+'px) scale(' + current.zoom + ')',
      '-o-transform'      : 'translate('+current.x+'px, '+current.y+'px) scale(' + current.zoom + ')',
      'transform'         : 'translate('+current.x+'px, '+current.y+'px) scale(' + current.zoom + ')'
    });
    return false;
  });
      
      
    });