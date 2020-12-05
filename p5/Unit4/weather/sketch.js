
var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var y = 0;

var windspeed = 0 ;
var temperature = 0;
var humidity = 0;
var name;


function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather.

    var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Bloomington,IL,US&units=imperial&';

var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61703units=imperial&';

  var myIDString = 'appid=030f7958c7d7f2a07e48d18fdd03a3f8'; // INCLUDED APPID

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
windspeed = weather.wind.speed;
temperature = weather.main.temp;
humidity = weather.main.humidity;
name= weather.name;


}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(255, 204,0,temperature/20);
      fill('black');
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("Windspeed is " + windspeed + "mph", 20, 40);
      text("Temperature is " + temperature  + " F", 40, 60);
      text("Humidity is " + humidity + "%", 60, 80);

      text("Humidity is " + humidity + "%", 60, 80);

      // cloud

        // rain

      noStroke();
      fill(0,0,255, 10);
      rect((x-100), (200), 200,300);

      ellipse(x, y, 200, 100);


      fill('white');
      noStroke();
      ellipse(x, 200, 200, 100);
      fill('black');
      text(windspeed + "mph", (x-20), 200);

      fill('black');
            text(humidity + "% Humidity", (x-40), 240);


      // move the cloud's x position
      x = x + windspeed/4;
      if (x > width) x = 0;



      // move the cloud's x position
      y = y + humidity/40;
      if (y < 200) y = 200;
      if (y > height) y = 200;

        break;
  }
}
