import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Components/Sidebar/SideBar';

export const Protected = () => {
  return (
    <SideBar>     
    <Outlet/>
    </SideBar>
  )
};

