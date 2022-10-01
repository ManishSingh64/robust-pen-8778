// <<<<<<< HEAD
// import React from "react";
// import { Outlet } from "react-router-dom";
// import SideBar from "../components/Sidebar/SideBar";
// =======
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/Sidebar/SideBar';
// >>>>>>> master

export const Protected = () => {
  return (
    <SideBar>
      <Outlet />
    </SideBar>
  );
};
