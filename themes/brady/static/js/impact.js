var hideVideo = function(){
      document.getElementById('impact-intro-video').pause();
      $('.video-wrapper').removeClass('show');
    },
    showVideo = function(e){
      e.preventDefault();
      $('.video-wrapper').addClass('show');
      document.getElementById('impact-intro-video').play();
    };

$(document).ready(function(){
  $('.bxslider').bxSlider({
    auto: true,
    mode: 'fade',
    pager: false,
    onSliderLoad: function(){
      $('.bxslider-wrapper').css('visibility', 'visible');
    }
  });

  $('#impact-intro-play-button').on('click', showVideo);
  $('#close-video-button').on('click', hideVideo);
  document.getElementById('impact-intro-video').addEventListener('ended', hideVideo, false);
});
