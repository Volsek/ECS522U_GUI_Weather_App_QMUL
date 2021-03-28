
import React from 'react'
import "./DaySpec.css"

/* Scroll-based view of daily weather information
shows the weather for set times in the location, and 
allows the user to scroll through */

const DaySpecView = ({ pageWeather , indexApi }) => {
    if (pageWeather.current != undefined  && indexApi == -1){
        return (
            <div className="container1">

                <div className="box">
                    <div className="iconWeatherContainer">
                        <img src="wind.png" className="img" />
                    </div>

                    <div className="textContainer">

                        <div className="titleSpecContainter">
                            <p>Wind Speed</p>
                        </div>

                        <div className="valueSpecContainter">
                             {pageWeather.current.wind_speed} m/s
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="iconWeatherContainer">
                        <img src="airpressure.png" className="img" />
                    </div>

                    <div className="textContainer">

                        <div className="titleSpecContainter">
                            <p>Air Pressure</p>
                        </div>

                        <div className="valueSpecContainter">
                            {pageWeather.current.pressure} mb                     
                        </div>
                    </div>
                </div>


                <div className="box">
                    <div className="iconWeatherContainer">
                        <img src="humidity.png" className="img" />
                    </div>

                    <div className="textContainer">

                        <div className="titleSpecContainter">
                            <p>Humidity</p>
                        </div>

                        <div className="valueSpecContainter">
                            {pageWeather.current.humidity} %
                        </div>
                    </div>
                </div>


                <div className="box">
                    <div className="iconWeatherContainer">
                        <img src="uv.png" className="img" />
                    </div>

                    <div className="textContainer">

                        <div className="titleSpecContainter">
                            <p>UV Index</p>
                        </div>

                        <div className="valueSpecContainter">
                            {pageWeather.current.uvi}
                        </div>
                    </div>
                </div>
            </div>



        )
    } else if ((pageWeather != undefined  && indexApi != undefined  && indexApi > -1)){
        return (
            <div className="container1">

                <div className="box">
                    <div className="iconWeatherContainer">
                        <img src="wind.png" className="img" />
                    </div>

                    <div className="textContainer">

                        <div className="titleSpecContainter">
                            <p>Wind Speed</p>
                        </div>

                        <div className="valueSpecContainter">
                             {pageWeather.wind_speed} m/s
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="iconWeatherContainer">
                        <img src="airpressure.png" className="img" />
                    </div>

                    <div className="textContainer">

                        <div className="titleSpecContainter">
                            <p>Air Pressure</p>
                        </div>

                        <div className="valueSpecContainter">
                            {pageWeather.pressure} mb                     </div>
                    </div>
                </div>


                <div className="box">
                    <div className="iconWeatherContainer">
                        <img src="humidity.png" className="img" />
                    </div>

                    <div className="textContainer">

                        <div className="titleSpecContainter">
                            <p>Humidity</p>
                        </div>

                        <div className="valueSpecContainter">
                            {pageWeather.humidity} %
                        </div>
                    </div>
                </div>


                <div className="box">
                    <div className="iconWeatherContainer">
                        <img src="uv.png" className="img" />
                    </div>

                    <div className="textContainer">

                        <div className="titleSpecContainter">
                            <p>UV Index</p>
                        </div>

                        <div className="valueSpecContainter">
                            {pageWeather.uvi}
                        </div>
                    </div>
                </div>
            </div>



        )
    }
    else {
        return(
        <p> Loading</p>
        )
    }
}

export default DaySpecView
