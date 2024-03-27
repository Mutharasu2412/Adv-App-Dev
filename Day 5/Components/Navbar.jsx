import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <Link to='/'>JobLink</Link></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-center align-items-center'>
            <MDBNavbarItem>
         
              <Link to='/'>Home</Link>
              
            </MDBNavbarItem>
            <MDBNavbarItem className='m-4'>
              
              <Link to='/job'>Jobs</Link>
              
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to='/applications'>Applications</Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <Link to='/login'><MDBBtn color='secondary' fab icon="fa-solid fa-user" >Login</MDBBtn></Link>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}