$(document).ready(function () {
//   var getCity = "atlanta";
//   openWeather(getCity);
  // add event listener and console.log button click
  $("#citySearch").on("click",function () {
    var str = $("#input-city").val();
    console.log(str);
    openWeather(str);

  });
  function openWeather(getCity) {
    var queryURL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      getCity +
      "&appid=3b95a3fec983ab519a29476d2ec88e12";
    $.ajax({
      type: "GET",
      url: queryURL,
      // "http://api.openweathermap.org/data/2.5/weather?q=boston&appid=3b95a3fec983ab519a29476d2ec88e12&units=imperial",
      dataType: "json",
      success: function (data) {
        console.log(data);
        alert(data.main.temp);
      },
    });
  }
});
