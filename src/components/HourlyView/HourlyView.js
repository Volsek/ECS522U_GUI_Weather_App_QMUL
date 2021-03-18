import "./HourlyView.css"
import { MDBContainer, MDBRow, MDBCol,MDBIcon } from "mdbreact"
import HourColumn from "./HourColumn"
import { unstable_concurrentAct } from "react-dom/test-utils"

const HourlyView = ({weather}) => {

    
    return (
        <div className="mainHoursContainer">

            <h1 class="mb-0">Today</h1>
            <MDBContainer  fluid={true}  > 
                    <MDBRow id="main_row">
                        <HourColumn hours = {weather.timezone} icon = "something"  temp  = "25 c" />
                        <HourColumn hours =  "11:00 am" icon = "something"  temp  = "25 c" />
                        <HourColumn hours = "11:00 am" icon = "something"  temp  = "25 c" />
                    </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default HourlyView
