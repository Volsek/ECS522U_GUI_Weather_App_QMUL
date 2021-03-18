import {useState, useEffect} from 'react'
import './App.css';
import WeeklyView from "./components/WeeklyView/WeeklyView";
import HourlyView from "./components/HourlyView/HourlyView";


import API from "./components/API";


function App() {

  const [weather, setWeather] =  useState("")
  const [isLoaded , setIsLoaded]  = useState(false)

  useEffect(() => {
    const getWeather  =  async() => {
      const weatherFromServer = await fetchWeather()
      
      setWeather(weatherFromServer)
      setIsLoaded(true)
    }

    getWeather()
  }, [])
  //Fetch tasks 
  const fetchWeather =  async() => {
    const res  = await  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44179&lon=-94.037689&exclude=alerts,minutely&appid=d8d2a988639cedb5768cd091a9caa26b&units=metric`)
    const data  =  await res.json()
    console.log(data.hourly)
    return data
  }



  return (
    <div className="App">
      <main>
        <nav>

        </nav>
        <div id='SelectedDay'>

        </div>
        <div id='HourlyView'>
          <HourlyView weatherObject = {weather}  isLoaded =  {isLoaded}/>
        </div>
        <div id='WeeklyView'>
          <WeeklyView/>
        </div>

      </main>
    </div>
  );
}

export default App;
