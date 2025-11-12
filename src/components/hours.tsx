type HourData = {
  name: string;
  hour: number;
  stop: number;
};

type HourProps = {
  data: HourData[];
};


export function Hour({ data }: HourProps) {
  return (
    <div className="bg-gray-600  gap-2 rounded-xl ml-5 p-2">
      <div className="flex justify-between">
        <p>Hourly forecast</p>
        <select className="text-white p-2 bg-gray-500 rounded-xl">
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
        </select>
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className="bg-gray-700 rounded-2xl flex justify-between mb-2"
        >
          <img
            src={`src/assets/images/icon-${item.name}.webp`}
            alt={item.name}
            className="size-20"
          />
          <p className="mr-auto my-auto">{item.hour} PM</p>
          <p className="my-auto p-4">{item.stop}°</p>
        </div>
      ))}
    </div>
  );
}
