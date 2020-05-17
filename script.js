// open weather API KEY 3b95a3fec983ab519a29476d2ec88e12
$(document).ready(function(){
function searchFunction() {
  input = document.getElementById("input-city");
  input.value;
}
var eventsHeader = document.getElementById("current-weather");
eventsHeader.innerHTML = " <strong>Hey!</strong>";

// add event listener and console.log button click
$("#citySearch").click(function () {
  var str = $("#input-city").val();
  openWeather(str);
  console.log(str);
  console.log("click");
});
// button click console log input
// make a function that calls on the open weather api and uses the input to call the city or state
function openWeather(getCity) {
  var queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    getCity +
    "&appid=3b95a3fec983ab519a29476d2ec88e12";

  $.ajax({
    type:"GET",
    url: queryURL,
    dataType: "json",
    success: function(response) {
      console.log("cities");
      console.log(response.list);
      // response is an array
      // I have to loop through array to get info I want
      for (var i = 0; i < response.list.length; i++) {
        var day= response.list[i];
        // i want venue information from response
        if(day.dt_txt.indexOf("15:00:00") !== -1) {
          var card = $("<div>").addClass("card col-md-2");
          var city = $("<h3>").text(day.weather[0].name);
          var temp = $("<h3>").text(day.main.temp + "°F");
          var humidity = $("<p>").text(day.main.humidity);
          var description = $("<h3>").html(day.weather[0].description);
          // var country = $("<p>").text(response[i].venue.country);
          card.append(temp,humidity,description,city);
          $("#forecast").append(card);
          console.log(day.main.temp);
          console.log(day.main.humidity);
          // console.log(response[i].venue.country);
        }
        
      }

     // var citiesResult = document.getElementById("cities");
    }
  });
  
}
// citySearch();
// make response show up in body .



     /* adding for loop to get and store local storage 
        var cityName = document.getElementById("city-input");


        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);

            localStorOutput.innerHTML += `${key}: ${value}<br />`;
        }*/

})
