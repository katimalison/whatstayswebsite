$(document).ready(function() {

  $('.selection-box').hover(

    function() {
      // var colors = ['#ff0000', '#B35A42', '#0000ff'];
      // var random_color = colors[Math.floor(Math.random() * colors.length)];
      // $(this).css({
      //   "background-color": 'transparent'
      // });
      $(this).addClass('animated pulse infinite');
      // $(this).find('.box-text-background').hide();
      // $(this).find('.box-text').show(300);

    },

    function() {
      // var colors = ['#ff0000', '#B35A42', '#0000ff'];
      // var random_color = colors[Math.floor(Math.random() * colors.length)];
      $(this).removeClass('animated pulse infinite');
      if (!$(this).data('clicked')) {
        // $(this).css({
        //   "background-color": "rgba(255,244,194, 0.4)"
        // });
        // $(this).find('.box-text').hide();
        // $(this).find('.box-text-background').show(300);
      }
    }
  );

  $('.img-whatstays').hover(
    function() {
      $(this).addClass('animated pulse infinite');
    },

    function() {
      $(this).removeClass('animated pulse infinite');
    }
  );

  $('.img-whatstays').click(
    function() {
      // window.open('https://soundcloud.com/kati-malison/sets/what-stays-single-contenders/s-r4TSPT2aRc5?si=1ac1f25e13014053b0ebec4c1246e61d', '_blank').focus();
    }
  );

});

function closeContent(content_id) {

  var box_id = content_id + '-box'
  $(content_id).hide(500);
  $(box_id).data('clicked', false)
  // $(box_id).css({"background-color": "rgba(255, 244, 194, 0.4)"});
  // $(box_id).parent().css('background-color', 'transparent');
  $(box_id).removeClass('animated pulse infinite');
}

function closeAll() {
  if ($("#aboutWhatStays").is(":visible")) {
    closeContent("#aboutWhatStays")
    return false;
  }
  if ($("#coverArt").is(":visible")) {
    closeContent("#coverArt")
    return false;
  }
  if ($("#credits").is(":visible")) {
    closeContent("#credits")
    return false;
  }
  if ($("#spotifyVisuals").is(":visible")) {
    closeContent("#spotifyVisuals")
    return false;
  }
  if ($("#listenWhatStays").is(":visible")) {
    closeContent("#listenWhatStays")
    return false;
  }
  if ($("#videoALight").is(":visible")) {
    closeContent("#videoALight")
    return false;
  }
  if ($("#videoMirrors").is(":visible")) {
    closeContent("#videoMirrors")
    return false;
  }
  if ($("#craterLake").is(":visible")) {
    closeContent("#craterLake")
    return false;
  }
  return true
}

function allClosed() {
  if ($("#aboutWhatStays").is(":visible")) {
    return false;
  }
  if ($("#coverArt").is(":visible")) {
    return false;
  }
  if ($("#credits").is(":visible")) {
    return false;
  }
  if ($("#spotifyVisuals").is(":visible")) {
    return false;
  }
  if ($("#listenWhatStays").is(":visible")) {
    return false;
  }
  if ($("#videoALight").is(":visible")) {
    return false;
  }
  if ($("#videoMirrors").is(":visible")) {
    return false;
  }
  if ($("#craterLake").is(":visible")) {
    return false;
  }
  return true
}

function animateGrow(box_id) {
  $(box_id).animate({height: "330px"}, 500);
}

function animateShrink(box_id) {
  $(box_id).animate({height: "70px"}, 400);
}

function setBright(box_id) {
  $(box_id).parent().css({"opacity" : 1});
  $(box_id).parent().css({"background-color" : "rgba(255, 244, 194, 0.6)"});
  $(box_id).css({"opacity" : 1});
}

function setDim(box_id) {
  $(box_id).parent().css({"opacity" : 0.6});
  $(box_id).parent().css({"background-color" : "rgba(255, 244, 194, 0.5)"});
  $(box_id).css({"opacity" : 1});
}

function setNormal(box_id) {
  $(box_id).css({"opacity" : 0.85});
  $(box_id).parent().css({"background-color" : "rgba(255, 244, 194, 0.6)"});
  $(box_id).parent().css({"opacity" : 1});
}

function growAll() {
    animateGrow("#aboutWhatStays-box");
    animateGrow("#coverArt-box");
    animateGrow("#credits-box");
    animateGrow("#spotifyVisuals-box");
    animateGrow("#listenWhatStays-box");
    animateGrow("#videoALight-box");
    animateGrow("#videoMirrors-box");
    animateGrow("#craterLake-box");
}

function shrinkAll() {
    animateShrink("#aboutWhatStays-box");
    animateShrink("#coverArt-box");
    animateShrink("#credits-box");
    animateShrink("#spotifyVisuals-box");
    animateShrink("#listenWhatStays-box");
    animateShrink("#videoALight-box");
    animateShrink("#videoMirrors-box");
    animateShrink("#craterLake-box");
}

function returnAll() {
    setNormal("#aboutWhatStays-box");
    setNormal("#coverArt-box");
    setNormal("#credits-box");
    setNormal("#spotifyVisuals-box");
    setNormal("#listenWhatStays-box");
    setNormal("#videoALight-box");
    setNormal("#videoMirrors-box");
    setNormal("#craterLake-box");
}

function dimAllBut(box_id) {
  setBright(box_id);

  if (box_id !== "#aboutWhatStays-box") {
    setDim("#aboutWhatStays-box");
  }
  if (box_id !== "#coverArt-box") {
    setDim("#coverArt-box");
  }
  if (box_id !== "#credits-box") {
    setDim("#credits-box");
  }
  if (box_id !== "#spotifyVisuals-box") {
    setDim("#spotifyVisuals-box");
  }
  if (box_id !== "#listenWhatStays-box") {
    setDim("#listenWhatStays-box");
  }
  if (box_id !== "#videoALight-box") {
    setDim("#videoALight-box");
  }
  if (box_id !== "#videoMirrors-box") {
    setDim("#videoMirrors-box");
  }
  if (box_id !== "#craterLake-box") {
    setDim("#craterLake-box");
  }

}

function closeAll() {
  if ($("#aboutWhatStays").is(":visible")) {
    closeContent("#aboutWhatStays")
    return false;
  }
  if ($("#coverArt").is(":visible")) {
    closeContent("#coverArt")
    return false;
  }
  if ($("#credits").is(":visible")) {
    closeContent("#credits")
    return false;
  }
  if ($("#spotifyVisuals").is(":visible")) {
    closeContent("#spotifyVisuals")
    return false;
  }
  if ($("#listenWhatStays").is(":visible")) {
    closeContent("#listenWhatStays")
    return false;
  }
  if ($("#videoALight").is(":visible")) {
    closeContent("#videoALight")
    return false;
  }
  if ($("#videoMirrors").is(":visible")) {
    closeContent("#videoMirrors")
    return false;
  }
  if ($("#craterLake").is(":visible")) {
    closeContent("#craterLake")
    return false;
  }
  return true
}

function allClosed() {
  if ($("#aboutWhatStays").is(":visible")) {
    return false;
  }
  if ($("#coverArt").is(":visible")) {
    return false;
  }
  if ($("#credits").is(":visible")) {
    return false;
  }
  if ($("#spotifyVisuals").is(":visible")) {
    return false;
  }
  if ($("#listenWhatStays").is(":visible")) {
    return false;
  }
  if ($("#videoALight").is(":visible")) {
    return false;
  }
  if ($("#videoMirrors").is(":visible")) {
    return false;
  }
  if ($("#craterLake").is(":visible")) {
    return false;
  }
  return true
}

function toggleContent(content_id, box_id) {
  // if ($(content_id).is(":visible")) {
  //   closeContent(content_id);
  //     returnAll();
  //     growAll();
  // } else {
  //   if (closeAll()) {
  //     $(content_id).show(500, function() {
  //       shrinkAll();
  //     });
  //     // $(box_id).parent().css('background-color', "rgba(131,141,176,0.7)");
  //   } else {
  //     growAll();
  //     // $(content_id).delay(500).show(500);
  //     shrinkAll();
  //     // $(box_id).parent().css('background-color', "rgba(131,141,176,0.7)");
  //   }
  //   dimAllBut(box_id);
  //   $(box_id).data('clicked', true)
  // }

}

// function aboutWhatStays() {
//   var content_id = "#aboutWhatStays";
//   var box_id = content_id + "-box";
//
//   toggleContent(content_id, box_id);
// }
//
// function coverArt() {
//   var content_id = "#coverArt";
//   var box_id = content_id + "-box";
//
//   toggleContent(content_id, box_id);
// }
//
// function credits() {
//   var content_id = "#credits";
//   var box_id = content_id + "-box";
//
//   toggleContent(content_id, box_id);
// }
//
// function spotifyVisuals() {
//   var content_id = "#spotifyVisuals";
//   var box_id = content_id + "-box";
//
//   toggleContent(content_id, box_id);
// }
//
// function listenWhatStays() {
//   var content_id = "#listenWhatStays";
//   var box_id = content_id + "-box";
//
//   toggleContent(content_id, box_id);
// }
//
// function videoALight() {
//
//   // $('#videoALight-box').animate({opacity: 0}, 0).css("background-image", "url(image.jpeg)").animate({opacity: 1}, 2500);
//   var content_id = "#videoALight";
//   var box_id = content_id + "-box";
//
//   toggleContent(content_id, box_id);
// }
//
// function videoMirrors() {
//   var content_id = "#videoMirrors";
//   var box_id = content_id + "-box";
//
//   toggleContent(content_id, box_id);
// }
//
// function craterLake() {
//   var content_id = "#craterLake";
//   var box_id = content_id + "-box";
//
//   toggleContent(content_id, box_id);
// }
