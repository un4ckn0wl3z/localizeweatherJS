class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(results){
    this.location.textContent = results.display_location.full;
    this.desc.textContent = results.weather;
    this.string.textContent = results.temperature_string;
    this.icon.setAttribute('src', results.icon_url);
    this.humidity.textContent = 'Relative Humidity: ' + results.relative_humidity;
    this.feelsLike.textContent = 'Feels Like: ' + results.feelslike_string;
    this.dewpoint.textContent = 'DewPoint: ' + results.dewpoint_string;
    this.wind.textContent = 'Wind: ' + results.wind_string;
  }
}