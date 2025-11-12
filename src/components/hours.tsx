type HourProps = {
    name: string;
    hour: number;
    stop: number;
}

export function Hour({name, hour, stop}: HourProps) {
    return(
        <div className="bg-gray-600 w-3/4 gap-2 rounded-xl ml-5 p-2" >
            <div className="flex justify-between">
            <p>Hourly forecast</p>
            <select className="text-white p-2 bg-gray-500 rounded-xl">
                <option>Tuseday</option>
                <option>Wednestday</option>
                <option>Thurstday</option>
            </select>
            </div>
             <div className="bg-gray-700 rounded-2xl flex justify-between mb-2">
                <img src={`src/assets/images/icon-${name}.webp`} className="size-20"></img>
                <p className=" mr-auto my-auto">{hour} PM </p>
               <p className=" my-auto p-4" >{stop}°</p>
            </div>
            
            <div className="bg-gray-700 rounded-2xl flex justify-between mb-2">
                <img src={`src/assets/images/icon-${name}.webp`} className="size-20"></img>
                <p className=" mr-auto my-auto">{hour} PM </p>
               <p className=" my-auto p-4" >{stop}°</p>
            </div>
            <div className="bg-gray-700 rounded-2xl flex justify-between mb-2">
                <img src={`src/assets/images/icon-${name}.webp`} className="size-20"></img>
                <p className=" mr-auto my-auto">{hour} PM </p>
               <p className=" my-auto p-4" >{stop}°</p>
            </div>
            <div className="bg-gray-700 rounded-2xl flex justify-between mb-2">
                <img src={`src/assets/images/icon-${name}.webp`} className="size-20"></img>
                <p className=" mr-auto my-auto">{hour} PM </p>
               <p className=" my-auto p-4" >{stop}°</p>
            </div>
            <div className="bg-gray-700 rounded-2xl flex justify-between mb-2">
                <img src={`src/assets/images/icon-${name}.webp`} className="size-20"></img>
                <p className=" mr-auto my-auto">{hour} PM </p>
               <p className=" my-auto p-4" >{stop}°</p>
            </div>
            <div className="bg-gray-700 rounded-2xl flex justify-between mb-2">
                <img src={`src/assets/images/icon-${name}.webp`} className="size-20"></img>
                <p className=" mr-auto my-auto">{hour} PM </p>
               <p className=" my-auto p-4" >{stop}°</p>
            </div>
            <div className="bg-gray-700 rounded-2xl flex justify-between mb-2">
                <img src={`src/assets/images/icon-${name}.webp`} className="size-20"></img>
                <p className=" mr-auto my-auto">{hour} PM </p>
               <p className=" my-auto p-4" >{stop}°</p>
            </div>
            
        </div>
    );
}