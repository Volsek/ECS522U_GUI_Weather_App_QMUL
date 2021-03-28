import React from "react";
import "./WeeklyView.css"
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";

const num_to_day = (num)=>{
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[num]
}

    const weeklyView = ({weather}) => {
            if(weather.daily !== undefined ){
            return(
                <main id="weeklyview">
                    <h1 className="mb-0">Week</h1>
                    <MDBContainer fluid={true} >
                        <MDBRow id="Outerbox_row">
                            {weather.daily.slice(0, 5).map((d,index) => (
                                <MDBCol key={index} >
                                    <MDBRow center={true}>
                                        {num_to_day(new Date(d.dt * 1000).getDay())}
                                    </MDBRow>
                                    <MDBRow center={true}>
                                        <img
                                        src={`http://openweathermap.org/img/w/${d.weather[0].icon}.png`}
                                        height="50px"
                                        alt={"Icon"}
                                        />
                                    </MDBRow>
                                    <MDBRow center={true}>
                                        {Math.round(d.temp.day)} °C
                                    </MDBRow>
                                </MDBCol>
                            ))}
                        </MDBRow>
                    </MDBContainer>
                </main>
            )
        }else{
            return(<p>Loading</p>)
        }
}
export default weeklyView
