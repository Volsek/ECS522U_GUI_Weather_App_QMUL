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
                <h1 class="mb-0">Week</h1>
                <MDBContainer fluid={true} >
                    <MDBRow id="Outerbox_row">
                        <MDBCol>
                            <MDBRow center={true}>
                                Day
                            </MDBRow>
                            <MDBRow center={true}>
                                Icon
                            </MDBRow>
                            <MDBRow center={true}>
                                Temp
                            </MDBRow>
                        </MDBCol>
                        <MDBCol>
                            <MDBRow center={true}>
                                Day
                            </MDBRow>
                            <MDBRow center={true}>
                                Icon
                            </MDBRow>
                            <MDBRow center={true}>
                                Temp
                            </MDBRow>
                        </MDBCol>
                        <MDBCol>
                            <MDBRow center={true}>
                                Day
                            </MDBRow>
                            <MDBRow center={true}>
                                Icon
                            </MDBRow>
                            <MDBRow center={true}>
                                Temp
                            </MDBRow>
                        </MDBCol>
                        <MDBCol>
                            <MDBRow center={true}>
                                Day
                            </MDBRow>
                            <MDBRow center={true}>
                                Icon
                            </MDBRow>
                            <MDBRow center={true}>
                                Temp
                            </MDBRow>
                        </MDBCol>
                        <MDBCol>
                            <MDBRow center={true}>
                                Day
                            </MDBRow>
                            <MDBRow center={true}>
                                Icon
                            </MDBRow>
                            <MDBRow center={true}>
                                Temp
                            </MDBRow>
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
