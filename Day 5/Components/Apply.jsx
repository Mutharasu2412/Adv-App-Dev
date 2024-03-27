import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './Apply.css'
import {Link } from 'react-router-dom';

function App() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Apply for Job Posting</h2>
          <MDBInput wrapperClass='mb-4' label='Application Name' size='lg' id='form1' type='text' required/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' required/>
          <MDBInput wrapperClass='mb-4' label='Contact Number' size='lg' id='form2' type='number' required/>
          <MDBInput wrapperClass='mb-4' label='Amount' size='lg' id='form2' type='number' required/>
          <MDBInput wrapperClass='mb-4' label='Job Title' size='lg' id='form2' type='text' required/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' required/>
          </div>
          <Link to='/applications'><MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Submit</MDBBtn></Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;