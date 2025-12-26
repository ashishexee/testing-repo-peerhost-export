
// complex/weather-api.js
// This function fetches weather data for a given city using Open-Meteo API

export default async function (inputs) {
    try {
        // 1. Get arguments or default to London
        // usage: inputs.city
        const city = inputs?.city || "London";

        // 2. Geocoding Request (City -> Lat/Long)
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
        const geoResponse = await fetch(geoUrl);
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            return {
                status: 404,
                body: { error: "City not found" }
            };
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // 3. Weather Request
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        // 4. Transform Data
        const result = {
            location: {
                city: name,
                country: country,
                lat: latitude,
                lng: longitude
            },
            current_weather: {
                temperature: `${weatherData.current.temperature_2m} ${weatherData.current_units.temperature_2m}`,
                humidity: `${weatherData.current.relative_humidity_2m} ${weatherData.current_units.relative_humidity_2m}`,
                wind_speed: `${weatherData.current.wind_speed_10m} ${weatherData.current_units.wind_speed_10m}`,
                time: weatherData.current.time
            },
            timestamp: new Date().toISOString()
        };

        return {
            status: 200,
            body: result
        };

    } catch (error) {
        return {
            status: 500,
            body: {
                error: "Failed to fetch weather data",
                details: error.message
            }
        };
    }
}
