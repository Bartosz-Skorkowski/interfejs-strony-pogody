import { createContext, useContext, useState, type ReactNode } from "react";

export type Unit = "metric" | "imperial";
export type UnitCategory = "temperature" | "speed" | "distance";

type UnitContextType = {
  unityTypes: Record<UnitCategory, Unit>;
  changeUnit: (unitCategory: UnitCategory, unit: Unit) => void;
};
type UnitSign = Record<UnitCategory, Record<Unit, string>>;

export const UNIT_SIGN: UnitSign = {
  temperature: {
    metric: "°C",
    imperial: "°F",
  },
  speed: {
    metric: "km/h",
    imperial: "mph",
  },
  distance: {
    metric: "mm",
    imperial: "in",
  },
};

const unitDefaultContextValues: UnitContextType = {
  unityTypes: {
    temperature: "metric",
    speed: "metric",
    distance: "metric",
  },
  changeUnit: () => {},
};
const UnitContext = createContext(unitDefaultContextValues);

export const UnitProvider = ({ children }: { children: ReactNode }) => {
  const [unityTypes, changeUnitTypes] = useState(
    unitDefaultContextValues.unityTypes
  );
  const changeUnit = (unitCategory: UnitCategory, unit: Unit) => {
    
    changeUnitTypes((previewState) => ({
      ...previewState,
      [unitCategory]: unit,
      
    }));
  };
  return (
    <UnitContext.Provider
      value={{
        unityTypes,
        changeUnit,
      }}
    >
      {children}
    </UnitContext.Provider>
  );
};
export function useUnitContext() {
  const context = useContext(UnitContext);

  if (!context) {
    throw new Error("UnitContext must be used inside Provider");
  }

  return context;
}
