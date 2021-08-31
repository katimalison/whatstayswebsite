$(document).ready(function() {

   $('.tuscany-pink').hover(

      function () {
        var colors = ['#ff0000', '#B35A42', '#0000ff'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
         $(this).css({"background-color":'transparent'});
         $(this).addClass('animated pulse infinite');
      },

      function () {
        var colors = ['#ff0000', '#B35A42', '#0000ff'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
         $(this).css({"background-color":random_color});
         $(this).removeClass('animated pulse infinite');
      }
   );

   $('span').hover(

      function () {
         $(this).css({"color":"red"});
      },

      function () {
         $(this).css({"color":"blue"});
      }
   );


});


function aboutWhatStays() {
  document.getElementById("aboutWhatStays").innerHTML = "changed.";
}

function aboutKatiMalison() {
  document.getElementById("aboutKatiMalison").innerHTML = "changed.";
}

function aboutRecordingProcess() {
  document.getElementById("aboutRecordingProcess").innerHTML = "changed.";
}

function aspirations() {
  document.getElementById("aspirations").innerHTML = "changed.";
}

function listenWhatStays() {
  document.getElementById("listenWhatStays").innerHTML = "changed.";
}

function videoALight() {
  document.getElementById("videoALight").innerHTML = "changed.";
}

function videoMirrors() {
  document.getElementById("videoMirrors").innerHTML = "changed.";
}

function lyricBook() {
  document.getElementById("lyricBook").innerHTML = "changed.";
}
