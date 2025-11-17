import { useUnitValue } from "../hooks/UseUnitValue.ts";
import { UNIT_SIGN, useUnitContext } from "../context/UnitContext.tsx";


type DayProps = {
  feel: number;
  hum: number;
  wind: number;
  pre: number;
 
};

export function Days({ feel, hum, wind, pre }: DayProps) {
  const convertedTemperature = useUnitValue(feel, "temperature");
   const convertedwind = useUnitValue(wind, "speed");
    const convertedpercipitation = useUnitValue(pre, "distance");
    const {unityTypes: {distance, speed, temperature}} = useUnitContext();

  return (
    <div className="flex gap-4">
      <div className="bg-gray-600 p-4 px-10 rounded-2xl w-1/4">
        <p className="font-light">Feels Like</p>
        <br />
        <p className="font-mono text-2xl">{convertedTemperature} {UNIT_SIGN.temperature[temperature]}</p>
      </div>
      <div className="bg-gray-600 p-4 px-10 rounded-2xl w-1/4">
        <p className="font-light">Humidity</p>
        <br />
        <p className="font-mono text-2xl">{hum}%</p>
      </div>
      <div className="bg-gray-600 p-4 px-10 rounded-2xl w-1/4">
        <p className="font-light">Wind</p>
        <br />
        <p className="font-mono text-2xl">{convertedwind.toFixed(3)} {UNIT_SIGN.speed[speed]}</p>
      </div>
      <div className="bg-gray-600 p-4 px-10 rounded-2xl w-1/4">
        <p className="font-light">Precipitation</p>
        <br />
        <p className="font-mono text-2xl">{convertedpercipitation} {UNIT_SIGN.distance[distance]}</p>
      </div>
    </div>
  );
}