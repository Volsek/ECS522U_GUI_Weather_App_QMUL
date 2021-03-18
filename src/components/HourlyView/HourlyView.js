import "./HourlyView.css"
import { MDBContainer, MDBRow } from "mdbreact"
import HourColumn from "./HourColumn"

const HourlyView = ({ weatherObject, isLoaded }) => {
    var d = new Date();
    var currentHours = d.getHours();  
    // var filterArray = []
    // if (isLoaded != false){
    //     filterArray  =  weatherObject.hourly.filter(aWeather =>(
    //         Math.abs(currentHours - aWeather.dt) < 12
           
    //     ))
    // }
    
    


    return (

        <div className="mainHoursContainer">

            <h1 class="mb-0">Today</h1>
            <MDBContainer fluid={true}  >
                <MDBRow id="main_row">

                    
                    {isLoaded && 
                    
                    
                    
                    
                    weatherObject.hourly.slice(1, 13).map(aWeather =>(
                            <HourColumn hours={aWeather.dt} icon={"http://openweathermap.org/img/w/" + aWeather.weather[0].icon + ".png"} temp={Math.round(aWeather.temp)}/> 
                        )) 
                    }
                    
                    
                    {/* {isLoaded ? <HourColumn hours={weatherObject.current.dt} icon={"http://openweathermap.org/img/w/" + weatherObject.current.weather[0].icon + ".png"} temp="25 c" /> : <HourColumn hours="" icon="" temp="" />}
                    {isLoaded ? <HourColumn hours={weatherObject.current.weather[0].icon} icon="something" temp="25 c" /> : <HourColumn hours="something" icon="" temp="" />}
                    {isLoaded ? <HourColumn hours={weatherObject.current.weather[0].icon} icon="something" temp="25 c" /> : <HourColumn hours="something" icon="" temp="" />}
                    {isLoaded ? <HourColumn hours={weatherObject.current.weather[0].icon} icon="something" temp="25 c" /> : <HourColumn hours="something" icon="" temp="" />}
                    {isLoaded ? <HourColumn hours={weatherObject.current.weather[0].icon} icon="something" temp="25 c" /> : <HourColumn hours="something" icon="" temp="" />}
                    {isLoaded ? <HourColumn hours={weatherObject.current.weather[0].icon} icon="something" temp="25 c" /> : <HourColumn hours="something" icon="" temp="" />}
                    {isLoaded ? <HourColumn hours={weatherObject.current.weather[0].icon} icon="something" temp="25 c" /> : <HourColumn hours="something" icon="" temp="" />}
                    {isLoaded ? <HourColumn hours={weatherObject.current.weather[0].icon} icon="something" temp="25 c" /> : <HourColumn hours="something" icon="" temp="" />}
                    {isLoaded ? <HourColumn hours={weatherObject.current.weather[0].icon} icon="something" temp="25 c" /> : <HourColumn hours="something" icon="" temp="" />}
                    {isLoaded ? <HourColumn hours={weatherObject.current.weather[0].icon} icon="something" temp="25 c" /> : <HourColumn hours="something" icon="" temp="" />}
                    {isLoaded ? <HourColumn hours={weatherObject.current.weather[0].icon} icon="something" temp="25 c" /> : <HourColumn hours="something" icon="" temp="" />}
                    {isLoaded ? <HourColumn hours={weatherObject.current.weather[0].icon} icon="something" temp="25 c" /> : <HourColumn hours="something" icon="" temp="" />}

                    */}



                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default HourlyView
