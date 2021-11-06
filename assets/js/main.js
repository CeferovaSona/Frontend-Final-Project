// about-expert section

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
}

// subscribe section 
$(document).ready(function(){
  $("#subscribe-button").click(function(){
    var val = $("#subscribe-input").val();  
var check = $.isNumeric(val);
    if((check)||(val=="")){
      $('#sos-alert').show();}
      else{
      $('#accept-alert').show();
       
      }
  })
})
/
// addToCart section
$(document).ready(function(){
  $("#price").click(function(){
    
      $('#addition').show();
      
  })
})
// accordion html 
(function($) {
    
  var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

})(jQuery);
// btnScrollToTop
$(document).ready(function(){
  $("#btnScrollToTop").click(function(){
    $("html,body").animate({scrollTop:0},slow)
  })
})
$(document).ready(function(){
$(window).scroll(function(){
  if ($(this).scrollTop()>40)
  {
    $("#btnScrollToTop").fadeIn();
  }
    else{
      $("#btnScrollToTop").fadeOut();
    }
  
  })
});
// tab-menu section
$(document).ready (function(){
  $('.tab_container:first').show();
  $('.tab_navigation li:first').addClass('active');
  $('.tab_navigation li').click(function(event){
index=$(this).index();
$('.tab_navigation li').removeClass('active');
$(this).addClass('active');
$('.tab_container').hide();
$('.tab_container').eq(index).show();
  })
})
// standart product index counter
