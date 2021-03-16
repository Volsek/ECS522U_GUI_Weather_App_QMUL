import {useState, useEffect} from 'react'
import './App.css';
import WeeklyView from "./components/WeeklyView/WeeklyView";
import HourlyView from "./components/HourlyView/HourlyView";
import SideBar from "./components/Sidebar/Sidebar";


function App() {
  const lat = 33.44179
  const lon = -94.037689
  const apikey = "d8d2a988639cedb5768cd091a9caa26b"
  const [weather, setWeather] =  useState("")

  useEffect(() => {
    const getWeather  =  async() => {
      const weatherFromServer = await fetchWeather()
      setWeather(weatherFromServer)
    }

    getWeather()
  }, [])
  //Fetch tasks 
  const fetchWeather =  async() => {
    const res  = await  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&units=metric&appid=${apikey}`)
    const data  =  await res.json()
    console.log(data.hourly)
    return data
  }



  return (
    <div className="App">
      <main>
        <nav>
          <SideBar/>
        </nav>
        <div id='SelectedDay'>

        </div>
        <div id='HourlyView'>
          <HourlyView weather = {weather} />
        </div>
        <div id='WeeklyView'>
          <WeeklyView weather={{weather}}/>
        </div>

      </main>
    </div>
  );
}

export default App;
