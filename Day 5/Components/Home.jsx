import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Start Searching</h5>
          <p>Take a job and make it your Day 1</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
 
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Finding a job</h5>
          <p>Its easier in JobLink then Anywhere</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Get Started NOW</h5>
         <Link to='/login'> <MDBBtn className='info'>ENROLL-IN</MDBBtn></Link>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}