$(document).ready(function(){
  $('#signup').submit(function(event){
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you,' + email + 'has been added to our mailing list!</p>');
    event.preventDefault();
  });
});
