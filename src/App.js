import React from 'react';
import './App.css';
import Home from './Components/Home';
import Department from './Components/Department';
import Employee from './Components/Employee';
import Navigation from './Components/Navigation';
import Api from './Components/Api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <div className='App'>
        <h3 className='mt-3 d-flex' justify-content-center>React Js with Web Api Demo</h3>
        <h4 className='mt-3 d-flex' justify-content-center>React Js with Web Api Demo</h4>
        <Navigation />
        
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Department' element={<Department />} />
          <Route exact path='/Employee' element={<Employee />} />
          <Route exact path='/Api' element={<Api />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
