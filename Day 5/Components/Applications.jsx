import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col-2'>Application ID</th>
          <th scope='col'>Name</th>
          <th scope='col'>Contact Number</th>
          <th scope='col'>Email</th>
          <th scope='col'>Job Title</th>
          <th scope='col'>Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center justify-content-center'>
              <p>10000013</p>
            </div>
          </td>
          <td>
            <p className='fw-normal align-items-center justify-content-center'>Demo1</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>1233456778</p>
          </td>
          <td>
            <p className='fw-normal align-items-center justify-content-center'>Demouser@gmail.com</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>Marketing Manager</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>shortlisted</p>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center justify-content-center'>
              <p>10000014</p>
            </div>
          </td>
          <td>
            <p className='fw-normal align-items-center justify-content-center'>Demo2</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>1233456778</p>
          </td>
          <td>
            <p className='fw-normal align-items-center justify-content-center'>Demouser@gmail.com</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>Marketing Manager</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>shortlisted</p>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center justify-content-center'>
              <p>10000015</p>
            </div>
          </td>
          <td>
            <p className='fw-normal align-items-center justify-content-center'>Demo3</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>1233456778</p>
          </td>
          <td>
            <p className='fw-normal align-items-center justify-content-center'>Demouser@gmail.com</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>Marketing Manager</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>shortlisted</p>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center justify-content-center'>
              <p>10000016</p>
            </div>
          </td>
          <td>
            <p className='fw-normal align-items-center justify-content-center'>Demo4</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>1233456778</p>
          </td>
          <td>
            <p className='fw-normal align-items-center justify-content-center'>Demouser@gmail.com</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>Marketing Manager</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>shortlisted</p>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center justify-content-center'>
              <p>10000017</p>
            </div>
          </td>
          <td>
            <p className='fw-normal align-items-center justify-content-center'>Demo5</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>1233456778</p>
          </td>
          <td>
            <p className='fw-normal align-items-center justify-content-center'>Demouser@gmail.com</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>Marketing Manager</p>
          </td>
          <td>
          <p className='fw-normal align-items-center justify-content-center'>shortlisted</p>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}