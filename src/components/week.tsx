type WeekProps = {
    wek: string;
    first: number;
    second: number;
    name: string;
};

export function Weeks({wek, first, second, name}: WeekProps) {
    return(
        <div className="bg-gray-700 p-5 size-25 rounded-2xl align-middle   h-40 w-1/7">
            <div className="text-center">
            <p>{wek}</p>
            <img src={`src/assets/images/icon-${name}.webp`}></img>
            </div>
            <div className="flex justify-between">
                <p>{first}°</p>
                 <p>{second}°</p>
            </div>
        </div>
    );
}