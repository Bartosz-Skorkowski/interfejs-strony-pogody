import "./index.css";
import { Headline } from "./components/MenuBar.tsx";
import { SearchList } from "./components/search.tsx";
import { Weather } from "./components/mainweather.tsx";
import { Days } from "./components/info.tsx";
import { Weeks } from "./components/week.tsx";
import { Hour } from "./components/hours.tsx";
function App() {
  return (
    <main className="flex flex-col justify-center max-w-7xl mx-auto">
    
      <Headline />
      <SearchList />
      <br></br>
      <div className="flex flex-col md:flex-row">
      <div className=" h-100% w-3/5">
      
      <Weather
  city="Berlin"
  country="Germany"
  temperature={67}
  dates={new Date()}
/>
<br></br>
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
    name="drizzle"
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
    <div className=" w-2/5">
  <Hour
    data={[
      { name: "snow", hour: 3, stop: 20 },
      { name: "rain", hour: 4, stop: 20 },
      { name: "sunny", hour: 5, stop: 20 },
      { name: "overcast", hour: 6, stop: 19 },
      { name: "storm", hour: 7, stop: 18 },
      { name: "fog", hour: 8, stop: 18 },
      { name: "sunny", hour: 9, stop: 17 },
    ]}
  />
</div>
</div>

    </main>
  );
}

export default App;
