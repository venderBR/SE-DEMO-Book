import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import UserRequest from "./page/request/UserRequest";
import Request from './page/requested/Request';
import Donate from './page/Donate/Admindonate';
import Register from './page/register/register';
import RequestedDetail from './page/requested/requestdetail/requestdetail';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserRequest/>}/>
        <Route path='/request' element={<Request/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/requestdetail' element={<RequestedDetail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
