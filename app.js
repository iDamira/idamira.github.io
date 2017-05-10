$(document).ready(function(){
  console.log("js connected");

  var bracketLeft = $("#bracket-left");
  var bracketRight = $("#bracket-right");

  var rotate = function(){
    bracketLeft.css({
      'transform': 'rotate(-360deg)'
    }, 1000).animate({
      opacity: 1
    }, 400);
        bracketRight.css({
      'transform': 'rotate(360deg)',
    }, 1000).animate({
      opacity: 1
    }, 400);
  };

  var moveToPositions = function(){
    bracketLeft.animate({
      left: '40vw'
    }, 400);
    bracketRight.animate({
      right: '40vw'
    }, 400);
  }

  var textAppear = function(){
    $("h1").css("opacity","1");
  };

  setTimeout(textAppear, 2000);
  setTimeout(rotate, 500);
  setTimeout(moveToPositions, 800);

});


