import axios from 'axios';
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

  $('#js-contact-form').on('submit', function(e) {
    e.preventDefault();
    const { name, email, phone, message, submit } = e.target;

    submit.setAttribute('disabled', '');
    submit.setAttribute('aria-disabled', 'true');

    axios.post('https://golden-devs-contact.glitch.me/contact', {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.error(error.response.data.errors);
      })
      .then(function() {
        setTimeout(function() {
          submit.removeAttribute('disabled');
          submit.removeAttribute('aria-disabled');
        }, 3000);
      });
  });
});
new WOW({ mobile: false }).init();
