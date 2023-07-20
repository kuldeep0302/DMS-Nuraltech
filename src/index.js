import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Setting from './Componants/Setting/Setting'
import Managecountrymain from './Componants/Setting-pages/Manage-country/Managecountrymain';
import Managecountry from './Componants/Setting-pages/Manage-country/Manage-country';
import Managezonemain from './Componants/Setting-pages/Manage-zone/Managezonemain';
import Managezone from './Componants/Setting-pages/Manage-zone/Mainegezone';
import Loginboundcall from './Componants/Sidemenu-pages/Log-inbound-call/Loginboundcall';
import Headersidebar from './Componants/Header-Sidemenu/Headesidebar';
import Manageregionmain from './Componants/Setting-pages/Manage-region/Manageregionmain';
import Manageregion from './Componants/Setting-pages/Manage-region/Manage-region';
import Content from './Componants/Content_page/Content';
// import Loginpage from './Componants/Login-page/Loginpage';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    <Headersidebar/>
    
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Setting" element={<Setting/>} />
        <Route path="/Managecountrymain" element={<Managecountrymain/>} />
        <Route path="/Managecountry" element={<Managecountry/>} />
        <Route path="/Managezonemain" element={<Managezonemain/>} />
        <Route path="/Managezone" element={<Managezone/>} />
        <Route path="/Loginboundcall" element={<Loginboundcall/>} />
        <Route path="/Manageregionmain" element={<Manageregionmain/>} />
        <Route path="/Manageregion" element={<Manageregion/>} />
        <Route path="/Content" element={<Content/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
