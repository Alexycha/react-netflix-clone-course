import React from 'react';
import './home/style/home.css';
import Home from './home/home';
import Login from './login/login' ;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from './account/pageaccount';


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="account" element={<Accounts />} />
        </Routes>
      </BrowserRouter>
    );
  }
