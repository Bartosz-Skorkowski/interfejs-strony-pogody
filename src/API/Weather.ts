
export async function getWeatherData(longitude: number, latitude: number) {
  const params = {
    latitude,
    longitude,
    hourly: [
      "temperature_2m",
      "weather_code",
      "relative_humidity_2m",
      "precipitation_probability",
      "precipitation",
      "wind_speed_10m",
    ],
    daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
    timezone: "auto",
  };

  const query = new URLSearchParams(params as any).toString();
  const url = `https://api.open-meteo.com/v1/forecast?${query}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch weather data");

  const data = await response.json();

  const hourly = data.hourly;
  const daily = data.daily;

  const timeArray = hourly.time.map((t: string) => new Date(t));
  const dailyTimeArray = daily.time.map((t: string) => new Date(t));

  const weatherData = {
    hourly: {
      time: timeArray,
      temperature_2m: hourly.temperature_2m,
      weather_code: hourly.weather_code,
      relative_humidity_2m: hourly.relative_humidity_2m,
      precipitation_probability: hourly.precipitation_probability,
      precipitation: hourly.precipitation,
      wind_speed_10m: hourly.wind_speed_10m,
    },
    daily: {
      time: dailyTimeArray,
      weather_code: daily.weather_code,
      temperature_max: daily.temperature_2m_max,
      temperature_min: daily.temperature_2m_min,
    },
    latitude: data.latitude,
    longitude: data.longitude,
    elevation: data.elevation,
    timezone: data.timezone,
  };

  console.log("Weather data fetched:", weatherData);
  return weatherData;
}