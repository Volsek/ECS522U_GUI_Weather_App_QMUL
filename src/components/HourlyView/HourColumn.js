
import "./HourlyView.css"
import { MDBContainer, MDBRow, MDBCol,MDBIcon } from "mdbreact";

import {useState} from 'react'


const HourColumn = ({hours , icon , temp }) => {

    
    return (
            <MDBCol className="hoursCol">
                <MDBRow center={true} className="rowHours">
                    {hours}
                </MDBRow>

                <MDBRow center={true} className="rowPic">
                    {icon}
                </MDBRow>

                <MDBRow center={true} className="rowTemperature">
                    {temp}
                </MDBRow>

            </MDBCol>
    )
}

export default HourColumn
