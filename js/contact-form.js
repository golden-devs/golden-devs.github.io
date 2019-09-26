(function($) {
  $('#js-contact-form').on('submit', function(e) {
    e.preventDefault();

    e.target['form-submit'].setAttribute('disabled', '');
    $('#js-form-alert').removeClass('alert-success');
    $('#js-form-alert').removeClass('alert-danger');
    $('#js-form-alert').addClass('alert-info');

    $('#js-form-alert').css('display', 'block');
    $('#js-form-alert').text('Sending message...');

    Promise.resolve($.ajax(
      'https://golden-devs-contact.glitch.me/contact',
      {
        data: {
          name: e.target['form-name'].value,
          email: e.target['form-email'].value,
          subject: e.target['form-email'].value,
          message: e.target['form-message'].value
        },
        method: 'POST',
      }
    ))
      .then(
        function(json) {
          $('#js-form-alert').removeClass('alert-info');
          $('#js-form-alert').addClass('alert-success');
          $('#js-form-alert').css('display', 'block');
          $('#js-form-alert').text('Your message has been sent. Thank you!');
        }
      )
      .catch(
        function(error) {
          console.error(error.responseJSON);
          $('#js-form-alert').removeClass('alert-info');
          $('#js-form-alert').addClass('alert-danger');
          $('#js-form-alert').css('display', 'block');
          $('#js-form-alert').text("Couldn't send message. Please try again");
        }
      )
      .then(
        function() {
          setTimeout(function() {
            $('#js-form-alert').css('display', 'none');
            e.target['form-submit'].removeAttribute('disabled');
          }, 3000);
        }
      );
  });
})(jQuery);
