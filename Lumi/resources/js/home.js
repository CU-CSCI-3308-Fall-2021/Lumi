function mapLoad()
{
    var map=document.getElementById("map_preview");
    map.style.display = "none";
}
function toggleTable() {
    var lTable = document.getElementById("weather-table");
    var map= document.getElementById("map_preview");
    lTable.style.display = (lTable.style.display == "table") ? "none" : "table";
    map.style.display = (lTable.style.display == "table") ? "none" : "";
  }
  //weather API stuff for breckenridge cards
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
//weather api for fresh snow card
window.addEventListener('load', () =>{
  let iconDesc = document.getElementById('fresh-snow-icon');
  let temperatureDesc = document.getElementById('fresh-snow-temp');
  let humidityDesc = document.getElementById('fresh-snow-humidity');
  let windSpeedDesc = document.getElementById('fresh-snow-speed');
  let snowDesc = document.getElementById('fresh-snow-expected');
          
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
            snowDesc.innerHTML = data.snow["1h"];
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
//variable to show freshest snow
var breck_snow, vail_snow, aspen_snow, winter_snow, beaver_snow, key_snow, steam_snow, tell_snow, copper_snow, basin_snow;
 // Snow Row 1: Breckenridge
 window.addEventListener('load', () =>{
  let snowDesc = document.getElementById('Breck-snow');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=80424,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            
            //Set elements from API
            snowDesc.innerHTML = data.snow["1h"];
            breck_snow = data.snow["1h"];
            //Console log API report
            
          });
        });
//Snow Row 2: Vail
window.addEventListener('load', () =>{
  let snowDesc = document.getElementById('Vail-snow');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=81657,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            
            //Set elements from API
            snowDesc.innerHTML = data.snow["1h"];
            vail_snow = data.snow["1h"];
            //Console log API report
            
          });
        });
//Snow Row 3: Aspen
window.addEventListener('load', () =>{
  let snowDesc = document.getElementById('Aspen-snow');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=81657,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {

            
            //Set elements from API
            snowDesc.innerHTML = data.snow["1h"];
            aspen_snow = data.snow["1h"];
            //Console log API report
            
          });
        });
//Snow Row 4: WinterPark
window.addEventListener('load', () =>{
  let snowDesc = document.getElementById('WinterPark-snow');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=80482,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            
            //Set elements from API
            snowDesc.innerHTML = data.snow["1h"];
            winter_snow = data.snow["1h"];
            //Console log API report
            
          });
        });
//Snow Row 5: Beaver Creek
window.addEventListener('load', () =>{
  let snowDesc = document.getElementById('Beaver-snow');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=81620,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            
            //Set elements from API
            snowDesc.innerHTML = data.snow["1h"];
            beaver_snow = data.snow["1h"];
            //Console log API report
            
          });
        });
//Snow Row 6: Keystone
window.addEventListener('load', () =>{
  let snowDesc = document.getElementById('Keystone-snow');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=80435,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            
            //Set elements from API
            snowDesc.innerHTML = data.snow["1h"];
            key_snow = data.snow["1h"];
            //Console log API report
            
          });
        });
//Snow Row 7: Steamboat
window.addEventListener('load', () =>{
  let snowDesc = document.getElementById('Steamboat-snow');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=80487,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            //Set elements from API
            snowDesc.innerHTML = data.snow["1h"];
            steam_snow = data.snow["1h"];
            //Console log API report
            
          });
        });
//Snow Row 8: Telluride
window.addEventListener('load', () =>{
  let snowDesc = document.getElementById('Telluride-snow');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=81435,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            //Set elements from API
            snowDesc.innerHTML = data.snow["1h"];
            tell_snow = data.snow["1h"];
            //Console log API report
            
          });
        });
//Snow Row 9: Copper Mountain
window.addEventListener('load', () =>{
  let snowDesc = document.getElementById('Copper-snow');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=80443,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            //Set elements from API
            snowDesc.innerHTML = data.snow["1h"];
            copper_snow = data.snow["1h"];
            //Console log API report
            
          });
        });
//Snow Row 10: Araphaoe Basin
window.addEventListener('load', () =>{
  let snowDesc = document.getElementById('Araphaoe-snow');
          
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=80435,&appid=4ed6690f3c6542b4b2e6f6878895de1a`;
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            //Set elements from API
            snowDesc.innerHTML = data.snow["1h"];
            basin_snow = data.snow["1h"];
            //Console log API report
            
          });
        });

var max_snow = Math.max(breck_snow, vail_snow, aspen_snow, winter_snow, beaver_snow, key_snow, steam_snow, tell_snow, copper_snow, basin_snow);
window.addEventListener('load', () =>{

});

today = new Date();
var year = today.getFullYear();
var month = today.getMonth()+1;
var day = today.getDate();

//News API
window.addEventListener('load', () =>{
  let newsDesc = document.getElementById('news-headline');
          
  const api = "https://newsapi.org/v2/everything?q=ski&resorts&from=" + year + "-" + month + "-" + day + "&apiKey=4c5dd332e4784f81be4d45660ea2e4e8";
  console.log(api);
  fetch(api)
      .then(response => {
          return response.json();
      })
          .then(data => {
            const {title} = data.articles[0];
            const {url} = data.articles[0];
            // console.log(title);
            //Set elements from API
            newsDesc.innerHTML = title;
            // document.getElementById("aaa").href = url;
            document.getElementById("news-url").href = url;
            //Console log API report
            
          });
        });