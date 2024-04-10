const apiKey = 'f333fbf945ff940b11bdcc892d3ac53e';
const city = 'Cozumel';
const countryCode = 'MX';

function fetchWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            const currentTemperature = Math.round(data.main.temp);
            const currentHumidity = data.main.humidity;
            const weatherDescription = data.weather[0].description;
            const weatherIcon = data.weather[0].icon;
            const maxTemperature = Math.round(data.main.temp_max);

            // Generate weather elements
            const currentTempElement = document.createElement('div');
            currentTempElement.textContent = `Current Temperature: ${currentTemperature}°F`;

            const currentHumidityElement = document.createElement('div');
            currentHumidityElement.textContent = `Current Humidity: ${currentHumidity}%`;

            const weatherDescriptionElement = document.createElement('div');
            weatherDescriptionElement.textContent = `Weather Description: ${weatherDescription}`;

            const weatherIconElement = document.createElement('img');
            weatherIconElement.src = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
            weatherIconElement.alt = weatherDescription;

            const maxTemperatureElement = document.createElement('div');
            maxTemperatureElement.textContent = `Max temperature today: ${maxTemperature}°F`;

            // Clear existing content in #weather-info div
            const weatherInfoDiv = document.getElementById('weather-info');
            weatherInfoDiv.innerHTML = '';

            // Append weather elements to #weather-info div
            weatherInfoDiv.appendChild(currentTempElement);
            weatherInfoDiv.appendChild(currentHumidityElement);
            weatherInfoDiv.appendChild(weatherDescriptionElement);
            weatherInfoDiv.appendChild(weatherIconElement);
            weatherInfoDiv.appendChild(maxTemperatureElement);

            // Display weather banner with max temperature
            displayWeatherBanner(maxTemperature);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeatherBanner(maxTemperature) {
    const weatherBanner = document.getElementById('weather-banner');
    weatherBanner.textContent = `Max temperature today in Cozumel: ${maxTemperature}°F`;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.id = 'close-btn';
    closeButton.addEventListener('click', closeWeatherBanner);
    weatherBanner.appendChild(closeButton);

    weatherBanner.style.display = 'block';
}

function closeWeatherBanner() {
    const weatherBanner = document.getElementById('weather-banner');
    weatherBanner.style.display = 'none';
}

// Fetch weather data when the page loads
document.addEventListener('DOMContentLoaded', fetchWeatherData);