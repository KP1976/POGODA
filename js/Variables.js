function vars() {
  App.init({
    logo: document.querySelector('.weather-logo'),
    icon: document.querySelector('.weather-icon'),
    city: document.querySelector('.weather-location'),
    desc: document.querySelector('.weather-desc')
  });
}

document.addEventListener('DOMContentLoaded', vars);