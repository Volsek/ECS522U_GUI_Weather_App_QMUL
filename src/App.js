import { useEffect, useState } from 'react'
import './App.css';
import WeeklyView from "./components/WeeklyView/WeeklyView";
import HourlyView from "./components/HourlyView/HourlyView";
import SideBar from "./components/Sidebar/Sidebar";
import DayView from './components/DayView/DayView'
import SelectedDay2 from './components/SelectedDayView/Version2/SelectedDay2';
import DaySpecView from './components/DaySpecificationView/DaySpecView'

function App() {
  //Constant for API calls
  let lat = 51.507351
  let lon = -0.127758
  const apikey = "d8d2a988639cedb5768cd091a9caa26b"
  const [weather, setWeather] = useState("")
  // Weather object that user is currently viewing
  const [pageWeather, setPageWeather] = useState("")
  /* -1 corresponds to current day (today), the value will change as the user 
  will click the next/ prev button and will be used to track postion in the api */
  const [positionOnApi, setPosition] = useState(-1)

  //Function used to move next day 
  function moveNextDay() {
    //Reached the index day to fetch a day
    if (positionOnApi + 1 == 8) {
      console.log("Maxium day reached")
      return false
    }
    //Ignore the first element in the daily array object (API) as it produce duplicate records
    if (positionOnApi == -1){
        setPageWeather(weather.daily[positionOnApi + 2])
        setPosition(positionOnApi + 2)
    }
    //Standard behaviour when user click the next button in the SelectDay2.js
    else {
      setPageWeather(weather.daily[positionOnApi + 1])
      setPosition(positionOnApi + 1)
    }

  }
  //Function used to move prev day 
  function movePrevDay() {
    //Reached the index day to fetch a day
    if ((positionOnApi - 1) == -2) {
      console.log("Minimum day reached")
      return false
    }
    //Reached the index day to fetch a day
    if (positionOnApi - 1 == -1) {
      console.log("Returned to base")
      setPageWeather(weather)
      setPosition(-1)
    }
    //Reached the index day to fetch a day
    else {
      setPageWeather(weather.daily[positionOnApi - 1])
      setPosition(positionOnApi - 1)
    }

  }


  //Set the initial state of variables when the page is loadod
  useEffect(() => {
    //Get the data from the api and assign to corresponding objects
    const getWeather = async () => {
      const weatherFromServer = await fetchWeather()
      setWeather(weatherFromServer)
      setPageWeather(weatherFromServer)
    }

    getWeather()


  }, [lon, lat, apikey])

  //API methods 
  const fetchWeather = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&units=metric&appid=${apikey}`)
    const data = await res.json()
    return data
  }
  //Return all componenets with corresponding props
  return (
    <div className="App">
      <main>
        <nav>
          <SideBar />
        </nav>
        <div id='SelectedDay'>
          <SelectedDay2 pageWeather={pageWeather} indexApi={positionOnApi} moveFowardAction={moveNextDay} moveBackwardAction={movePrevDay} />
        </div>
        <div id='DayView'>
          <DayView pageWeather={pageWeather} indexApi={positionOnApi} />
        </div>
        <div id = "DaySpec">
          <DaySpecView  pageWeather = {pageWeather} indexApi={positionOnApi}/>
        </div>
        <div id='HourlyView'>
          <HourlyView weatherObject={weather} />
        </div>
        <div id='WeeklyView'>
          <WeeklyView weather={weather} />
        </div>

      </main>
    </div>
  );
}

export default App;
