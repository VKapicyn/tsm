var options = [
  {selector: '#consalt', offset: 200, callback: function() {
    $('#content1').show(600); }
  },
  {selector: '#trening', offset: 200, callback: function() {
    $('#content2').show("slow");} 
  },
  {selector: '#issled', offset: 200, callback: function() {
    $('#content3').show("slow");} 
  },
  {selector: '#izdat', offset: 200, callback: function() {
    $('#content4').show("slow");} 
  },
  {selector: '#comand', offset: 200, callback: function() {
    $('#content5').show("slow");} 
  }
];
Materialize.scrollFire(options);

(function($){
  $(function(){

    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav();
    //$('#consalt').show("slow");

  }); // end of document ready
})(jQuery); // end of jQuery name space



