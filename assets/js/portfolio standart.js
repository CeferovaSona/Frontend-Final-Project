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