import React, {Component} from "react";
import "./WeeklyView.css"
import { MDBContainer, MDBRow, MDBCol,MDBIcon } from "mdbreact";

class weeklyView extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // a helpful tool, look in the console to see the structure of the info and how to reach it


    }

    render() {
        return(
            <main id="weeklyview" >
                <MDBContainer fluid={true}>
                    <MDBRow>
                        <MDBCol>
                            1
                        </MDBCol>
                        <MDBCol>
                            2
                        </MDBCol>
                        <MDBCol>
                            3
                        </MDBCol>
                        <MDBCol>
                            4
                        </MDBCol>
                        <MDBCol>
                            5
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </main>
        )
    }
}

export default weeklyView

/*
<mdb.MDBRow className="pt-5 homeRows" center>
<mdb.MDBCol size="12" md="5">
    <mdb.
1
</mdb.MDBCol>
</mdb.MDBRow>*/
