import './scss/style.scss';

$(document).ready(function() {
  $('.only-numeric').bind('keypress', function(e) {
    var keyCode = e.which ? e.which : e.keyCode;
    if (!(keyCode >= 48 && keyCode <= 57)) {
      $('.error').css('display', 'inline');
      return false;
    } else {
      $('.error').css('display', 'none');
    }
  });
});
new WOW({ mobile: false }).init();
