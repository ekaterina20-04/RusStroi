import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Orders from './components/Orders/Orders';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Admin from './components/Admin/Admin';
import AdminApplications from './components/Admin/AdminApplications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/admin_applications' element={<AdminApplications/>}/>
    </Routes>
  </BrowserRouter >
);

