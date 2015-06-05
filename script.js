$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function() {
  $(".line").animate({
    width: "100%"
  }, "slow");

  switchImages();
  setInterval(switchImages, 6000);

  showName(".intro-name", "HI, I'M NAME NAME", 0, 70);

  setTimeout(function() {
    showName(".intro-title", "Aspiring Software Developer", 0, 90);
  }, 900);
});

//Changing images in the background
var currentImg = 0;

var images = Array("http://i358.photobucket.com/albums/oo27/picturesqueworlds/tree3_zpstq9gvtgc.jpg", "http://i358.photobucket.com/albums/oo27/picturesqueworlds/sanfran3_zpskong5zp1.jpg");

function switchImages() {
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
