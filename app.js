// initail storage object

const dataStorage = new Storage;

// Get storage location data
const data = dataStorage.getLocationData();

// console.log(data);

// initail weather object

const weather = new Weather(data.city, data.state);


// initail UI object

const ui = new UI;

// get weather on DOM load

document.addEventListener('DOMContentLoaded',getWeather);

// chage location event
document.getElementById('w-change-btn').addEventListener('click',(e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  weather.changeLocation(city,state);
  dataStorage.setLocationData(city,state);
  getWeather();
  //close modal
  $('#locModal').modal('hide');
});

// weather.changeLocation('Bangkok','Thailand');


function getWeather(){
  weather.getWeather().then(results => {
    ui.paint(results);
    // console.log(results);
  }).catch();
}



