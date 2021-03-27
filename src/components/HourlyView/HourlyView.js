import "./HourlyView.css"
import { MDBContainer, MDBRow } from "mdbreact"
import HourColumn from "./HourColumn"

const HourlyView = ({ weatherObject }) => {
    var d = new Date();
    var currentHours = d.getHours();

    if (weatherObject.hourly !== undefined) {
        return (

            <div className="mainHoursContainer">

                <h1 className="mb-0">Today</h1>
                <MDBContainer fluid={true} className = "somethingxs" >
                    <MDBRow id="main_row">
                        {weatherObject.hourly.slice(1, 4).map((aWeather,index) => (
                            <HourColumn key={index} hours={aWeather.dt} icon={"http://openweathermap.org/img/w/" + aWeather.weather[0].icon + ".png"} temp={Math.round(aWeather.temp)} />
                        ))}
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
    else {
        return (<p>Loading</p>)
    }
}

export default HourlyView
