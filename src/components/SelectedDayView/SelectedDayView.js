import React, {Component} from "react";
import "./SelectedDayView.css"
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer} from 'mdbreact';

class SelectedDayView extends Component{
  state = {
  };
  render(){
    let Carousel = []
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for(let i =0; i < 7;i++){
      let date = new Date();
      date.setDate(date.getUTCDate() + i);

      if(i === 0){
        console.log(i)
        Carousel.push(
            <MDBCarouselItem itemId={i+1}>
              <MDBView>
                <a>Today</a>
              </MDBView>
            </MDBCarouselItem>
        )
      }
      else if(i === 1){
        Carousel.push(
            <MDBCarouselItem itemId={i+1}>
          <MDBView>
            <a>Tomorrow</a>
          </MDBView>
        </MDBCarouselItem>
        )
      }
      else{
        Carousel.push(
            <MDBCarouselItem itemId={i+1}>
          <MDBView>
            <a>{days[date.getUTCDay()]}</a>
          </MDBView>
        </MDBCarouselItem>
        )
      }
    }
    return(
        <MDBContainer
        style={{padding: "5vh"}} 
        >
          <MDBCarousel
          activeItem={1}
          length={7}
          showControls={true}
          showIndicators={true}
          slide={}
          >
            <MDBCarouselInner>
              {Carousel}
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
    )
  }
}

export default SelectedDayView;
