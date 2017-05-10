$(document).ready(function(){
  console.log("js connected");
// GLOBAL VARIABLES
  var bracketLeft = $("#bracket-left");
  var bracketRight = $("#bracket-right");
  var footer = $("#footer-block");
  var header = $("#header-block");
  var body = $("#body-block");
  var logo = $("h1, p");
// GLOBAL VARIABLES

// FUNCTIONS

  var changeLogoColor = function(){
    logo.css('color','grey');
  };

  var rotate = function(){
    bracketLeft.css({
      '-moz-transform': 'rotate(-360deg)',
      '-webkit-transform': 'rotate(-360deg)',
      '-o-transform': 'rotate(-360deg)',
      '-ms-transform': 'rotate(-360deg)',
      'transform': 'rotate(-360deg)',
      'opacity': 1
    });
    bracketRight.css({
      '-moz-transform': 'rotate(360deg)',
      '-webkit-transform': 'rotate(360deg)',
      '-o-transform': 'rotate(360deg)',
      '-ms-transform': 'rotate(360deg)',
      'transform': 'rotate(360deg)',
      'opacity': 1
    });
  };

  var moveToPositions = function(){
    bracketLeft.css({
      left: '40vw'
    });
    bracketRight.css({
      right: '40vw'
    });
  }

  var textAppear = function(){
    $("h1").css("opacity","1");
  };

  var removeBlocks = function(){
    footer.animate({
      right: '100vw'
    }, 1800);
    header.animate({
      right: '100vw'
    }, 1800);
    body.animate({
      left: '100vw',
      width: '0vw'
    }, 1800);
  };

  var animateLogo = function(){
    $("h1").animate({
      paddingBottom: '5vh'
    }, 1000);
    $("#type-it p").animate({
      top: '46vh',
      opacity: 1
    }, 1000);
  };


  var imageMail = $("img#mail");
  var imageGit = $("img#github");
  var imageLinked = $("img#linkedin");

  // $("img").on("mouseover", rotateImages);

  var rotateImages = function(){

     setTimeout(function(){
      // imageMail.toggleClass("rotate");
        imageMail.css({'transform':'rotateY(360deg)'},1000)}, 300);

     setTimeout(function(){
      // imageLinked.toggleClass("rotate");
        imageLinked.css({'transform':'rotateY(360deg)'},1000)},600);

     setTimeout(function(){
      // imageGit.toggleClass("rotate");
      imageGit.css({'transform':'rotateY(360deg)'},1000)},900);
  };

// console.log(imagesArray[1][0]);
// FUNCTIONS

// FUNCTIONS INVOCATIONS
  setTimeout(rotate, 1000);
  setTimeout(moveToPositions, 1300);
  setTimeout(textAppear, 2500);
  setTimeout(removeBlocks, 3500);
  setTimeout(changeLogoColor, 4500);
  setTimeout(animateLogo, 5000);
  setTimeout(rotateImages, 5400);
// FUNCTIONS INVOCATIONS

}); //END OF DOCUMENT.ready



