import "./HourlyView.css"
import { MDBContainer, MDBRow, MDBCol,MDBIcon } from "mdbreact";


const HourlyView = () => {
    return (
        <div className="mainHoursContainer">
            <h1 class="mb-0">Today</h1>
            <MDBContainer  fluid={true}  >
                    <MDBRow id="main_row">
                        <MDBCol className = "hoursCol" >
                            <MDBRow center={true} className  = "rowHours">
                                Hours
                            </MDBRow>
                            <MDBRow center={true} className  = "rowPic">
                                Icon
                            </MDBRow>
                            <MDBRow center={true}  className  = "rowTemperature">
                                Temp
                            </MDBRow>
                        </MDBCol>

                        <MDBCol className = "hoursCol">
                            <MDBRow center={true} className  = "rowHours">
                                Hours
                            </MDBRow>
                            <MDBRow center={true}  className  = "rowPic">
                                Icon
                            </MDBRow>
                            <MDBRow center={true} className  = "rowTemperature">
                                Temp
                            </MDBRow>
                        </MDBCol>

                        <MDBCol className = "hoursCol">
                            <MDBRow center={true} className  = "rowHours">
                                Hours
                            </MDBRow>
                            <MDBRow center={true}  className  = "rowPic">
                                Icon
                            </MDBRow>
                            <MDBRow center={true} className  = "rowTemperature">
                                Temp
                            </MDBRow>
                        </MDBCol>

                        <MDBCol className = "hoursCol">
                            <MDBRow center={true} className  = "rowHours">
                                Hours
                            </MDBRow>
                            <MDBRow center={true} className  = "rowPic">
                                Icon
                            </MDBRow>
                            <MDBRow center={true} className  = "rowTemperature">
                                Temp
                            </MDBRow>
                        </MDBCol>



                    </MDBRow>
                </MDBContainer>
        </div>
    )
}

export default HourlyView
