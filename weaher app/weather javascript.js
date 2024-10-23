document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    const city = document.getElementById('cityInput').value;
    const apiKey = 'f8f37e7c8c0f1bc80135b40b832fbe95'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weatherResult').innerHTML = weatherInfo;
            } else {
                document.getElementById('weatherResult').innerHTML = `<p>City not found. Please try again.</p>`;
            }
        })
        .catch(error => {
            console.log('Error:', error);
            document.getElementById('weatherResult').innerHTML = `<p>Something went wrong. Please try again later.</p>`;
        });
});
