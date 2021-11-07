// btnScrollToTop
var mybutton = document.getElementById("btnScrollToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop()>300)
    {
      $("#btnScrollToTop").fadeIn();
    }
      else{
        $("#btnScrollToTop").fadeOut();
      }
    $(document).ready(function(){
    $("#btnScrollToTop").click(function(){
      $("html,body").animate({scrollTop:0},slow)
    })
  })
    })
  });
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



// header

$(document).ready(function() {
  (function() {
      var fadeSpeed = 200, fadeTo = 0.5, topDistance = 30;
      var topbarME = function() { $('header').fadeTo(fadeSpeed,1); }, topbarML = function() { $('header').fadeTo(fadeSpeed,fadeTo); };
      var inside = false;
      $(window).scroll(function() {
          position = $(window).scrollTop();
          if(position > topDistance && !inside) {
              topbarML();
              $('header').bind('mouseenter',topbarME);
              $('header').bind('mouseleave',topbarML);
              inside = true;
          }
          else if (position < topDistance){
              topbarME();
              $('header').unbind('mouseenter',topbarME);
              $('header').unbind('mouseleave',topbarML);
              inside = false;
          }
      });
  })();
});
// header
// $(document).ready(function(){
//   $(window).scroll(function(){
//     if ($(this).scrollTop()>400)
//     {
//       $(".icons").fadeIn();
//     }
//       else{
//         $(".icons").fadeOut();
//       }
//     })
//   });
