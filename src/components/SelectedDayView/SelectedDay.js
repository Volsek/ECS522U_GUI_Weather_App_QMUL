import React from "react";
import "./SelectedDay.css"



const SelectedDay = ({ pageWeather , indexApi, moveFowardAction, moveBackwardAction}) => {
    
    
    let currentDay = (new Date())
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const convertUnix = (unix) => {
        var utcDate  =  new Date(unix * 1000)
        if (currentDay.getUTCDate() == utcDate.getUTCDate()){
            console.log(currentDay.getUTCDate())
            return ("Today")
        }else if ((utcDate.getUTCDate() - currentDay.getUTCDate()) ==  1){
            return ("Tomorrow")
        }else {
            return  days[utcDate.getDay()]
        }
    }

    if (pageWeather.current != undefined  && indexApi == -1){
    
    return (
        <div id = "mainContainter">
            <div id= "prevDay"> 
                <button type="button" onClick= {moveBackwardAction}><img src= "left-arrow.svg"  height="20px" width="20px"/> </button>
            </div>
            <div class= "currentDay">
                <p>{convertUnix( pageWeather.current.dt)}</p>
            </div>
            <div id= "nextDay">
                <button type="button" onClick= {moveFowardAction}><img src= "right-arrow.svg"  height="20px" width="20px"/> </button>
            </div>
            
        </div>
    )}else if((pageWeather != undefined   && indexApi > -1)){ 
    
    return (
        <div id = "mainContainter">
        <div id= "prevDay"> 
            <button type="button" onClick= {moveBackwardAction}><img src= "left-arrow.svg"  height="20px" width="20px"/> </button>
        </div>
        <div class= "currentDay">
            <p>{convertUnix( pageWeather.dt)}</p>
        </div>
        <div id= "nextDay">
            <button type="button" onClick= {moveFowardAction} ><img src= "right-arrow.svg"  height="20px" width="20px"/> </button>
        </div>
        
    </div>

    )}else {
        return (
        <p>Loading</p>
        )}
}

export default SelectedDay
