// initail weather object

const weather = new Weather('Bangkok','Thailand');

// initail UI

const ui = new UI;

// get weather on DOM load

document.addEventListener('DOMContentLoaded',getWeather);

// weather.changeLocation('Bangkok','Thailand');

function getWeather(){
  weather.getWeather().then(results => {
    ui.paint(results);
  }).catch();
}



