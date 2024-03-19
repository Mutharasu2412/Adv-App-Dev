import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,MDBBtn } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';


export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
               JobLink
              </h6>
              <p>
               We are delighted to see you as a part of our community. Feel free to discover, interact, and collaborate with us to create something wonderful.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Jobs</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Government Jobs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Private Jobs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Students Corner
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  International Jobs
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  <Link to='/about'>
                  About Us
                  </Link>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <Link to='/faq'>
                  FAQ's
                  </Link>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <Link to='/terms'>
                  Terms & Conditions
                
                  </Link>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  <Link to='/privacy'>
                  Privacy Policy
                  </Link>
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Enquiry</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                SKCT
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <br/>
              <p>
                2024 copyright @ JOB_IN
              </p>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        FOLLOW US
        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>
      </div>
    </MDBFooter>
  );
}