import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export const Simple = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>  
    <Footer/>    
    </>
  )
};