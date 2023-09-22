function isElementVisible(elem){
    let viewScrollTop = $(window).scrollTop(); // distancia de scroll superior
    let viewBottom = viewScrollTop + $(window).height(); // distancia de scroll + el alto actual de window (lo no visible por scroll + lo visible)
    let topElemD = $(elem).offset().top; // distancia desde el elemento hasta el tope superior del viewport
    return (topElemD < viewBottom);
 }
 
 // invoco una función anónima en el evento scroll sobre window
 $(window).on("scroll" ,function() {
    let elem = $('.barra1'); // obtengo el elemento por id
    isElementVisible(elem) ? elem.addClass('barra-one') : elem.removeClass('barra-one'); // si es visible agrego la class, de lo contrario la remuevo
 });

  
 $(window).on("scroll" ,function() {
    let elem = $('.barra2'); 
    isElementVisible(elem) ? elem.addClass('barra-two') : elem.removeClass('barra-two'); 
 });

  
  $(window).on("scroll" ,function() {
    let elem = $('.barra3'); 
    isElementVisible(elem) ? elem.addClass('barra-three') : elem.removeClass('barra-three'); 
 });


  
  $(window).on("scroll" ,function() {
    let elem = $('.barra4'); 
    isElementVisible(elem) ? elem.addClass('barra-four') : elem.removeClass('barra-four'); 
 });

  
  $(window).on("scroll" ,function() {
    let elem = $('.barra5'); 
    isElementVisible(elem) ? elem.addClass('barra-five') : elem.removeClass('barra-five'); 
 });

  
  $(window).on("scroll" ,function() {
    let elem = $('.barra6'); 
    isElementVisible(elem) ? elem.addClass('barra-six') : elem.removeClass('barra-six'); 
 });

  
  $(window).on("scroll" ,function() {
    let elem = $('.barra7'); 
    isElementVisible(elem) ? elem.addClass('barra-seven') : elem.removeClass('barra-seven'); 
 });

  
  $(window).on("scroll" ,function() {
    let elem = $('.barra8'); 
    isElementVisible(elem) ? elem.addClass('barra-eight') : elem.removeClass('barra-eight'); 
 });

  
  $(window).on("scroll" ,function() {
    let elem = $('.barra9'); 
    isElementVisible(elem) ? elem.addClass('barra-nine') : elem.removeClass('barra-nine'); 
 });

  
  $(window).on("scroll" ,function() {
    let elem = $('.barra10'); 
    isElementVisible(elem) ? elem.addClass('barra-ten') : elem.removeClass('barra-ten'); 
 });



 // ANIMACION CIRCULOS


 $(window).on("scroll" ,function() {
    let elem = $('.progress-bar1'); 
    isElementVisible(elem) ? elem.addClass('one-1') : elem.removeClass('one-1'); 
 });

 $(window).on("scroll" ,function() {
    let elem = $('.progress-bar1-'); 
    isElementVisible(elem) ? elem.addClass('one') : elem.removeClass('one'); 
 });

 $(window).on("scroll" ,function() {
    let elem = $('.progress-bar2-'); 
    isElementVisible(elem) ? elem.addClass('two-2') : elem.removeClass('two-2'); 
 });

 $(window).on("scroll" ,function() {
    let elem = $('.progress-bar2'); 
    isElementVisible(elem) ? elem.addClass('two') : elem.removeClass('two'); 
 });


 $(window).on("scroll" ,function() {
    let elem = $('.progress-bar3'); 
    isElementVisible(elem) ? elem.addClass('three') : elem.removeClass('three'); 
 });


 $(window).on("scroll" ,function() {
    let elem = $('.progress-bar3'); 
    isElementVisible(elem) ? elem.addClass('three') : elem.removeClass('three'); 
 });


 $(window).on("scroll" ,function() {
    let elem = $('.progress-bar4'); 
    isElementVisible(elem) ? elem.addClass('four') : elem.removeClass('four'); 
 });

 $(window).on("scroll" ,function() {
    let elem = $('.progress-bar5'); 
    isElementVisible(elem) ? elem.addClass('five') : elem.removeClass('five'); 
 });


 $(window).on("scroll" ,function() {
    let elem = $('.progress-bar6'); 
    isElementVisible(elem) ? elem.addClass('six') : elem.removeClass('six'); 
 });


 $(window).on("scroll" ,function() {
    let elem = $('.progress-bar7'); 
    isElementVisible(elem) ? elem.addClass('seven') : elem.removeClass('seven'); 
 });

 $(window).on("scroll" ,function() {
    let elem = $('.progress-bar8'); 
    isElementVisible(elem) ? elem.addClass('eight') : elem.removeClass('eight'); 
 });

 $(window).on("scroll" ,function() {
   let elem = $('.progress-bar9'); 
   isElementVisible(elem) ? elem.addClass('seven') : elem.removeClass('seven'); 
});