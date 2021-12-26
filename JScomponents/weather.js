const city = document.querySelector('.weather span:first-child');
const weather = document.querySelector('.weather span:last-child');

const okGeo = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const API_KEY = 'e328614cd813998879c9b9d4aa28cfb8'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText =`CITY : ${ data.name }` ;
      weather.innerText = `${data.weather[0].main}  :  ${data.main.temp}°`;
    });
}
 
const rejGeo = () => {
    alert( " can't find you " );
}


navigator.geolocation.getCurrentPosition(okGeo,rejGeo);