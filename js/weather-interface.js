var apiKey = "ac4cd0a0188bdb1f0aaaa90f1b116362";

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val('');
    $('.showWeather').text('The city you have chosen is ' + city + ' .');
    $.get('http://openweathermap.org/data/2.5/weather?q=' + city + '&APIID=' + apiKey,
    function(response){
      console.log(response);
    })
  });
});
