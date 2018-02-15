const App = (_=> {
  let vars = {};

  // tworzenie obiektu na podstawie klasy z pliku Weather.js
  const weather = new Weather.WeatherClass('Warsaw', 'Poland'); 

  // Funkcja obługująca dane z API pogody
  function getWeather() {
    weather.getAPIData()
    .then(data => {
      const weather = data.current_observation.weather;
      const logoURL = data.current_observation.image.url;
      const weatherIconURL = data.current_observation.icon_url;
      const city = data.current_observation.display_location.city;
      const state = data.current_observation.display_location.state_name;
      const desc = data.current_observation.weather;
      const humidity = data.current_observation.relative_humidity;
      const dewpoint = data.current_observation.dewpoint_c;
      const temp = data.current_observation.feelslike_c;
      const wind_dir = data.current_observation.wind_dir;
      const wind = data.current_observation.wind_kph;
      const pressure = data.current_observation.pressure_mb;

      // if(data.current_observation.visibility_km === 'N/A') {
      //   const visibility = 'Brak danych';
      // } else {
      //   const visibility = Math.round((data.current_observation.visibility_km));
      // }

      const visibility = (data.current_observation.visibility_km === 'N/A') ? 
      '(Brak danych)' : 
      Math.round((data.current_observation.visibility_km));

      // console.log(data.current_observation);
      let windDir = '', weatherDesc = '';
  
      // Zamiana angielskich kierunków wiatru na polskie
      switch(wind_dir) {
        case 'North': 
          windDir = 'Północny';
          break;
        case 'NW': 
          windDir = 'Północno-Zachodni';
          break;
        case 'NNW': 
          windDir = 'Płn-Płn-Zach';
          break;
        case 'NWW': 
          windDir = 'Płn-Zach-Zach';
          break;
        case 'NE': 
          windDir = 'Północno-Wschodni';
          break;
        case 'East': 
          windDir = 'Wshodni';
          break;
        case 'West': 
          windDir = 'Zachodni';
          break;
        case 'WNW': 
          windDir = 'Zach-Płn-Zach';
          break;
        case 'WSW': 
          windDir = 'Zach-Płd-Zach';
          break;
        case 'South': 
          windDir = 'Południowy';
          break;
        case 'SW': 
          windDir = 'Południowo-Zachodni';
          break;
        case 'SE': 
          windDir = 'Południowo-Wschodni';
          break;
        case 'SSE': 
          windDir = 'Płd-Płd-Wschodni';
          break;
        case 'SSW': 
          windDir = 'Płd-Płd-Zachodni';
          break;
        case 'ESE': 
          windDir = 'Wsch-Płd-Wsch';
          break; 
        case 'ENE': 
          windDir = 'Wsch-Płn-Wsch';
          break; 
        default: 
          windDir = 'nieznany kierunek...';
          break;
      }
  
      switch(weather) {
        case 'Clear': 
          weatherDesc = 'Bezchmurnie';
          break;
        case 'Cloudy':
         weatherDesc = 'Pochmurno';
          break;
        case 'Flurries': 
          weatherDesc = 'Śnieżyca';
          break;
        case 'Fog': 
          weatherDesc = 'Mgła';
          break;
        case 'Haze':
          weatherDesc = 'Mgła';
          break;
        case 'Mostly Cloudy':
          weatherDesc = 'W większości pochmurno';
          break;
        case 'Mostly Sunny':
          weatherDesc = 'W większości słonecznie';
          break;
        case 'Partly Cloudy':
          weatherDesc = 'Częściowe zachmurzenie';
          break;
        case 'Partly Sunny':
          weatherDesc = 'Częściowo słonecznie';
          break;
        case 'Freezing Rain':
          weatherDesc = 'Zamarzający deszcz';
          break;
        case 'Rain':
          weatherDesc = 'Deszczowo';
          break;
        case 'Sleet':
          weatherDesc = 'Śnieg z deszczem';
          break;
        case 'Snow':
          weatherDesc = 'Śnieg';
          break;
        case 'Sunny':
          weatherDesc = 'Słonecznie';
          break;
        case 'Thunderstorms':
          weatherDesc = 'Burze';
          break;
        case 'Thunderstorm':
          weatherDesc = 'Burza';
          break;
        case 'Overcast':
          weatherDesc = 'Pochmurno';
          break;
        case 'Scattered Clouds':
          weatherDesc = 'Rozproszone chmury';
          break;
        default: 
        weatherDesc = 'nieznana...';
          break;
      }

      vars.logo.setAttribute('src', logoURL);
      vars.icon.setAttribute('src', weatherIconURL);
      vars.city.textContent = `${city}, ${state}`;
      vars.desc.textContent = `${weatherDesc}`;
      vars.humidity.textContent = `${humidity}`;
      vars.dewpoint.textContent = `${dewpoint}°C`;
      vars.temp.textContent = `${temp}°C`;
      vars.wind.textContent = `${windDir}\xa0o prędkości ${wind}\xa0km/h`;
      vars.pressure.textContent = `${pressure} hPa`;
      vars.visibility.textContent = `${visibility} km`;
    })
    .catch(err => console.log(err));
  }

  function openModal() {
    vars.modal.classList.add('on');
  }

  function closeModal() {
    vars.modal.classList.remove('on');
  }

  function changeLocation(e) {
    let cityValue = vars.modalCity.value;
    let countryStateValue = vars.countryState.value;

    console.log(cityValue, countryStateValue);

    weather.changeLocation(cityValue, countryStateValue);
    getWeather();
    closeModal();

    // Czyszczenie inputów
    vars.modalCity.value = '';
    vars.countryState.value = '';
  }

  function init(_vars) {
    vars = _vars;
    getWeather();
    vars.locationBtn.addEventListener('click', openModal);
    vars.btnSubmit.addEventListener('click', changeLocation);

    // Zamknięcie modalu po naciśnięciu na krzyżyk 
    vars.close.addEventListener('click', closeModal);
  }

  return {
    init
  };
})();