import type { Units } from "./MenuBar.tsx";
import { fToC, cToF, mphToKmh, kmhToMph, inToMm, mmToIn } from "./conventer.tsx";

type DayProps = {
  feel: number;
  hum: number;
  wind: number;
  pre: number;
  units: Units;
};

export function Days({ feel, hum, wind, pre, units }: DayProps) {
  const temp = units.temperatureUnit === "C" ? fToC(feel) : cToF(feel);
  const windSpeed = units.windUnit === "kmh" ? mphToKmh(wind) : kmhToMph(wind);
  const precipitation = units.precipitationUnit === "mm" ? inToMm(pre) : mmToIn(pre);

  return (
    <div className="flex gap-4">
      <div className="bg-gray-600 p-4 px-10 rounded-2xl w-1/4">
        <p className="font-light">Feels Like</p>
        <br />
        <p className="font-mono text-2xl">{temp}°</p>
      </div>
      <div className="bg-gray-600 p-4 px-10 rounded-2xl w-1/4">
        <p className="font-light">Humidity</p>
        <br />
        <p className="font-mono text-2xl">{hum}%</p>
      </div>
      <div className="bg-gray-600 p-4 px-10 rounded-2xl w-1/4">
        <p className="font-light">Wind</p>
        <br />
        <p className="font-mono text-2xl">{windSpeed} {units.windUnit}</p>
      </div>
      <div className="bg-gray-600 p-4 px-10 rounded-2xl w-1/4">
        <p className="font-light">Precipitation</p>
        <br />
        <p className="font-mono text-2xl">{precipitation} {units.precipitationUnit}</p>
      </div>
    </div>
  );
}