document.addEventListener('DOMContentLoaded', function() {
  App.init({
    logo: this.querySelector('.weather-logo'),
    icon: this.querySelector('.weather-icon'),
    city: this.querySelector('.weather-location'),
    desc: this.querySelector('.weather-desc'),
    humidity: this.querySelector('.humidity'),
    dewpoint: this.querySelector('.dewpoint'),
    temp: this.querySelector('.feels-like'),
    wind: this.querySelector('.wind'),
    pressure: this.querySelector('.pressure'),
    visibility: this.querySelector('.visibility'),
    locationBtn: this.querySelector('.change-location'),
    modalBackground: this.querySelector('.modal-background'),
    modal: this.querySelector('.modal'),
    modalCity: this.querySelector('.city'),
    countryState: this.querySelector('.country-state'),
    btnSubmit: this.querySelector('.btn-submit'),
    close: this.querySelector('.close')
  });
});