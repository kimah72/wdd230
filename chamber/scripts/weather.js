// variables for temp, icon and description
const tempDesc = document.querySelector("#temp-desc");
const weatherIcon = document.querySelector("#weathericon");
// API variables and url
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.115&lon=-111.6549&appid=f333fbf945ff940b11bdcc892d3ac53e&units=imperial';

// Fetch weather data from openweathermao.org
async function getWeather(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error)
    }
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const temp = temperature.toFixed(0);
    const desc = data.weather[0].description;
    const capitalizedDesc = capitalizeWords(desc);

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`

    tempDesc.innerHTML = `${temp}&deg;F - ${capitalizedDesc}`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "weather icon");

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
}

getWeather(url);