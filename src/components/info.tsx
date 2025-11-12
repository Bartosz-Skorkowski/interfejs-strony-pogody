type DayProps = {
  feel: number;
  hum: number;
  wind: number;
  pre: number;
};

export function Days({feel, hum, wind, pre}: DayProps) {
    return(
        <>
    <div className="flex gap-4">
        <div className="bg-gray-700 p-5 size-35 rounded-2xl align-middle  h-26 w-1/4">
            <p className="font-light">Feels like</p>
            <p className="text-xl">{feel} °</p>
        </div>

        <div className="bg-gray-700 p-5 size-35 rounded-2xl align-middle  h-26 w-1/4">
            <p className="font-light">Humidity</p>
            <p className="text-xl">{hum} %</p>
        </div>

        <div className="bg-gray-700 p-5 size-35 rounded-2xl align-middle  h-26 w-1/4">
            <p className="font-light">Wind</p>
            <p className="text-xl">{wind} km/h</p>
        </div>

        <div className="bg-gray-700 p-5 size-35 rounded-2xl align-middle  h-26 w-1/4">
            <p className="font-light">Precipitation</p>
            <p className="text-xl">{pre} mm</p>
        </div>
    </div>
        </>
    );
}