import "./index.css";
import { Headline } from "./components/MenuBar.tsx";
import { SearchList } from "./components/search.tsx";
import { Weather } from "./components/mainweather.tsx";
import { Days } from "./components/info.tsx";
import { Weeks } from "./components/week.tsx";
import { Hour } from "./components/hours.tsx";
function App() {
  return (
    <>
    
      <Headline />
      <SearchList />
      <br></br>
      <div className="float-left h-100% w-3/5">
      
      <Weather
  city="Berlin"
  country="Germany"
  temperature={67}
  dates={new Date()}
/>
    <Days 
    feel={18}
    hum={46}
    wind={14}
    pre={0}
    />
    <br></br>
    <p>Daily forecast</p>
    <br></br>
    <div className="flex gap-4">
    <Weeks 
    wek="Tue"
    first={20}
    second={14}
    name="rain"
    />
     <Weeks 
    wek="Wed"
    first={21}
    second={15}
    name="dizzle"
    />
     <Weeks 
    wek="Thu"
    first={24}
    second={14}
    name="sunny"
    />
     <Weeks 
    wek="Fri"
    first={25}
    second={13}
    name="partly-cloudy"
    />
     <Weeks 
    wek="Sat"
    first={21}
    second={15}
    name="storm"
    />
     <Weeks 
    wek="Sun"
    first={25}
    second={16}
    name="snow"
    />
     <Weeks 
    wek="Mon"
    first={24}
    second={15}
    name="fog"
    />
    </div>
    </div>
    <div className="float-left w-2/5">
  <Hour
    data={[
      { name: "snow", hour: 1, stop: -2 },
      { name: "rain", hour: 2, stop: 3 },
      { name: "sunny", hour: 3, stop: 5 },
      { name: "overcast", hour: 4, stop: 4 },
      { name: "storm", hour: 5, stop: 2 },
      { name: "fog", hour: 6, stop: 1 },
      { name: "sunny", hour: 7, stop: 6 },
    ]}
  />
</div>

    </>
  );
}

export default App;
