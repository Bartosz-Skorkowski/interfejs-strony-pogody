import "./index.css";
import { Headline } from "./components/MenuBar";
import { SearchList } from "./components/search";
import { Weather } from "./components/mainweather";
import { Days } from "./components/info";
import { Weeks } from "./components/week";
import { Hour } from "./components/hours";
import { getWeatherData } from "./API/Weather";
import { useEffect, useState } from "react";
import type { CityLocation } from "./components/city";

function App() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<CityLocation | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (selectedCity == null) {
        return;
      }
      try {
        const data = await getWeatherData(
          selectedCity.longitude,
          selectedCity.latitude
        );
        setWeatherData(data);

        const firstDay = new Date(data.daily.time[0]).toLocaleDateString(
          "en-US",
          { weekday: "long" }
        );
        setSelectedDay(firstDay);
      } catch (err) {
        console.error("Error fetching weather:", err);
      }
    }

    fetchData();
  }, [selectedCity]);

  const hourly = weatherData?.hourly;
  const daily = weatherData?.daily;

  const hourData: Array<{
    name: string;
    hour: number;
    stop: number;
    date: Date;
  }> = hourly?.time
    ?.map((time: Date, index: number) => ({
      name: mapWeatherCodeToName(hourly.weather_code[index]),
      hour: new Date(time).getHours(),
      stop: Math.round(hourly.temperature_2m[index]),
      date: new Date(time).toLocaleDateString("en-US", { weekday: "long" }),
    }))
    .filter((item) => item.date === selectedDay);

  const dailyData = daily?.time?.map((date: Date, index: number) => ({
    dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
    weather: mapWeatherCodeToName(daily.weather_code[index]),
    max: Math.round(daily.temperature_max[index]),
    min: Math.round(daily.temperature_min[index]),
  }));

  return (
    <main className="flex flex-col justify-center max-w-7xl mx-auto">
      <Headline />
      <SearchList onCitySelect={setSelectedCity} />
      <br />
      {!weatherData ? (
        <p className="text-center mt-10 text-gray-500">
          Loading weather data...
        </p>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/5">
            <Weather
              city={selectedCity?.name || "Berlin"}
              country={selectedCity?.country || "Germany"}
              temperature={Math.round(hourly.temperature_2m[0])}
              dates={new Date()}
            />
            <br />
            <Days
              feel={Math.round(hourly.temperature_2m[0])}
              hum={hourly.relative_humidity_2m[0]}
              wind={hourly.wind_speed_10m[0]}
              pre={hourly.precipitation_probability[0]}
            />
            <br />
            <p className="font-semibold mb-2">Daily forecast</p>
            <div className="flex gap-4 flex-wrap">
              {dailyData.map((d, i) => (
                <Weeks
                  key={i}
                  wek={d.dayName}
                  first={d.max}
                  second={d.min}
                  name={d.weather}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-2/5 mt-4 md:mt-0">
            <Hour
              data={hourData}
              selectedDay={selectedDay}
              onDayChange={setSelectedDay}
              daily={daily.time.map((d: Date) =>
                d.toLocaleDateString("en-US", { weekday: "long" })
              )}
            />
          </div>
        </div>
      )}
    </main>
  );
}

function mapWeatherCodeToName(code: number) {
  const mapping: Record<number, string> = {
    0: "sunny",
    1: "overcast",
    2: "partly-cloudy",
    3: "overcast",
    45: "fog",
    48: "fog",
    51: "drizzle",
    53: "drizzle",
    55: "drizzle",
    61: "rain",
    63: "rain",
    65: "rain",
    71: "snow",
    73: "snow",
    75: "snow",
    80: "rain",
    81: "rain-showers",
    82: "rain-showers",
    95: "storm",
    96: "storm",
    99: "storm",
  };
  return mapping[code] || "unknown";
}

export default App;
