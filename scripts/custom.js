$(function(){
$('body').css('background-color', '#f9f9f9');

//mobile nav open and close
$('.hamburger').click(function() {
  $('.mobile-nav').css('width', "300px");
})
$('.mobile-nav .close').click(function() {
  $('.mobile-nav').css('width', "0px");
})
});
