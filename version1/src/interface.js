$ (document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();


    $('#temperature-up').on('click', function(){
      thermostat.up();
      updateTemperature();
    })

    $('#temperature-down').on('click', function(){
      thermostat.down();
      updateTemperature();
    })

    $('#temperature-reset').on('click', function(){
      thermostat.reset();
      updateTemperature();
    })

    $('#powersaving').on('click', function() {
      thermostat.togglePowerSavingMode();
      if (thermostat.isPowerSavingModeOn())
        $('#powersaving').text('TURN OFF');
      else
        $('#powersaving').text('TURN ON');
        updateTemperature();


    })
    function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  if(thermostat.energyUsage() === 'low-usage') {
    $('#temperature').css('color', 'green')
  } else if(thermostat.energyUsage() === 'medium-usage') {
    $('#temperature').css('color', 'black')
  } else {
    $('#temperature').css('color', 'red')
  }
}

displayWeather('London');
$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})

function displayWeather(city) {
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
 var units = '&units=metric';
 $.get(url + token + units, function(data) {
   $('#current-temperature').text(data.main.temp);
 })

}
})
