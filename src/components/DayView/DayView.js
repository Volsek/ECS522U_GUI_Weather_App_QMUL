import "./DayView.css"



const DayView = ({ pageWeather, indexApi }) => {
    if (pageWeather.current !== undefined  &&  indexApi != undefined  && indexApi == -1) {
        return (
            <div className="dayMain">
                <div className="location">
                    <img src="location.png" height="30px" width="22px" />
                    <p>London, UK</p>
                </div>

                <div className="informationDay">

                    <div className="temperatureToday">
                        <p> {Math.round(pageWeather.current.temp)}&deg;C</p>
                    </div>

                    <div className="weatherToday">
                        <div className="currentTodayWeather">
                            <img src={"http://openweathermap.org/img/w/" + pageWeather.current.weather[0].icon + ".png"} alt="weatherImage" witdth="60%" height="100%"></img>

                        </div>

                        <div className="detailedWeatherToday">
                            <p> {pageWeather.current.weather[0].main}</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }else if ((pageWeather != undefined  && indexApi != undefined  && indexApi > -1)){
        return (
            <div className="dayMain">
                <div className="location">
                    <img src="location.png" height="30px" width="22px" />
                    <p>London, UK</p>
                </div>

                <div className="informationDay">

                    <div className="temperatureToday">
                        <p> {Math.round(pageWeather.temp.day)}&deg;C</p>
                    </div>

                    <div className="weatherToday">
                        <div className="currentTodayWeather">
                            <img src={"http://openweathermap.org/img/w/" + pageWeather.weather[0].icon + ".png"} alt="weatherImage" witdth="60%" height="100%"></img>

                        </div>

                        <div className="detailedWeatherToday">
                            <p> {pageWeather.weather[0].main}</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
    
    else {
        return(<p>Loading</p>)
    }
}

export default DayView

