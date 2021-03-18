import "./HourlyView.css"
import { MDBRow, MDBCol } from "mdbreact";


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
