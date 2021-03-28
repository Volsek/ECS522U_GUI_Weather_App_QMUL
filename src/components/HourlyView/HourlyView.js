import "./HourlyView.css"
import { MDBContainer, MDBRow } from "mdbreact"
import HourColumn from "./HourColumn"


/* Display hourly weather information
used in scrolling view to show weather
changes for the duration of the day */
const HourlyView = ({ weatherObject }) => {
    var d = new Date();
    var currentHours = d.getHours();
    var width  =  "100px";


    const styleMainROw = {
        "flex-wrap" : "nowrap" ,
         "overflow-x" : "auto",
         "flex-direction": "row",
         "background-color": "#54906c"

         
    }
    if (weatherObject.hourly !== undefined) {
        return (

            <div className="mainHoursContainer">

                <h1 className="mb-0">Today</h1>
                <MDBContainer fluid={true} >
                    <MDBRow id="main_row " style = {styleMainROw}>
                        {weatherObject.hourly.slice(1, 12).map((aWeather,index) => (
                            <HourColumn  key={index} hours={aWeather.dt} icon={"http://openweathermap.org/img/w/" + aWeather.weather[0].icon + ".png"} temp={Math.round(aWeather.temp)} />
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
