import "./DayView.css"



const DayView = ({ weather },{day}) => {
    if (weather.current !== undefined) {
        return (
            <div className="dayMain">
                <div className="location">
                    <img src="location.png" height="30px" width="22px" />
                    <p>London, UK</p>
                </div>

                <div className="informationDay">

                    <div className="temperatureToday">
                        <p> {Math.round(weather.current.temp)}&deg;C</p>
                    </div>

                    <div className="weatherToday">
                        <div className="currentTodayWeather">
                            <img src={"http://openweathermap.org/img/w/" + weather.current.weather[0].icon + ".png"} alt="weatherImage" witdth="60%" height="100%"></img>

                        </div>

                        <div className="detailedWeatherToday">
                            <p> {weather.current.weather[0].main}</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }else {
        return(<p>Loading</p>)
    }
}

export default DayView

