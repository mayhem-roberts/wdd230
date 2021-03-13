const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=370e73cb3b7a4111b9e28b6e29d837cc&units=imperial';



//get value of temp and speed
let tempF = 34
let speed = 12
//call windChill function and store in windchill var
let windchill = windChill(tempF, speed);
//output windchill
document.getElementById("tempF").innerHTML = tempF + "&deg F";
document.getElementById("speed").innerHTML = speed + "mph";
document.getElementById("windChill").innerHTML = windchill; 
      
function windChill(tempF, speed) {
  //The formula for computing the wind chill factor is    f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
  let t = tempF;
  let s = Math.pow(speed, .16);
  let message = "No Wind Chill";
    
  if (tempF < 50 && speed > 3) {
    f = 35.74 + 0.6215 * t - 35.75 * s + 0.4275 * t * s;
    f = Math.round(f);
    return `${f}&deg F`;
  }
  else {
    message;
    return message;
  }
}