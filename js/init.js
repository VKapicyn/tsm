var options = [
  //index
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
  },
  {selector: '.parallax', offset: 200, callback: function() {
    $('#general').slideDown("slow");} 
  },
  //izdat
  {selector: '#izdat1', offset: 200, callback: function() {
    $('.content1').fadeIn(2000);} 
  },
  {selector: '#izdat2', offset: 200, callback: function() {
    $('.content2').fadeIn(2000);} 
  },
  {selector: '#izdat3', offset: 200, callback: function() {
    $('.content3').fadeIn(2000);} 
  },
  {selector: '#izdat4', offset: 200, callback: function() {
    $('.content4').fadeIn(2000);} 
  }
];
Materialize.scrollFire(options);

(function($){
  $(function(){

    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav();
    //$('#general').show("slow");

  }); // end of document ready
})(jQuery); // end of jQuery name space



