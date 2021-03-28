
import React from 'react'
import "./DaySpec.css"

const DaySpecView = ({ pageWeather, indexApi }) => {
    if (pageWeather.current != undefined && indexApi == -1) {
        return (
            <div className="containerSpec">
                {/* Wind speed box*/}
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
                {/* Air pressure box*/}
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
                {/* Humudity box*/}
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
                {/* UV index box*/}
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
    } // Change way to access object from api when day is different from today 
    else if ((pageWeather != undefined && indexApi != undefined && indexApi > -1)) {
        return (
            <div className="containerSpec">
                {/* Wind speed box*/}
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
                {/* Air pressure box*/}
                <div className="box">
                    <div className="iconWeatherContainer">
                        <img src="airpressure.png" className="img" />
                    </div>

                    <div className="textContainer">
                        <div className="titleSpecContainter">
                            <p>Air Pressure</p>
                        </div>

                        <div className="valueSpecContainter">
                            {pageWeather.pressure} mb
                        </div>

                    </div>
                </div>
                {/* Humudity box*/}
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
                {/* UV index box*/}
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
        return (
            <p> Loading</p>
        )
    }
}
export default DaySpecView
