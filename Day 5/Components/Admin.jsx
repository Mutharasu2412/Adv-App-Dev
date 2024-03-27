import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import {Link} from 'react-router-dom';

const Admin = () => {
  return (
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          MENU
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <Link to='/job'><CDBSidebarMenuItem icon="th-large">Jobs</CDBSidebarMenuItem></Link>
            <Link to='/applications'> <CDBSidebarMenuItem icon="sticky-note">Applications</CDBSidebarMenuItem></Link>
            <Link to='/newjob'><CDBSidebarMenuItem icon="chart-line" iconType="solid">
              Create a Job
            </CDBSidebarMenuItem></Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
  );
};

export default Admin;