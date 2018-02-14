const Weather = (_=>{
  let config = {};

  class WeatherClass {
    constructor(city, state) {
      this.apiKey = '74303a711241a2ef';
      this.city = city;
      this.state = state;
    }
  
    // Pobranie pogody z API
    getAPIData() {
      const data = fetch(`https://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`)
      .then(res => res.json());

      return data;
    }
  
    // // Zmiana lokalizacji pogody
    // changeLocation(city, state) {
    //   this.city = city;
    //   this.state = state;
    // }
  }

  return {
    WeatherClass
  };
})();