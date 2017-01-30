$(document).ready(function(){
  $('.bxslider').bxSlider({
    auto: true,
    mode: 'fade',
    pager: false,
    onSliderLoad: function(){
      $('.bxslider-wrapper').css('visibility', 'visible');
    }
  });
});
