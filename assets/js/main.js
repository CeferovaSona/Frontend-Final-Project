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
// slider section

// standart product list index

$(document).ready(function(){
  $(".add").click(function(){
    var value = $("#quantify-input").val();  
     value=value+1;
  })
})

$(document).ready(function(){
  $(".sub").click(function(){
    var mark = $("#quantify-input").val();  
     mark=mark-1;
  })
})

// addToCart section
$(document).ready(function(){
  $("#price").click(function(){
    
      $('#addition').show();
      
  })
})
// accordion html 
$(function () {
  $("#accordion").accordion({
      heightStyle: "fill",
      icons: {
          "header": "ui-icon-circle-plus",
          "headerSelected": "ui-icon-circle-minus"
      }
  });
  $("input").each(function () {
      $(this).change(function () {
          if ($(this).attr("id") == "1") {
              $("#accordion").accordion("option", "icons", {
                  "header": "ui-icon-circle-plus",
                  "headerSelected": "ui-icon-circle-minus"
              });
          } else if ($(this).attr("id") == "2") {
              $("#accordion").accordion("option", "icons", {
                  "header": "ui-icon-plus",
                  "headerSelected": "ui-icon-minus"
              });
          }
          $("#accordion").accordion("refresh");
      });
  });
});
// footer section 
