import React from "react";
import "./SelectedDay2.css"


const SelectedDay2 = ({ pageWeather, indexApi, moveFowardAction, moveBackwardAction }) => {
    //Get the current day 
    let currentDay = (new Date())
    //Constant value of days that will match with getUTCDate() number  and display in a text format
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // Convert the unix date to the corresponding date
    const convertUnix = (unix) => {
        //format the date passed in unix 
        var utcDate = new Date(unix * 1000)
        //Get the day number and check if it's the same 
        if (currentDay.getUTCDate() == utcDate.getUTCDate()) {
            return ("Today")
        }//Get the day number and check if the diffence is one day apart
        else if ((utcDate.getUTCDate() - currentDay.getUTCDate()) == 1) {
            return ("Tomorrow")
        }//Pass the number to the array to get the element at index of the array above
        else {
            return days[utcDate.getDay()]
        }
    }
    //Display information of the day, if the current day is Today
    if (pageWeather.current != undefined && indexApi == -1) {
        return (
            <div id="mainContainter">
                {/* Button used to move to the previous day */}
                <div id="prevDay">
                    <button type="button" onClick={moveBackwardAction}><img src="left.png" height="20px" width="20px" /> </button>
                </div>
                {/* Time displayed in  the format : Monday, Tuesday, etc*/}
                <div class="currentDay">
                    <p>{convertUnix(pageWeather.current.dt)}</p>
                </div>
                {/* Button used to move to the previous day */}
                <div id="nextDay">
                    <button type="button" onClick={moveFowardAction}><img src="right.png" height="20px" width="20px" /> </button>
                </div>

            </div>
        )
    }//Display information of the day, if the day is different from today | different accessing to the API object
    else if ((pageWeather != undefined && indexApi > -1)) {
        return (
            <div id="mainContainter">
                {/* Button used to move to the previous day */}
                <div id="prevDay">
                    <button type="button" onClick={moveBackwardAction}><img src="left.png" height="20px" width="20px" /> </button>
                </div>
                {/* Time displayed in  the format : Monday, Tuesday, etc*/}
                <div class="currentDay">
                    <p>{convertUnix(pageWeather.dt)}</p>
                </div>
                {/* Button used to move to the next day */}
                <div id="nextDay">
                    <button type="button" onClick={moveFowardAction} ><img src="right.png" height="20px" width="20px" /> </button>
                </div>

            </div>

        )
    } else {
        return (
            <p>Loading</p>
        )
    }
}

export default SelectedDay2
