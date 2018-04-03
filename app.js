// initail weather object

const weather = new Weather('Bangkok','Thailand');

// get weather on DOM load

document.addEventListener('DOMContentLoaded',getWeather);

// weather.changeLocation('Bangkok','Thailand');

function getWeather(){
  weather.getWeather().then(results => {
    console.log(results);
  }).catch();
}



