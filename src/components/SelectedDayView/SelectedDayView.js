import React, {Component} from "react";
import "./SelectedDayView.css"
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer} from 'mdbreact';

class SelectedDayView extends Component{
  state = {
  };



  render(){
    return(

      <Router>
        <MDBContainer
        style={{padding: "5vh"}} 
        >
          <MDBCarousel
          activeItem={1}
          length={7}
          showControls={true}
          showIndicators={true}
          >
            <MDBCarouselInner>
              {}
              <MDBCarouselItem itemId="1">
                <MDBView>
                      <a>Today</a>
                </MDBView>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
                <MDBView>
                      <a>Tomorrow</a>
                </MDBView>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">
                <MDBView>
                      <a>Tomorrow Container</a>
                </MDBView>
              </MDBCarouselItem>

            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </Router>

    )
  }
}
function getDate(num_of_days_ahead){
      let date = new Date();
      date = date.setUTCDate(date.getDate() + num_of_days_ahead);
      return date.getUTCDay()

}
function make_carousel(){
  for(let i =0; i < 7;i++){

  }
}

export default SelectedDayView;
