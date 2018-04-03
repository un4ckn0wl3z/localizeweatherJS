class Weather {

  constructor(city,state) {
    this.apiKey = 'aa9f2ba366245965';
    this.city = city;
    this.state = state;
  }

  // fetch weater information from API

  async getWeather(){
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
    const responseData = await response.json();
    return responseData.current_observation;
  }

  changeLocation(city, state){
    this.city = city;
    this.state = state;

  }
  
}