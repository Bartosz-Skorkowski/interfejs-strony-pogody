import "./index.css";
import { Headline } from "./components/MenuBar.tsx";
import { SearchList } from "./components/search.tsx";
import { Weather } from "./components/mainweather.tsx";
import { Days } from "./components/info.tsx";
import { Weeks } from "./components/week.tsx";
function App() {
  return (
    <>
      <Headline />
      <SearchList />
      <br></br>
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
    </>
  );
}

export default App;
