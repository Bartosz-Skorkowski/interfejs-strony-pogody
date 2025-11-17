import {
  Menu,
  MenuButton,
  MenuItems,
  MenuSeparator,
  MenuItem,
} from "@headlessui/react";
import { useState } from "react";
import { UnitButton } from "./Reapeter";
import { useUnitContext } from "../context/UnitContext";

export function Headline() {
  const {
    unityTypes: { distance, speed, temperature },
    changeUnit,
  } = useUnitContext();
  const isAllMetric =
    temperature === "metric" && speed === "metric" && distance === "metric";

  const toggleUnits = () => {
    if (isAllMetric) {
      changeUnit("temperature", "imperial");
      changeUnit("speed", "imperial");
      changeUnit("distance", "imperial");
    } else {
      changeUnit("temperature", "metric");
      changeUnit("speed", "metric");
      changeUnit("distance", "metric");
    }
  };
  return (
    <div className="flex justify-between items-center w-full">
      <img src="src/assets/images/logo.svg" alt="logo" />

      <Menu>
        <div className="relative w-40">
          <MenuButton className="bg-gray-600 p-3 w-full flex items-center justify-center gap-2 rounded-2xl text-white">
            <img
              src="src/assets/images/icon-units.svg"
              alt="units icon"
              className="w-5 h-5"
            />
            Units
          </MenuButton>

          <MenuItems className="absolute top-full left-1/2 mt-2 bg-gray-600 rounded-2xl text-white p-5 w-56 -translate-x-1/2 z-10">
            <UnitButton
              label={isAllMetric ? "Switch to Imperial" : "Switch to Metric"}
              value={NaN}
              currentValue={NaN}
              onClick={toggleUnits}
            />

            <MenuSeparator className="ml-2 mr-2 mt-2 h-px bg-gray-400" />

            <MenuItem disabled>
              <p className="block p-2 font-light text-gray-300">Temperature</p>
            </MenuItem>
            <UnitButton
              label="Celsius (°C)"
              value="metric"
              currentValue={temperature}
              onClick={() => changeUnit("temperature", "metric")}
            />
            <UnitButton
              label="Fahrenheit (°F)"
              value="imperial"
              currentValue={temperature}
              onClick={() => changeUnit("temperature", "imperial")}
            />

            <MenuSeparator className="ml-2 mr-2 mt-2 h-px bg-gray-400" />

            <MenuItem disabled>
              <p className="block p-2 font-light text-gray-300">Wind Speed</p>
            </MenuItem>
            <UnitButton
              label="km/h"
              value="metric"
              currentValue={speed}
              onClick={() => changeUnit("speed", "metric")}
            />
            <UnitButton
              label="mph"
              value="imperial"
              currentValue={speed}
              onClick={() => changeUnit("speed", "imperial")}
            />

            <MenuSeparator className="ml-2 mr-2 mt-2 h-px bg-gray-400" />

            <MenuItem disabled>
              <p className="block p-2 font-light text-gray-300">
                Precipitation
              </p>
            </MenuItem>
            <UnitButton
              label="Millimeters (mm)"
              value="metric"
              currentValue={distance}
              onClick={() => changeUnit("distance", "metric")}
            />
            <UnitButton
              label="Inches (in)"
              value="imperial"
              currentValue={distance}
              onClick={() => changeUnit("distance", "imperial")}
            />
          </MenuItems>
        </div>
      </Menu>
    </div>
  );
}
