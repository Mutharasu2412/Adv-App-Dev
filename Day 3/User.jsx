import React from 'react';
import {MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
}
from 'mdb-react-ui-kit';
import { Link } from '@mui/icons-material';

function App() {
  return (

    <MDBContainer fluid className='bg-light shadow-4 '>

        <MDBRow className='d-flex justify-content-center align-items-center h-auto '>

          <MDBCol>
            <MDBRow className='g-0'>

              <MDBCol md='4' className="d-none d-md-block">
                <div className=' text-center align-items-center bg-secondary shadow-1-strong' color='primary'>
                  <h1>Job description</h1>
                  <p>
                    Modifying software to fix errors, adapt it to new hardware, improve its performance, or upgrade interfaces.
                    Directing system testing and validation procedures.
                    Directing software programming and documentation development.
                    Consulting with departments or customers on project status and proposals.
                    Working with customers or departments on technical issues including software system design and maintenance.
                    Analyzing information to recommend and plan the installation of new systems or modifications of an existing system.
                    Consulting with engineering staff to evaluate software hardware interfaces and develop specifications and performance requirements.
                    Designing and developing software systems using scientific analysis and mathematical models to predict and measure outcomes and design consequences.
                    Preparing reports on programming project specifications, activities, or status.
                    Conferring with project managers to obtain information on limitations or capabilities
                    Role: Software Development - Other
                    Industry Type: IT Services & Consulting
                    Department: Engineering - Software & QA
                    Employment Type: Full Time, Permanent
                    Role Category: Software Development
                    Education
                    UG: Any Graduate
                    PG: Any Postgraduate</p>
                  <MDBBtn className='w-10 m-4' size='md' color='secondary'><Link to='/aaply'>Apply</Link></MDBBtn>
                </div>
              </MDBCol>
              <MDBCol md='4' className="d-none d-md-block">
                <div className=' text-center align-items-center bg-secondary shadow-1-strong' color='primary'>
                  <h1>Job description</h1>
                  <p>Should have 3-5 years of experience in PHP development. Exposure in product development ERP's/ CRM. Framework Knowledge Participation in full SDLC phases would be an added advantage. Possess strong knowledge in JQuery, Javascript, HTML 5, CSS and MYSQL. Able to Design/ Build new applications, and enhance existing applications using PHP with MySQL backend.
                    Role: Back End Developer
                    Industry Type: IT Services & Consulting
                    Department: Engineering - Software & QA
                    Employment Type: Full Time, Permanent
                    Role Category: Software Development
                    Education
                    UG: Any Graduate
                    PG: Post Graduation Not Required</p>
                  <MDBBtn className='w-10 m-4' size='md' color='secondary'><Link to='/apply'>Apply</Link></MDBBtn>
                </div>
              </MDBCol>
              <MDBCol md='4' className="d-none d-md-block">
                <div className=' text-center align-items-center bg-secondary shadow-1-strong' color='primary'>
                  <h1>Job description</h1>
                  <p>Should have 2-3 years of experience in web designer. Possess strong knowledge in Photoshop, Coreldraw, HTML, CSS, Javascript. Knowledge in UX Responsive Design would be an added advantage.
                    Role: Web Designer
                    Industry Type: IT Services & Consulting
                    Department: UX, Design & Architecture
                    Employment Type: Full Time, Permanent
                    Role Category: Other Design
                    Education
                    UG: Any Graduate
                    PG: Post Graduation Not Required</p>
                  <MDBBtn className='w-10 m-4' size='md' color='secondary'><Link to='/apply'>Apply</Link></MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
  );
}

export default App;