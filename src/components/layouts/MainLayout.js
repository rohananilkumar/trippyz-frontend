import React from 'react'
import DashboardLayout from './DashboardLayout'
import Sidebar from '../ui/Sidebar'

const MainLayout = ({ children }) => {
    return (
      <div>
        <DashboardLayout />
        <Sidebar />
        {children}
      </div>
    );
  };
  
export default MainLayout
