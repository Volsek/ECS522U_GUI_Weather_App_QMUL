import React, {Component} from "react";
import "./SelectedDayView.css"
import {
  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

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
          activeItem={2}
          length={3}
          showControls={true}
          showIndicators={true}

          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <MDBContainer>
                    <MDBContainer>
                      <a>Yesterday Container</a>
                    </MDBContainer>
                  </MDBContainer>
                </MDBView>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
                <MDBView>
                  <MDBContainer>
                    <MDBContainer>
                      <a>Today Container</a>
                    </MDBContainer>
                    <MDBContainer>
                      <div class="location">

                      </div>
                    </MDBContainer>
                  </MDBContainer>
                </MDBView>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">
                <MDBView>
                  <MDBContainer>
                    <MDBContainer>
                      <a>Tomorrow Container</a>
                    </MDBContainer>
                  </MDBContainer>
                </MDBView>
              </MDBCarouselItem>

            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </Router>

    )
  }
}

export default SelectedDayView;
