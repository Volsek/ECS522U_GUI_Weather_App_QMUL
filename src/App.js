import { useEffect, useState } from 'react'
import './App.css';
import WeeklyView from "./components/WeeklyView/WeeklyView";
import HourlyView from "./components/HourlyView/HourlyView";
import SideBar from "./components/Sidebar/Sidebar";
import DayView from './components/DayView/DayView'
import SelectedDay from './components/SelectedDayView/SelectedDay';
import DaySpecView from './components/DaySpecificationView/DaySpecView'

function App() {
  let currentDay = (new Date().getUTCDay())
  /*Location Data : London*/
  let lat = 51.507351
  let lon = -0.127758
  const apikey = "d8d2a988639cedb5768cd091a9caa26b"
  const [weather, setWeather] = useState("")
  const [pageWeather, setPageWeather] = useState("")
  const [positionOnApi, setPosition] = useState(-1)



  function moveNextDay() {
    if (positionOnApi + 1 == 8) {
      console.log("Maxium day reached")
      return false
    }
    if (positionOnApi == -1){
        setPageWeather(weather.daily[positionOnApi + 2])
        setPosition(positionOnApi + 2)
  
    }else {
      setPageWeather(weather.daily[positionOnApi + 1])
      setPosition(positionOnApi + 1)
    }

  }

  function movePrevDay() {
    if ((positionOnApi - 1) == -2) {
      console.log("Minimum day reached")
      return false
    }
    if (positionOnApi - 1 == -1) {
      console.log("Returned to base")
      setPageWeather(weather)
      setPosition(-1)
    } 
    else {
      setPageWeather(weather.daily[positionOnApi - 1])
      setPosition(positionOnApi - 1)
    }

  }

  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&units=metric&appid=${apikey}`)
  //     .then((res) => res.json())
  //     .then((data) => setWeather(data))



  // }, [lon, lat, apikey]);


  useEffect(() => {
    const getWeather = async () => {
      const weatherFromServer = await fetchWeather()
      setWeather(weatherFromServer)
      setPageWeather(weatherFromServer)
    }

    getWeather()


  }, [lon, lat, apikey])
  //Fetch tasks 
  const fetchWeather = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&units=metric&appid=${apikey}`)
    const data = await res.json()
    console.log(data.hourly)
    return data
  }


/* Display Components on the APP*/
  return (
    <div className="App">
      <main>
        <nav>
          <SideBar />
        </nav>
        <div id='SelectedDay'>
          <SelectedDay pageWeather={pageWeather} indexApi={positionOnApi} moveFowardAction={moveNextDay} moveBackwardAction={movePrevDay} />
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
