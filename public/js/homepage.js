$(document).ready(function(){
  $('.bxslider').bxSlider({
    pager: false,
    onSliderLoad: function(){
      $('.bxslider-wrapper').css('visibility', 'visible');
    }
  });
});
