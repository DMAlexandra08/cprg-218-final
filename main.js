const weather = document.getElementById('weather')
const weathericon = document.getElementById('describe')
const iconCode = data.weather[0].icon;
const iconUrl = 'https://openweathermap.org/img/wn/${iconCode}@2x.png'
weathericon.src = iconUrl;
console.log(iconUrl);


fetch('https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=cfb3d1b143131b3e9f17add9eb31017a&units=metric')

.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.main.temp);
    weather.textContent = "Current Temperature : " + data.main.temp+" \u00B0C";
});