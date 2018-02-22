class Weather {
  constructor(city, countryState) {
    this.apiKey = '74303a711241a2ef';
    this.city = city;
    this.countryState = countryState;
  }

  // Pobranie pogody z API
  getAPIData() {
    const data = fetch(`https://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.countryState}/${this.city}.json`)
    .then(res => res.json());

    return data;
  }

  // Zmiana lokalizacji pogody
  changeLocation(city, countryState) {
    this.city = city;
    this.countryState = countryState;
  }
}