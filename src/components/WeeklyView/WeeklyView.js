import React, {Component} from "react";
import "./WeeklyView.css"
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";

class weeklyView extends Component{
    constructor(props) {
        super(props);
        this.state ={
            weather : undefined
        }
    }

       render(){
           return(
               <main id="weeklyview">
                   <h1 className="mb-0">Week</h1>
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
