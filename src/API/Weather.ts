export async function getWeatherData(longitude: number, latitude: number) {
  const params = {
    latitude: latitude,
    longitude: longitude,
    timezone: "auto",
    forecast_days: 7,
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "precipitation",
      "weather_code",
      "wind_speed_10m",
    ],
    hourly: [
      "temperature_2m",
      "weathercode",
      "relativehumidity_2m",
      "windspeed_10m",
      "precipitation",
      "precipitation_probability",
    ],
    daily: ["weathercode", "temperature_2m_max", "temperature_2m_min"],
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
    current: {
      temperature: data.current?.temperature_2m,
      weathercode: data.current?.weather_code,
      wind_speed: data.current?.wind_speed_10m,
      wind_direction: data.current?.winddirection,
      precipitation: data.current?.precipitation,
      apparent_temperature: data.current?.apparent_temperature,
      relative_humidity_2m: data.current?.relative_humidity_2m,
    },
    hourly: {
      time: timeArray,
      temperature_2m: hourly.temperature_2m,
      weathercode: hourly.weathercode,
      relative_humidity_2m: hourly.relativehumidity_2m,
      precipitation_probability: hourly.precipitation_probability,
      precipitation: hourly.precipitation,
      wind_speed_10m: hourly.windspeed_10m,
    },
    daily: {
      time: dailyTimeArray,
      weathercode: daily.weathercode,
      temperature_max: daily.temperature_2m_max,
      temperature_min: daily.temperature_2m_min,
    },
    latitude: data.latitude,
    longitude: data.longitude,
    elevation: data.elevation,
    timezone: data.timezone,
  };

  return weatherData;
}
