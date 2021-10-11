$(document).ready(function() {

  $('.picture-box').hover(

    function() {
      // var colors = ['#ff0000', '#B35A42', '#0000ff'];
      // var random_color = colors[Math.floor(Math.random() * colors.length)];
      $(this).css({
        "background-color": 'transparent'
      });
      $(this).addClass('animated pulse infinite');
      // $(this).find('.box-text-background').hide();
      // $(this).find('.box-text').show(300);

    },

    function() {
      // var colors = ['#ff0000', '#B35A42', '#0000ff'];
      // var random_color = colors[Math.floor(Math.random() * colors.length)];
      $(this).removeClass('animated pulse infinite');
      if (!$(this).data('clicked')) {
        $(this).css({
          "background-color": "rgba(255,244,194, 0.5)"
        });
        // $(this).find('.box-text').hide();
        // $(this).find('.box-text-background').show(300);
      }
    }
  );

  // $('.picture-box').click(
  //
  //    function () {
  //      var box_id = '#' + $(this).attr('id') + '-box';
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
    function() {
      var colors = ['#ff0000', '#B35A42', '#0000ff'];
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      $(this).addClass('animated pulse infinite');
    },

    function() {
      var colors = ['#ff0000', '#B35A42', '#0000ff'];
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      $(this).removeClass('animated pulse infinite');
    }
  );

  $('.whatstaysheader').click(
    function() {
      window.open('https://soundcloud.com/kati-malison/sets/what-stays-rev-3-masters/s-2XN4d9vyuXF', '_blank').focus();
    }
  );

});

function closeContent(content_id) {

  var box_id = content_id + '-box'
  $(content_id).hide(500);
  $(box_id).data('clicked', false)
  $(box_id).css({"background-color": "rgba(255,244,194, 0.5)"});
  $(box_id).parent().css('background-color', 'transparent');
  $(box_id).removeClass('animated pulse infinite');
}



function allClosed() {
  if ($("#aboutWhatStays").is(":visible")) {
    closeContent("#aboutWhatStays")
    return false;
  }
  if ($("#aboutKatiMalison").is(":visible")) {
    closeContent("#aboutKatiMalison")
    return false;
  }
  if ($("#aboutRecordingProcess").is(":visible")) {
    closeContent("#aboutRecordingProcess")
    return false;
  }
  if ($("#aspirations").is(":visible")) {
    closeContent("#aspirations")
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
  if ($("#lyricBook").is(":visible")) {
    closeContent("#lyricBook")
    return false;
  }
  return true
}

function toggleContent(content_id, box_id) {
  if ($(content_id).is(":visible")) {
    closeContent(content_id);
  } else {
    if (allClosed()) {
      $(content_id).show(500);
      $(box_id).parent().css('background-color', 'white');
    } else {
      $(content_id).delay(500).show(500);
      $(box_id).parent().css('background-color', 'white');
    }
    $(box_id).data('clicked', true)
  }

}

function aboutWhatStays() {
  var content_id = "#aboutWhatStays";
  var box_id = content_id + "-box";

  toggleContent(content_id, box_id);
}

function aboutKatiMalison() {
  var content_id = "#aboutKatiMalison";
  var box_id = content_id + "-box";

  toggleContent(content_id, box_id);
}

function aboutRecordingProcess() {
  var content_id = "#aboutRecordingProcess";
  var box_id = content_id + "-box";

  toggleContent(content_id, box_id);
}

function aspirations() {
  var content_id = "#aspirations";
  var box_id = content_id + "-box";

  toggleContent(content_id, box_id);
}

function listenWhatStays() {
  var content_id = "#listenWhatStays";
  var box_id = content_id + "-box";

  toggleContent(content_id, box_id);
}

function videoALight() {
  var content_id = "#videoALight";
  var box_id = content_id + "-box";

  toggleContent(content_id, box_id);
}

function videoMirrors() {
  var content_id = "#videoMirrors";
  var box_id = content_id + "-box";

  toggleContent(content_id, box_id);
}

function lyricBook() {
  var content_id = "#lyricBook";
  var box_id = content_id + "-box";

  toggleContent(content_id, box_id);
}
