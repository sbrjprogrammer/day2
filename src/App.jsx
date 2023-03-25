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

import AttendancePolicyf from './Components/Tables/AttendancePolicy/Attendance/AttendancePolicyf';
import BAShops from './Components/Tables/BAshops/BAShops';

const App = () => {
  return (
    <>
   
      <Sidebar>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/form" element={<Report/>} />
          <Route path="/form1" element={<AttendancePolicyf/>} />
          <Route path="/BAShops" element={<BAShops/>} />
          
       
        </Routes>
      </Sidebar>
      </>
 
  );
};

export default App;