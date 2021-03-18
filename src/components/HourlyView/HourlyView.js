import "./HourlyView.css"
import { MDBContainer, MDBRow} from "mdbreact"
import HourColumn from "./HourColumn"

const HourlyView = ({weather}) => {

    
    return (
        <div className="mainHoursContainer">

            <h1 className="mb-0">Today</h1>
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
