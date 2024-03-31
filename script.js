const apiKey = "4def87a21feb04518ee128ccaaf43881";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const weatherInfo = document.getElementById("weatherInfo");

    if (cityInput.value.trim() === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(apiUrl + cityInput.value + `&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Error fetching weather data. Please try again.");
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p><i class="fa-solid fa-cloud"></i> ${data.weather[0].description}</p>
        <p><i class="fa-solid fa-temperature-half"></i> Temperature: ${data.main.temp}°C</p>
        <p><i class="fa-solid fa-droplet"></i> Humidity: ${data.main.humidity}%</p>
        <p><i class="fa-solid fa-wind"></i> Wind Speed: ${data.wind.speed} m/s</p>
        <p><i class="fa-solid fa-clock"></i> Timezone: ${data.timezone}</p>
    `;
    weatherInfo.style.display = "block";
}

document.getElementById("cityInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getWeather();
    }
});


