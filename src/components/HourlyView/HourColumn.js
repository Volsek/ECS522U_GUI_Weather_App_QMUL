import "./HourlyView.css"
import { MDBRow, MDBCol } from "mdbreact";
const HourColumn = ({hours , icon , temp }) => {
   

    const convertUnix = (unix) => {

        return (
            new Date(unix * 1000).getHours().toString() +  ":00"
        )
    }

    // const convertCelsius  = (kelvin) => {
    //     var celsius  =  kelvin - 273.15
    //     return (
    //         celsius
    //     )
    // }
    var hoursConverted =  convertUnix(hours)
    return (
            <MDBCol className="hoursCol">
                <MDBRow center={true} className="rowHours">
                    {hoursConverted}
                </MDBRow>

                <MDBRow center={true} className="rowPic">
                    <img src = {icon}  width = "100px" height =  "100px"/>
                </MDBRow>

                <MDBRow center={true} className="rowTemperature">
                    {temp}<p>  &deg; C</p>
                </MDBRow>

            </MDBCol>
    )
}

export default HourColumn
