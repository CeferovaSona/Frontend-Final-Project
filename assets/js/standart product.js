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


// counter function
$(document).ready(function(){
    var x=$(".count").text();
    $("#increment").click(function(){
 $(".count").text(++x);
    
    })
    $("#decrement").click(function(){
        
        $(".count").text(--x);
    })
  })

//   tab-menu
$(document).ready(function(){
    $(".tab_container").hide();
    $(".tab_container:first").show();
    $(".tab_navigation li:first").removeClass("active");
    $(".tab_navigation li").click(function(event){
 index=$(this).index();
 $(".tab_navigation li").removeClass("active")
 $(this).addClass("active");
 $(".tab_container").hide();
 $(".tab_container").eq(index).show();
    })
})
 
// scrollTopToTop

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
        $("#btnScrollToTop").click(function(){
          $("html,body").animate({scrollTop:0},slow)
        
      })
  });
  // When the user clicks on the button, scroll to the top of the document
