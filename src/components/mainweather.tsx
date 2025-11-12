type WeatherProps = {
  city: string;
  country: string;
  temperature: number;
  dates: Date;
};

export function Weather({ city, country, temperature, dates }: WeatherProps) {
  return (
    <div className="bg-[url('/src/assets/images/bg-today-large.svg')] w-3/5 bg-cover rounded-3xl flex justify-between h-[280px]">
      <div className="w-1/2 mt-30">
      
        <p className="font-bold text-xl ">
          {city}, {country}
        </p>
        <p className="font-light text-gray-300">
          {dates.toDateString()}
        </p>
      </div>
      <div className="w-1/2 flex items-center justify-end gap-2">
        <img
          src="/src/assets/images/icon-sunny.webp"
          alt="Sunny"
          className="w-[60px] h-[60px]"
        />
        <h1 className="font-bold text-5xl">{temperature}°</h1>
      </div>
    </div>
  );
}