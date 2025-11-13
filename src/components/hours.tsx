type HourData = {
  name: string;
  hour: number;
  stop: number;
  date?: string;
};

type HourProps = {
  data: HourData[];
  selectedDay: string;
  onDayChange: (day: string) => void;
  daily: string[];
};

export function Hour({ data, selectedDay, onDayChange, daily }: HourProps) {
  return (
    <div className="bg-gray-600 gap-2 rounded-xl ml-5 p-2">
      <div className="flex justify-between">
        <p>Hourly forecast</p>
        <select
          value={selectedDay}
          onChange={(e) => onDayChange(e.target.value)}
          className="text-white p-2 bg-gray-500 rounded-xl"
        >
          {daily.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      <br />
      <div className="max-h-140 overflow-y-auto">
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
          <p className="mr-auto my-auto">{item.hour} {item.hour >= 12 ? 'PM' : 'AM'}</p>
          <p className="my-auto p-4">{item.stop}°</p>
        </div>
      ))}
      </div>
    </div>
  );
}