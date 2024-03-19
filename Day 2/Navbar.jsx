import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <Link to='/home'>JobLink</Link></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
              <Link to='/home'>Home</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Government Jobs
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Explore Exams</MDBDropdownItem>
                  <MDBDropdownItem link>Exam Notifications</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>


            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                 Private Jobs
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Trending Jobs</MDBDropdownItem>
                  <MDBDropdownItem link>Fresher Jobs</MDBDropdownItem>
                  <MDBDropdownItem link>Internships</MDBDropdownItem>
                  <MDBDropdownItem link>Work from Home</MDBDropdownItem>
                  <MDBDropdownItem link>Walkin Jobs</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Students Corner
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Seminar</MDBDropdownItem>
                  <MDBDropdownItem link>Conferences</MDBDropdownItem>
                  <MDBDropdownItem link>Workshops</MDBDropdownItem>
                  <MDBDropdownItem link>Placement Drive</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

          </MDBNavbarNav>

          
            
            <MDBBtn color='secondary' fab icon="fa-solid fa-user" ><Link to='/login'>Login</Link></MDBBtn>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}