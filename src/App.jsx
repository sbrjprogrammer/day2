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
import BaShopForm from './Components/Forms/BaShops/BaShopForm';

import InstagramForm from './Components/Forms/InstagramForms/InstagramForm';
import Area from './Pages/Area/Area';
import Customer from './Components/Tables/Customer/Customer';
import CustomerForm from './Components/Forms/CustomerForm/Customerform';
import CustomerCategory from './Components/Tables/CustomCategoryForm/CustomCategory';
import CustomerCategoryForm from './Components/Forms/CustomerCategoryForms/CustomerCategoryForm';

const App = () => {
  return (
    <>
   
      <Sidebar>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Area" element={<Area/>} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/form" element={<Report/>} />
          <Route path="/form1" element={<AttendancePolicyf/>} />

          {/* Bashops in futurer made this nested child */}
          <Route path='/BAShops' element={<BAShops/>} />
            <Route path='/BAform' element={<BaShopForm/>} />

          {/* Bashops in futurer made this nested child */}
          <Route path="/Company" element={<CompanyForm/>} />
          <Route path="/Customer" element={<Customer/>} />
          <Route path="/Customerform" element={<CustomerForm/>} />
          <Route path="/CustomerCategory" element={<CustomerCategory/>} />
          <Route path="/customerCategoryForm" element={<CustomerCategoryForm/>} />
          
          <Route path="/InstaUploader" element={<InstagramForm/>} />
          
       
        </Routes>
      </Sidebar>
      </>
 
  );
};

export default App;