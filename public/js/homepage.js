var hideVideo = function(e){
      $videoWrapper = $(e.target).closest('.video-wrapper');
      $videoWrapper.find('.video').get(0).pause();
      $videoWrapper.removeClass('show');
    },
    showVideo = function(e){
      e.preventDefault();
      $videoWrapper = $(e.target).closest('p').next('.video-wrapper');
      $videoWrapper.addClass('show');
      $videoWrapper.find('.video').get(0).play();
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

  $('.video-play-button').on('click', showVideo);
  $('.close-video-button').on('click', hideVideo);
  var videos = document.getElementsByClassName('video');
  for (var i=0; i < videos.length; i++) {
    videos[i].addEventListener('ended', hideVideo, false);
  }
});
