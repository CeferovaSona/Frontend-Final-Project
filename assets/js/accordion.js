// scrollTopToTop

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
// accardion
$(document).ready(function () {
    $('.accordion_box:first').addClass('active');
    $('.accordion_box:first').children('.acc_trigger').children('i').addClass('fa-minus');
    $('.accordion_box:first').children('.acc_trigger').addClass('selected').next('.acc_container').show();
    $('.acc_trigger').click(function (event) {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $(this).children('i').removeclass('fa-minus');
            $(this).next().slideUp();
            $(this).parent().removeClass('active');
        }

        else {
            $('.acc_trigger').removeClass('selected');
            $(this).addClass('selected');
            $('.acc_trigger').children('i').removeClass('fa-minus');
            $(this).children('i').addClass('fa-minus');
            $('.acc_trigger').next().slideUp();
            $(this).next().slideDown();
            $('.accordion_box').removeClass('active');
            $(this).parent().addClass('active');
        }
    })
})