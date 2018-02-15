function vars() {
  App.init({
    logo: document.querySelector('.weather-logo'),
    icon: document.querySelector('.weather-icon'),
    city: document.querySelector('.weather-location'),
    desc: document.querySelector('.weather-desc'),
    humidity: document.querySelector('.humidity'),
    dewpoint: document.querySelector('.dewpoint'),
    temp: document.querySelector('.feels-like'),
    wind: document.querySelector('.wind'),
    pressure: document.querySelector('.pressure'),
    visibility: document.querySelector('.visibility'),
    locationBtn: document.querySelector('.change-location'),
    modal: document.querySelector('.modal')
  });
}

document.addEventListener('DOMContentLoaded', vars);