$(window).load(function() {
  // Loading animation
  $(".se-pre-con").fadeOut("slow");
});
 
$(document).ready(function() {
 
 //Pulsing social icons 
  $(".icons .fa").bind("mouseenter", function() {
    pulseF($(this));
  }).bind("mouseleave", function() {
    $(".icons .fa").stop();
    $(this).animate({
      fontSize: "60px"
        /* zoom:1*/
    }, 500);
  });
 
 //Hover effects for the circular button on the front page
  $(".bottom-button-container").hover(function() {
    $(".bottom-button-container").css("background-color", "#D3D3D3");
  }, function() {
    $(".bottom-button-container").css("background-color", "");
  });

//Scroll effect for the circular button on the front page
  $("#scrollSection").click(function() {
    $("html, body").animate({
      scrollTop: $("#about").offset().top - 55
    }, 500);
  });
  
  //Scroll effect for the circular button on the front page
   $(".bottom-button-container").click(function() {
    $("html, body").animate({
      scrollTop: secondDivStart
    }, 800);
  });
 
 //Scroll effects for the menu
  $("nav a").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 55
    }, 500);
    return false;
  });
 
 //Typed text
  showName(".intro-name", "Hi, I'm Name Name", 0, 70);
  setTimeout(function() {
    showName(".intro-title", "Aspiring Software Developer", 0, 90);
  }, 900);
 
 //Animating top images
  setInterval(switchImages, 9000);
 
 //Line animation
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".line").animate({
        width: "100%"
      }, "slow");
    }
  });
 
 //Angled buttons animation
  $(".button-left").click(function() {
    switchImageInResponseToClick();
  });
  $(".button-right").click(function() {
    switchImageInResponseToClick();
  });

});
 
//Changing images in the background
var currentImg = 0;
var secondDivStart = $(".slider").outerHeight();
 
var images = Array("http://i358.photobucket.com/albums/oo27/picturesqueworlds/comp4_zpsfibomdah.jpg", /*"http://i358.photobucket.com/albums/oo27/picturesqueworlds/coffee_zpsqr8mcavb.jpeg"*/ "http://i358.photobucket.com/albums/oo27/picturesqueworlds/mountain2_zpsvb6urfn1.jpg");
 
function switchImages() {
  var newImage = images[currentImg];
 
  $(".slider").fadeTo(450, 0.8, function() {
    $(".slider").css("background-image", "url(" + newImage + ")").fadeTo(500, 1);
  });

  currentImg++;
  if (currentImg > images.length - 1) {
    currentImg = 0;
  }
}
 
function switchImageInResponseToClick() {
  var newImage = images[currentImg];
 
  $(".slider").css("background-image", "url(" + newImage + ")");
 
  currentImg++;
  if (currentImg > images.length - 1) {
    currentImg = 0;
  }
}
 
//Type-writing name and title
var showName = function(position, text, index, time) {
  $(position).append(text[index++]);
  setTimeout(function() {
    showName(position, text, index, time);
  }, time);
}
 //Pulse
function pulseF(obj) {
  obj.animate({
    fontSize: "45px"
  }, 400, function() {
    obj.animate({
      fontSize: "60px"
        /*zoom: 1*/
    }, 400, function() {
      pulseF(obj);
    });
  });
}
