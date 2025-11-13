import { Fragment, useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import type { CityLocation } from "./city";
import { CITY_LOCATIONS} from "./city";
type SearchListProps = {
  onCitySelect: (city: CityLocation) => void;
};

export function SearchList({ onCitySelect }: SearchListProps) {
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState<CityLocation | null>(null);

  const filteredCities =
    query === ""
      ? CITY_LOCATIONS
      : CITY_LOCATIONS.filter((city) =>
          city.name.toLowerCase().includes(query.toLowerCase())
        );

  const handleSelect = (city: CityLocation | null) => {
    setSelectedCity(city);
   
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4">
  <h1 className="font-bold text-2xl mb-4 text-center">
    How's the sky looking today?
  </h1>
  
  {/* Kontener flex dla inputa i przycisku */}
  <div className="flex items-center w-72">
    <Combobox value={selectedCity} onChange={handleSelect} className="flex-1">
      <div className="relative">
        <ComboboxInput
          className="w-full bg-gray-700 rounded-l-xl p-2 text-white placeholder-gray-400"
          placeholder="Search for a place..."
          displayValue={(city: CityLocation) => city?.name || ""}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxOptions className="absolute mt-2 w-full bg-gray-800 text-white rounded-xl shadow-lg max-h-60 overflow-auto z-10">
          {filteredCities.length === 0 ? (
            <div className="p-2 text-gray-400">No results found.</div>
          ) : (
            filteredCities.map((city) => (
              <ComboboxOption key={city.name} value={city} as={Fragment}>
                {({ active }) => (
                  <li
                    className={`cursor-pointer p-2 ${
                      active ? "bg-blue-500 text-white" : "text-gray-200"
                    }`}
                  >
                    {city.name}, {city.country}
                  </li>
                )}
              </ComboboxOption>
            ))
          )}
        </ComboboxOptions>
      </div>
    </Combobox>

    <button
      onClick={() => {
        if (selectedCity !== null) {
          onCitySelect(selectedCity);
        }
      }}
      className="bg-blue-500 rounded-r-xl p-2 ml-1 text-white"
    >
      Search
    </button>
  </div>
</div>
    
  );
}
