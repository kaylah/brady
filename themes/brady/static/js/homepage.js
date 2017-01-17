var hideVideo = function(){
      document.getElementById('new-year-video').pause();
      $('.video-wrapper').removeClass('show');
    },
    showVideo = function(e){
      e.preventDefault();
      $('.video-wrapper').addClass('show');
      document.getElementById('new-year-video').play();
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

  $('#new-year-play-button').on('click', showVideo);
  $('#close-video-button').on('click', hideVideo);
  document.getElementById('new-year-video').addEventListener('ended', hideVideo, false);
});
