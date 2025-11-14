import { Menu, MenuButton, MenuItems, MenuSeparator, MenuItem } from "@headlessui/react";
import { useState } from "react";
import { UnitButton } from "./Reapeter";

export type Units = {
  temperatureUnit: "C" | "F";
  windUnit: "kmh" | "mph";
  precipitationUnit: "mm" | "in";
  isMetric: boolean;
};

type HeadlineProps = {
  onUnitsChange: (units: Units) => void;
};

export function Headline({ onUnitsChange }: HeadlineProps) {
  const [units, setUnits] = useState<Units>({
    temperatureUnit: "C",
    windUnit: "kmh",
    precipitationUnit: "mm",
    isMetric: true,
  });

  
  const updateUnits = (newUnits: Partial<Units>) => {
    const updated = { ...units, ...newUnits };
    setUnits(updated);
    onUnitsChange(updated);
  };


  const switchToImperial = () => {
    updateUnits({ temperatureUnit: "F", windUnit: "mph", precipitationUnit: "in", isMetric: false });
  };

  const switchToMetric = () => {
    updateUnits({ temperatureUnit: "C", windUnit: "kmh", precipitationUnit: "mm", isMetric: true });
  };

  return (
    <div className="flex justify-between items-center w-full">
      <img src="src/assets/images/logo.svg" alt="logo" />

      <Menu>
        <div className="relative w-40">
          <MenuButton className="bg-gray-600 p-3 w-full flex items-center justify-center gap-2 rounded-2xl text-white">
            <img src="src/assets/images/icon-units.svg" alt="units icon" className="w-5 h-5" />
            Units
          </MenuButton>

          <MenuItems className="absolute top-full left-1/2 mt-2 bg-gray-600 rounded-2xl text-white p-5 w-56 -translate-x-1/2 z-10">
            
       
            <UnitButton
              label={units.isMetric ? "Switch to Imperial" : "Switch to Metric"}
              value={units.isMetric ? "F" : "C"}
              currentValue={units.isMetric ? "C" : "F"}
              onClick={() => (units.isMetric ? switchToImperial() : switchToMetric())}
            />

            <MenuSeparator className="ml-2 mr-2 mt-2 h-px bg-gray-400" />

         
            <MenuItem disabled>
              <p className="block p-2 font-light text-gray-300">Temperature</p>
            </MenuItem>
            <UnitButton label="Celsius (°C)" value="C" currentValue={units.temperatureUnit} onClick={() => updateUnits({ temperatureUnit: "C" })} />
            <UnitButton label="Fahrenheit (°F)" value="F" currentValue={units.temperatureUnit} onClick={() => updateUnits({ temperatureUnit: "F" })} />

            <MenuSeparator className="ml-2 mr-2 mt-2 h-px bg-gray-400" />

         
            <MenuItem disabled>
              <p className="block p-2 font-light text-gray-300">Wind Speed</p>
            </MenuItem>
            <UnitButton label="km/h" value="kmh" currentValue={units.windUnit} onClick={() => updateUnits({ windUnit: "kmh" })} />
            <UnitButton label="mph" value="mph" currentValue={units.windUnit} onClick={() => updateUnits({ windUnit: "mph" })} />

            <MenuSeparator className="ml-2 mr-2 mt-2 h-px bg-gray-400" />

         
            <MenuItem disabled>
              <p className="block p-2 font-light text-gray-300">Precipitation</p>
            </MenuItem>
            <UnitButton label="Millimeters (mm)" value="mm" currentValue={units.precipitationUnit} onClick={() => updateUnits({ precipitationUnit: "mm" })} />
            <UnitButton label="Inches (in)" value="in" currentValue={units.precipitationUnit} onClick={() => updateUnits({ precipitationUnit: "in" })} />
          </MenuItems>
        </div>
      </Menu>
    </div>
  );
}