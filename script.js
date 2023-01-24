var APIKey = '10f564b4c71643d01cc2820d353ea876'

var city = 'London'

const searchResults = document.getElementById('search-input');
let result = "";



var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL)
.then(response => response.json())
.then( data => console.log(data.main.temp))

function searchWeather() {
    document.getElementById('search-input').innerHTML = ''
    city = document.querySelector("#search-input").value
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL)
.then(response => response.json())
.then( data => {
    
        const temperature = data.main.temp;
        const wind = data.wind.speed;
       const humidity = data.main.humidity;
       
       
      
  
      const weatherInfo = {temperature, wind, humidity, }
      
  
      console.log(weatherInfo)
      

      let p0 = document.createElement('h1')
      p0.textContent = city 
      document.getElementById('weather-dashboard').appendChild(p0)
  
      let p1 = document.createElement('h1')
      p1.textContent = 'temperature: ' + temperature + 
      document.getElementById("weather-dashboard").appendChild(p1)

      let p2 = document.createElement('h1')
      p2.textContent = 'windspeed: ' + wind + 'mph'
      document.getElementById("weather-dashboard").appendChild(p2)

      let p3 = document.createElement('h1')
      p3.textContent = 'humidity: ' + humidity + '%'
      document.getElementById("weather-dashboard").appendChild(p3)
       
        
    }
    
   
    

)}
