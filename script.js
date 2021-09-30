$(document).ready(function() {

   $('.selection-box').hover(

      function () {
        // var colors = ['#ff0000', '#B35A42', '#0000ff'];
        // var random_color = colors[Math.floor(Math.random() * colors.length)];
         $(this).css({"background-color":'transparent'});
         $(this).addClass('animated pulse infinite');
         // $(this).find('.box-text-background').hide();
         // $(this).find('.box-text').show(300);

      },

      function () {
        // var colors = ['#ff0000', '#B35A42', '#0000ff'];
        // var random_color = colors[Math.floor(Math.random() * colors.length)];
        $(this).removeClass('animated pulse infinite');
        if (!$(this).data('clicked')) {
         $(this).css({"background-color":"#343a40"});
         // $(this).find('.box-text').hide();
         // $(this).find('.box-text-background').show(300);
       }
      }
   );

   // $('.selection-box').click(
   //
   //    function () {
   //      var boxname = '#' + $(this).attr('id') + '-box';
   //
   //      if ($(this).is(":visible")) {
   //        $(this).hide(500);
   //        $(this).data('clicked', false)
   //      } else {
   //        if (allClosed()) {
   //          $(this).show(500);
   //        } else {
   //          $(this).delay(500).show(500);
   //        }
   //        $(this).data('clicked', true)
   //      }
   //
   //    },
   // );

   $('.whatstaysheader').hover(
      function () {
        var colors = ['#ff0000', '#B35A42', '#0000ff'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
         $(this).css({"color":'#ce4027'});
         $(this).addClass('animated pulse infinite');
      },

      function () {
        var colors = ['#ff0000', '#B35A42', '#0000ff'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
         $(this).css({"color":'#B35A42'});
         $(this).removeClass('animated pulse infinite');
      }
   );

   $('.whatstaysheader').click(
      function () {
        window.open('https://soundcloud.com/kati-malison/sets/what-stays-rev-3-masters/s-2XN4d9vyuXF', '_blank').focus();
      }
    );

});

function closeThisThing(thing) {

  var thing_box = thing + '-box'
  $(thing).hide(500);
  $(thing_box).data('clicked', false)
  $(thing_box).css({"background-color":"#343a40"});
  $(thing_box).removeClass('animated pulse infinite');
}



function allClosed() {
  if ($("#aboutWhatStays").is(":visible")) {
    closeThisThing("#aboutWhatStays")
    return false;
  }
  if ($("#aboutKatiMalison").is(":visible")) {
    closeThisThing("#aboutKatiMalison")
    return false;
  }
  if ($("#aboutRecordingProcess").is(":visible")) {
    closeThisThing("#aboutRecordingProcess")
    return false;
  }
  if ($("#aspirations").is(":visible")) {
    closeThisThing("#aspirations")
    return false;
  }
  if ($("#listenWhatStays").is(":visible")) {
    closeThisThing("#listenWhatStays")
    return false;
  }
  if ($("#videoALight").is(":visible")) {
    closeThisThing("#videoALight")
    return false;
  }
  if ($("#videoMirrors").is(":visible")) {
    closeThisThing("#videoMirrors")
    return false;
  }
  if ($("#lyricBook").is(":visible")) {
    closeThisThing("#lyricBook")
    return false;
  }
  return true
}


function aboutWhatStays() {

  if ($("#aboutWhatStays").is(":visible")) {
    $("#aboutWhatStays").hide(500);
    $("#aboutWhatStays-box").data('clicked', false)
  } else {
    if (allClosed()) {
      $("#aboutWhatStays").show(500);
      $(this).css('border-width', 'thick');
    } else {
      $("#aboutWhatStays").delay(500).show(500);
      $(this).css('border-width', 'thick');
    }
    $("#aboutWhatStays-box").data('clicked', true)
  }
}

function aboutKatiMalison() {
  if ($("#aboutKatiMalison").is(":visible")) {
    $("#aboutKatiMalison").hide(500);
    $("#aboutKatiMalison-box").data('clicked', false)
  } else {
    if (allClosed()) {
      $("#aboutKatiMalison").show(500);
    } else {
      $("#aboutKatiMalison").delay(500).show(500);
    }
    $("#aboutKatiMalison-box").data('clicked', true)
  }
}

function aboutRecordingProcess() {
  if ($("#aboutRecordingProcess").is(":visible")) {
    $("#aboutRecordingProcess").hide(500);
    $("#aboutRecordingProcess-box").data('clicked', false)
  } else {
    if (allClosed()) {
      $("#aboutRecordingProcess").show(500);
    } else {
      $("#aboutRecordingProcess").delay(500).show(500);
    }
    $("#aboutRecordingProcess-box").data('clicked', true)
  }
}

function aspirations() {
  if ($("#aspirations").is(":visible")) {
    $("#aspirations").hide(500);
    $("#aspirations-box").data('clicked', false)
  } else {
    if (allClosed()) {
      $("#aspirations").show(500);
    } else {
      $("#aspirations").delay(500).show(500);
    }
    $("#aspirations-box").data('clicked', true)
  }
}

function listenWhatStays() {
  if ($("#listenWhatStays").is(":visible")) {
    $("#listenWhatStays").hide(500);
    $("#listenWhatStays-box").data('clicked', false)
  } else {
    if (allClosed()) {
      $("#listenWhatStays").show(500);
    } else {
      $("#listenWhatStays").delay(500).show(500);
    }
    $("#listenWhatStays-box").data('clicked', true)
  }
}

function videoALight() {
  if ($("#videoALight").is(":visible")) {
    $("#videoALight").hide(500);
    $("#videoALight-box").data('clicked', false)
  } else {
    if (allClosed()) {
      $("#videoALight").show(500);
    } else {
      $("#videoALight").delay(500).show(500);
    }
    $("#videoALight-box").data('clicked', true)
  }
}

function videoMirrors() {
  if ($("#videoMirrors").is(":visible")) {
    $("#videoMirrors").hide(500);
    $("#videoMirrors-box").data('clicked', false)
  } else {
    if (allClosed()) {
      $("#videoMirrors").show(500);
    } else {
      $("#videoMirrors").delay(500).show(500);
    }
    $("#videoMirrors-box").data('clicked', true)
  }
}

function lyricBook() {
  if ($("#lyricBook").is(":visible")) {
    $("#lyricBook").hide(500);
    $("#lyricBook-box").data('clicked', false)
  } else {
    if (allClosed()) {
      $("#lyricBook").show(500);
    } else {
      $("#lyricBook").delay(500).show(500);
    }
    $("#lyricBook-box").data('clicked', true)
  }
}
