// <<<<<<< HEAD
// import React from "react";
// import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// =======
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// >>>>>>> master

export const Simple = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
