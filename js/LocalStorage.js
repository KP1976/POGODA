class Storage {
  constructor() {
    this.city = 'Warsaw';
    this.countryState = 'Poland';
  }

  // Funkcja sprawdza i pobiera nazwę miasta i stan lub kraj z Local Storage
  getLocationData() {
    this.city = (localStorage.getItem('city') !== null) ? 
    localStorage.getItem('city') : this.city;

    this.countryState = (localStorage.getItem('countryState') !== null) ? 
    localStorage.getItem('countryState') : this.countryState;

    return {
      city: this.city,
      countryState: this.countryState
    };
  }

  // Funkcja zapisuje nazwę miasta i stan lub kraj do Local Storage
  setLocationData(city, countryState) {
    localStorage.setItem('city', city);
    localStorage.setItem('countryState', countryState);
  }
}