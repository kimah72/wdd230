const temperature = parseFloat(document.getElementById('temperature').innerText);
const windSpeed = parseFloat(document.getElementById('windSpeed').innerText);

function calculateWindChill(temperature, windSpeed) {
    
    if (temperature <= 50 && windSpeed > 3.0) {
        
        const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2) + '°F';
    } else {
        return 'N/A';
    }
}

const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('windChill').innerText = windChill;