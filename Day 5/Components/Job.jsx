import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink
} from 'mdb-react-ui-kit';
import './Job.css';
import { Link } from 'react-router-dom';

function App() {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  return (
    <>
      <section>
        <MDBTabs justify className='mb-3'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
              ALL
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
              FREE
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
              PREMIUM
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
      </section>
      <div class="bg">
      <section>
        <MDBContainer fluid>
          <MDBRow className='d-flex justify-content-center align-items-center' >
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 1</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
              </MDBCard>
            </MDBCol>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 2</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                  </MDBCard>
            </MDBCol>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 3</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section>
        <MDBContainer fluid>
          <MDBRow className='d-flex justify-content-center align-items-center'>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 4</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                  </MDBCard>
            </MDBCol>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 5</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                 </MDBCard>
            </MDBCol>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 6</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                 </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section>
        <MDBContainer fluid>
          <MDBRow className='d-flex justify-content-center align-items-center'>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 7</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                 </MDBCard>
            </MDBCol>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 8</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                 </MDBCard>
            </MDBCol>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 9</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section>
        <MDBContainer fluid>
          <MDBRow className='d-flex justify-content-center align-items-center'>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 10</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                </MDBCard>
            </MDBCol>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 11</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                 </MDBCard>
            </MDBCol>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 12</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                 </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section>
        <MDBContainer fluid>
          <MDBRow className='d-flex justify-content-center align-items-center'>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 13</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                 </MDBCard>
            </MDBCol>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 14</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
               </MDBCard>
            </MDBCol>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 15</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section>
        <MDBContainer fluid>
          <MDBRow className='d-flex justify-content-center align-items-center'>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 16</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                  </MDBCard>
            </MDBCol>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 17</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
               </MDBCard>
            </MDBCol>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 18</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
               </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section>
        <MDBContainer fluid>
          <MDBRow className='d-flex justify-content-center align-items-center'>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 19</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                </MDBCard>
            </MDBCol>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 20</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
               </MDBCard>
            </MDBCol>
            <MDBCol md='3'>
              <MDBCard className='my-5 rounded-3 text-wrap' style={{ maxWidth: '600px' }}>
                <MDBCol className='md-12 mx-2 mt-2'>Job ID: 21</MDBCol>
                <MDBCol className='md-12 mx-2'>Job Title: Marketing Manager</MDBCol>
                <MDBCol className='md-12 mx-2 '>Department: Marketing</MDBCol>
                <MDBCol className='md-12 mx-2 '>Location: Chennai</MDBCol>
                <MDBCol className='md-12 mx-2'>Responsibility: Analyze information to identify new markets</MDBCol>
                <MDBCol className='md-12 mx-2'>Category: Free</MDBCol>
                <Link to='/apply'><MDBBtn color='secondary' className='mb-4' size='md'>Apply</MDBBtn></Link>
                </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      </div>
    </>
  );
}

export default App;
