import { useUnitValue } from "../hooks/UseUnitValue";

type HourData = {
  name: string;
  hour: number;
  
  temperature: number;
};

export function HInfo({name, hour, temperature}: HourData) {
  const convertedstop = useUnitValue(temperature, "temperature");
  return(
  <div
    
    className="bg-gray-700 rounded-2xl flex justify-between mb-2"
  >
    <img
      src={`src/assets/images/icon-${name}.webp`}
      alt={name}
      className="size-20"
    />
    <p className="mr-auto my-auto">
      {hour} {hour >= 12 ? "PM" : "AM"}
    </p>
    <p className="my-auto p-4">{convertedstop.toFixed(3)}°</p>
  </div>
  );
}
