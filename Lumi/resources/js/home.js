  function toggleTable() {
    var lTable = document.getElementById("weather-table");
    lTable.style.display = (lTable.style.display == "table") ? "none" : "table";
  }
  function show_hide_column() {
    var table = document.getElementById("weather-table");
    for (var i = 0, row; row = table.rows[i]; i++) {
      for (var j = 0, col; col = row.cells[j]; j++) {
        if (j==4)
        {
          col.style.display="none";
        }
      }
    }
    element.style.display = "none";
  }
  function isUser()
  {
    var user=false;
    if (user!=true)
    {
      show_hide_column();
    }
  }
  //weather API stuff
window.addEventListener('load', () =>{
let iconDesc = document.getElementById('temp-icon');
let temperatureDesc = document.getElementById('temp-value');
let humidityDesc = document.getElementById('humidity');
let windSpeedDesc = document.getElementById('wind-speed');
        
const api = `https://api.openweathermap.org/data/2.5/weather?zip=80424,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
fetch(api)
    .then(response => {
        return response.json();
    })
        .then(data => {
          console.log(data);
          const {temp} = data.main;
          const {humidity} = data.main;
          const {speed} = data.wind;
          const {icon} = data.weather[0];
          
          //Set elements from API
          temperatureDesc.innerHTML = Math.round(((temp-273.15)*1.8)+32);
          humidityDesc.innerHTML = humidity;
          windSpeedDesc.innerHTML = Math.round(speed/0.44704);
          iconDesc.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
          //Console log API report
          
        });
      });
//Table row 1: Breckenridge
window.addEventListener('load', () =>{
  let iconDesc = document.getElementById('Breck-icon');
  let temperatureDesc = document.getElementById('Breck-weather');
  let humidityDesc = document.getElementById('Breck-humidity');
  let windSpeedDesc = document.getElementById('Breck-windSpeed');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=80424,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            console.log(data);
            const {temp} = data.main;
            const {humidity} = data.main;
            const {speed} = data.wind;
            const {icon} = data.weather[0];
            
            //Set elements from API
            temperatureDesc.innerHTML = Math.round(((temp-273.15)*1.8)+32);
            humidityDesc.innerHTML = humidity;
            windSpeedDesc.innerHTML = Math.round(speed/0.44704);
            iconDesc.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //Console log API report
            
          });
        });
//Table row 2: Vail
window.addEventListener('load', () =>{
  let iconDesc = document.getElementById('Vail-icon');
  let temperatureDesc = document.getElementById('Vail-weather');
  let humidityDesc = document.getElementById('Vail-humidity');
  let windSpeedDesc = document.getElementById('Vail-windSpeed');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=81657,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            console.log(data);
            const {temp} = data.main;
            const {humidity} = data.main;
            const {speed} = data.wind;
            const {icon} = data.weather[0];
            
            //Set elements from API
            temperatureDesc.innerHTML = Math.round(((temp-273.15)*1.8)+32);
            humidityDesc.innerHTML = humidity;
            windSpeedDesc.innerHTML = Math.round(speed/0.44704);
            iconDesc.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //Console log API report
            
          });
        });
//Table Row 3: Aspen
window.addEventListener('load', () =>{
  let iconDesc = document.getElementById('Aspen-icon');
  let temperatureDesc = document.getElementById('Aspen-weather');
  let humidityDesc = document.getElementById('Aspen-humidity');
  let windSpeedDesc = document.getElementById('Aspen-windSpeed');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=81657,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            console.log(data);
            const {temp} = data.main;
            const {humidity} = data.main;
            const {speed} = data.wind;
            const {icon} = data.weather[0];
            
            //Set elements from API
            temperatureDesc.innerHTML = Math.round(((temp-273.15)*1.8)+32);
            humidityDesc.innerHTML = humidity;
            windSpeedDesc.innerHTML = Math.round(speed/0.44704);
            iconDesc.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //Console log API report
            
          });
        });
//Table Row 4: Winterpark
window.addEventListener('load', () =>{
  let iconDesc = document.getElementById('WinterPark-icon');
  let temperatureDesc = document.getElementById('WinterPark-weather');
  let humidityDesc = document.getElementById('WinterPark-humidity');
  let windSpeedDesc = document.getElementById('WinterPark-windSpeed');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=80482,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            console.log(data);
            const {temp} = data.main;
            const {humidity} = data.main;
            const {speed} = data.wind;
            const {icon} = data.weather[0];
            
            //Set elements from API
            temperatureDesc.innerHTML = Math.round(((temp-273.15)*1.8)+32);
            humidityDesc.innerHTML = humidity;
            windSpeedDesc.innerHTML = Math.round(speed/0.44704);
            iconDesc.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //Console log API report
            
          });
        });
// Row 5: Beaver Creek
window.addEventListener('load', () =>{
  let iconDesc = document.getElementById('BeaverCreek-icon');
  let temperatureDesc = document.getElementById('BeaverCreek-weather');
  let humidityDesc = document.getElementById('BeaverCreek-humidity');
  let windSpeedDesc = document.getElementById('BeaverCreek-windSpeed');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=81620,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            console.log(data);
            const {temp} = data.main;
            const {humidity} = data.main;
            const {speed} = data.wind;
            const {icon} = data.weather[0];
            
            //Set elements from API
            temperatureDesc.innerHTML = Math.round(((temp-273.15)*1.8)+32);
            humidityDesc.innerHTML = humidity;
            windSpeedDesc.innerHTML = Math.round(speed/0.44704);
            iconDesc.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //Console log API report
            
          });
        });
// Row 6: Keystone
window.addEventListener('load', () =>{
  let iconDesc = document.getElementById('Keystone-icon');
  let temperatureDesc = document.getElementById('Keystone-weather');
  let humidityDesc = document.getElementById('Keystone-humidity');
  let windSpeedDesc = document.getElementById('Keystone-windSpeed');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=80435,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            console.log(data);
            const {temp} = data.main;
            const {humidity} = data.main;
            const {speed} = data.wind;
            const {icon} = data.weather[0];
            
            //Set elements from API
            temperatureDesc.innerHTML = Math.round(((temp-273.15)*1.8)+32);
            humidityDesc.innerHTML = humidity;
            windSpeedDesc.innerHTML = Math.round(speed/0.44704);
            iconDesc.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //Console log API report
            
          });
        });
// Row 7: Steamboat
window.addEventListener('load', () =>{
  let iconDesc = document.getElementById('Steamboat-icon');
  let temperatureDesc = document.getElementById('Steamboat-weather');
  let humidityDesc = document.getElementById('Steamboat-humidity');
  let windSpeedDesc = document.getElementById('Steamboat-windSpeed');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=80487,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            console.log(data);
            const {temp} = data.main;
            const {humidity} = data.main;
            const {speed} = data.wind;
            const {icon} = data.weather[0];
            
            //Set elements from API
            temperatureDesc.innerHTML = Math.round(((temp-273.15)*1.8)+32);
            humidityDesc.innerHTML = humidity;
            windSpeedDesc.innerHTML = Math.round(speed/0.44704);
            iconDesc.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //Console log API report
            
          });
        });
// Row 8 Telluride
window.addEventListener('load', () =>{
  let iconDesc = document.getElementById('Telluride-icon');
  let temperatureDesc = document.getElementById('Telluride-weather');
  let humidityDesc = document.getElementById('Telluride-humidity');
  let windSpeedDesc = document.getElementById('Telluride-windSpeed');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=81435,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            console.log(data);
            const {temp} = data.main;
            const {humidity} = data.main;
            const {speed} = data.wind;
            const {icon} = data.weather[0];
            
            //Set elements from API
            temperatureDesc.innerHTML = Math.round(((temp-273.15)*1.8)+32);
            humidityDesc.innerHTML = humidity;
            windSpeedDesc.innerHTML = Math.round(speed/0.44704);
            iconDesc.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //Console log API report
            
          });
        });
// Row 9: Copper Mountain
window.addEventListener('load', () =>{
  let iconDesc = document.getElementById('Copper-icon');
  let temperatureDesc = document.getElementById('Copper-weather');
  let humidityDesc = document.getElementById('Copper-humidity');
  let windSpeedDesc = document.getElementById('Copper-windSpeed');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=80443,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            console.log(data);
            const {temp} = data.main;
            const {humidity} = data.main;
            const {speed} = data.wind;
            const {icon} = data.weather[0];
            
            //Set elements from API
            temperatureDesc.innerHTML = Math.round(((temp-273.15)*1.8)+32);
            humidityDesc.innerHTML = humidity;
            windSpeedDesc.innerHTML = Math.round(speed/0.44704);
            iconDesc.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //Console log API report
            
          });
        });
// Row 10: Araphaoe Basin
window.addEventListener('load', () =>{
  let iconDesc = document.getElementById('Araphaoe-icon');
  let temperatureDesc = document.getElementById('Araphaoe-weather');
  let humidityDesc = document.getElementById('Araphaoe-humidity');
  let windSpeedDesc = document.getElementById('Araphaoe-windSpeed');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=80435,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            console.log(data);
            const {temp} = data.main;
            const {humidity} = data.main;
            const {speed} = data.wind;
            const {icon} = data.weather[0];
            
            //Set elements from API
            temperatureDesc.innerHTML = Math.round(((temp-273.15)*1.8)+32);
            humidityDesc.innerHTML = humidity;
            windSpeedDesc.innerHTML = Math.round(speed/0.44704);
            iconDesc.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //Console log API report
            
          });
        });

