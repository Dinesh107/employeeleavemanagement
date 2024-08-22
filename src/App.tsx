import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from "./components/admindashboard/AdminDashboard";
import Dashboard from "./components/dashboard/Dashboard";
import SidebarWithHeader from "./components/dashboard/Dashboard";
import Lists from "./components/dashboard/Lists";
import SidebarContent from "./components/dashboard/Sidebar";
import Forms from "./components/forms/Forms";
import AdminLogin from "./components/login/AdminLogin";
import EmployeeLogin from "./components/login/EmployeeLogin";

function App() {
  return (
    <>
      {/* <AdminLogin />
      <EmployeeLogin /> */}
      {/* <AdminDashboard/> */}
      {/* <Dashboard/> */}
      {/* <Forms/> */}
      <Router>
      <Routes>
        <Route path="/" element={<EmployeeLogin/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/form" element={<Forms/>} />
        <Route path="/employeeDashBoard" element={<Dashboard/>} />
        <Route path="/adminDashBoard" element={<AdminDashboard/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
