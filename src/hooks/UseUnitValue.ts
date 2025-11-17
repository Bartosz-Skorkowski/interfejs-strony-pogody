import { useUnitContext, type Unit, type UnitCategory } from "../context/UnitContext";

export const useUnitValue = (
  originalValue: number,
  originalUnitCategory: UnitCategory,
  originalUnit: Unit = "metric"
): number => {
    const {unityTypes: {distance, speed, temperature}} = useUnitContext();
    switch(originalUnitCategory){
        case"distance":
        if(originalUnit === distance){
            return originalValue;
        }else if(originalUnit === "metric" && distance === "imperial"){
            return originalValue * 0.039371
        }else {
            return originalValue * 25.4
        }
        break;
        case"speed":
        if(originalUnit === speed){
            return originalValue;
        }else if(originalUnit === "metric" && speed === "imperial"){
            return originalValue * 0.621371
        }else {
            return originalValue * 1.609344
        }
        break;
        case"temperature":
        if(originalUnit === temperature){
            return originalValue;
        }else if(originalUnit === "metric" && temperature === "imperial"){
               return originalValue * 1.8 + 32;
        }else {
               return (originalValue -32) /1.8;
        }
        break;
        
    }
};
