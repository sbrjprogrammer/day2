import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/sidebar';
import Home from './Pages/Home/Home';
import Transaction from './Pages/Product/Transaction';
import Report from './Pages/Report/Report';
import Bar1 from './Components/charts/Bar/Bar';
import Navbar from './Components/Navbar/Navbar';
import CompanyForm from './Components/Forms/CompanyForm/CompanyForm';
import AttendancePolicy from './Components/Tables/AttendancePolicy/AttendancePolicy';

const App = () => {
  return (
    <>
   
      <Sidebar>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/form" element={<Report/>} />
          <Route path="/form1" element={<AttendancePolicy/>} />
          
       
        </Routes>
      </Sidebar>
      </>
 
  );
};

export default App;