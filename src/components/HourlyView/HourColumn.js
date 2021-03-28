import "./HourlyView.css"
import { MDBRow, MDBCol } from "mdbreact";
const HourColumn = ({ hours, icon, temp }) => {
    //Function used to convert unix to time  
    const convertUnix = (unix) => {
        return (
            new Date(unix * 1000).getHours().toString() + ":00"
        )}

    //Function calling passing the date in unix and convert to date 
    var hoursConverted = convertUnix(hours)
    return (
        <MDBCol className="hoursCol" style={{ flex: "0  0 10em" }} >
            {/* Hours Container */}
            <MDBRow center={true} className="rowHours">
                {hoursConverted}
            </MDBRow>
            {/* Image Container */}
            <MDBRow center={true} className="rowPic">
                <img src={icon} width="100px" height="100px" alt="icon" />
            </MDBRow>
            {/* Temp Container */}
            <MDBRow center={true} className="rowTemperature">
                {temp}<p>  &deg; C</p>
            </MDBRow>

        </MDBCol>
    )}

export default HourColumn
