import "./index.css";
import { Headline } from "./components/MenuBar";
import type { Units } from "./components/MenuBar";
import { SearchList } from "./components/search";
import { Weather } from "./components/mainweather";
import { Days } from "./components/info";
import { Weeks } from "./components/week";
import { Hour } from "./components/hours";
import { getWeatherData } from "./API/Weather";
import { useEffect, useState } from "react";
import { type CityLocation } from "./components/city";
import { fToC, kmhToMph, cToF, inToMm, mmToIn } from "./components/conventer";

function App() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<CityLocation | null>(null);

  const [units, setUnits] = useState<Units>({
    temperatureUnit: "C",
    windUnit: "kmh",
    precipitationUnit: "mm",
    isMetric: true,
  });

  useEffect(() => {
    async function fetchData() {
      if (!selectedCity) return;
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
    date: string;
  }> = hourly?.time
    ?.map((time: Date, index: number) => ({
      name: mapWeatherCodeToName(hourly.weathercode[index]),
      hour: new Date(time).getHours(),
      stop:
        units.temperatureUnit === "C"
          ? Math.round(hourly.temperature_2m[index])
          : cToF(hourly.temperature_2m[index]),
      date: new Date(time).toLocaleDateString("en-US", { weekday: "long" }),
    }))
    .filter((item) => item.date === selectedDay) || [];

  const dailyData = daily?.time?.map((date: Date, index: number) => ({
    dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
    weather: mapWeatherCodeToName(daily.weathercode[index]),
    max:
      units.temperatureUnit === "C"
        ? Math.round(daily.temperature_max[index])
        : cToF(daily.temperature_max[index]),
    min:
      units.temperatureUnit === "C"
        ? Math.round(daily.temperature_min[index])
        : cToF(daily.temperature_min[index]),
  }));

  const convertTemp = (val: number) =>
    units.temperatureUnit === "C" ? +val.toFixed(1) : cToF(val);

  const convertWind = (val: number) =>
    units.windUnit === "kmh" ? +val.toFixed(1) : kmhToMph(val);

  const convertPrecip = (val: number) =>
    units.precipitationUnit === "mm" ? +val.toFixed(2) : mmToIn(val);

  const calculateFeelsLike = (tempC: number, windKmh: number) => {
    if (tempC <= 10 && windKmh > 17.28) {
     
      return Math.round(
        13.12 +
          0.6215 * tempC -
          11.37 * Math.pow(windKmh, 0.16) +
          0.3965 * tempC * Math.pow(windKmh, 0.16)
      );
    }
    return Math.round(tempC);
  };

  return (
    <main className="flex flex-col justify-center max-w-7xl mx-auto">
      <Headline onUnitsChange={setUnits} />
      <SearchList onCitySelect={setSelectedCity} />
      <br />
      {!weatherData || !hourly || !daily ? (
        <p className="text-center mt-10 text-gray-500">
          Loading weather data...
        </p>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/5">
            <Weather
              city={selectedCity?.name || "Berlin"}
              country={selectedCity?.country || "Germany"}
              temperature={convertTemp(weatherData.current.temperature)}
              dates={new Date()}
            />
            <br />
            <Days
              feel={convertTemp(
                calculateFeelsLike(
                  weatherData.current.temperature,
                  weatherData.current.wind_speed
                )
              )}
              hum={hourly.relative_humidity_2m[0]}
              wind={convertWind(weatherData.current.wind_speed)}
              pre={convertPrecip(hourly.precipitation_probability[0])}
              units={units}
            />
            <br />
            <p className="font-semibold mb-2">Daily forecast</p>
            <div className="flex gap-4 flex-wrap">
              {dailyData?.map((d, i) => (
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
              daily={
                daily?.time.map((d: Date) =>
                  d.toLocaleDateString("en-US", { weekday: "long" })
                ) || []
              }
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