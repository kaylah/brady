(function ($) {
    $.fn.serializeFormJSON = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);

var showErrorNotification = function() {
  $('.form-notification').addClass('error');
};

var showSuccessNotification = function() {
  $('.form-notification').addClass('success');
};

var removeNotification = function() {
 $('.form-notification').removeClass('error');
 $('.form-notification').removeClass('success');
};

var submitContactForm = function (e) {
  e.preventDefault();
  $.ajax({
    url: e.target.action,
    type: 'POST',
    dataType: 'json',
    data: $(this).serializeFormJSON(),
    error: showErrorNotification,
    success: showSuccessNotification
  });
};

$(document).ready(function(){
  $('#contact-form').on( 'submit', submitContactForm );

  $('.remove-notification').on( 'click', removeNotification );
});
