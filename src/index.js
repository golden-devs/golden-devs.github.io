import axios from 'axios';
import './scss/style.scss';

$(document).ready(function() {
  $('#js-contact-form').on('submit', function(e) {
    e.preventDefault();
    const { name, email, phone, message, submit } = e.target;

    $('#name-help').text('');
    $('#name-help').css('display', 'none');
    $('#email-help').text('');
    $('#email-help').css('display', 'none');
    $('#phone-help').text('');
    $('#phone-help').css('display', 'none');
    $('#message-help').text('');
    $('#message-help').css('display', 'none');

    submit.setAttribute('disabled', '');
    submit.setAttribute('aria-disabled', 'true');

    axios.post('https://golden-devs-contact.glitch.me/contact', {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value
    })
      .then(function(response) {
        $('#form-alert').css('display', 'block');
        $('#form-alert').focus();
      })
      .catch(function(error) {
        const { errors } = error.response.data;
        console.error(errors);

        errors.forEach(function({ msg, param }) {
          const elem = $(`#${param}-help`);
          elem.text(msg);
          elem.css('display', 'unset');
        });
      })
      .then(function() {
        setTimeout(function() {
          $('#form-alert').css('display', 'none');
          submit.removeAttribute('disabled');
          submit.removeAttribute('aria-disabled');
        }, 3000);
      });
  });
});
new WOW({ mobile: false }).init();
