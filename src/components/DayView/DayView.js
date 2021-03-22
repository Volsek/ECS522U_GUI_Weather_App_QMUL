import "./DayView.css"



const DayView = () => {
    return (
        <div className= "dayMain">
            <div className  = "Location">
                <img src= "location.png" height = "30px" width = "22px" />
                <p>London, UK</p>
            </div>

            <div className = "InformationDay">

                <div className =  "temperatureToday">
                    <p> 22&deg;C</p>
                </div>

                <div className =  "weatherToday">
                    <div className = "currentTodayWeather">
                        <img src = "http://openweathermap.org/img/w/02d.png" alt =  "weatherImage"  witdth = "60%" height = "100%"></img>
                        
                    </div>

                    <div className = "detailedWeatherToday">
                        <p> Partialy Cloudy</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DayView

