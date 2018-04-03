// initail weather object

const weather = new Weather('Bangkok','Thailand');

// initail UI

const ui = new UI;

// get weather on DOM load

document.addEventListener('DOMContentLoaded',getWeather);

// chage location event
document.getElementById('w-change-btn').addEventListener('click',(e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  weather.changeLocation(city,state);
  getWeather();
  //close modal
  $('#locModal').modal('hide');
});

// weather.changeLocation('Bangkok','Thailand');


function getWeather(){
  weather.getWeather().then(results => {
    ui.paint(results);
    console.log(results);
  }).catch();
}



