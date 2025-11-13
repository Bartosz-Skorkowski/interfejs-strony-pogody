type WeatherProps = {
  city: string;
  country: string;
  temperature: number;
  dates: Date;
};

export function Weather({ city, country, temperature, dates }: WeatherProps) {
  return (
    <div className="bg-[url('/src/assets/images/bg-today-large.svg')] bg-cover rounded-3xl flex justify-between h-[280px] p-6 text-white">
      <div className="flex flex-col justify-center">
        <p className="font-bold text-2xl">
          {city}, {country}
        </p>
        <p className="font-light text-gray-300">
          {dates.toDateString()}
        </p>
      </div>

      <div className="flex flex-col justify-center items-end">
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
