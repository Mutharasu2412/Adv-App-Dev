import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function App() {
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center'  style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
        <MDBCol lg='9' className='my-5'>

          <h1 class="text-black mb-4 ml-20">Create Job posting</h1>

          <MDBCard>
            <MDBCardBody className='px-4'>

              <MDBRow className='align-items-center pt-4 pb-3'>
                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Job Title</h6>
                </MDBCol>
                <MDBCol md='7' className='pe-5'>
                  <MDBInput label='' size='lg' id='form1' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Department</h6>
                </MDBCol>

                <MDBCol md='7' className='pe-5'>
                  <MDBInput label='' size='lg' id='form2' type='text'/>
                </MDBCol>

              </MDBRow>
              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Location</h6>
                </MDBCol>

                <MDBCol md='7' className='pe-5'>
                  <MDBInput label='' size='lg' id='form2' type='text'/>
                </MDBCol>

              </MDBRow>


              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Description</h6>
                </MDBCol>

                <MDBCol md='7' className='pe-5'>
                  <MDBTextArea label='Message' id='textAreaExample' rows={3} />
                </MDBCol>

              </MDBRow>
              <MDBRow className='align-items-center pt-4 pb-3'>

<MDBCol md='3' className='ps-5'>
  <h6 className="mb-0">Qualification</h6>
</MDBCol>

<MDBCol md='7' className='pe-5'>
  <MDBTextArea label='Message' id='textAreaExample' rows={3} />
</MDBCol>

</MDBRow>
<MDBRow className='align-items-center pt-4 pb-3'>

<MDBCol md='3' className='ps-5'>
  <h6 className="mb-0">Application fee</h6>
</MDBCol>
<MDBCol md='7' className='pe-5'>
  <MDBInput label='' size='lg' id='form2' type='number'/>
</MDBCol>

</MDBRow>

             

        

            <Link to='/admin'>  <MDBBtn className='my-4' size='lg'>Post Job</MDBBtn></Link>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default App;