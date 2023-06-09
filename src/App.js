import React from 'react';
import { Route, Routes, BrowserRouter, NavigationType } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import GetCountries from './pages/country/GetCountries';
import EditCountry from './components/country/EditCountry';
import NotFound from './components/common/NotFound';
import Login from './components/auth/Login';
import './Reset.css';
import Logout from './components/auth/Logout';
import GetFlightsByCountryId from './pages/country/GetFlightsByCountry';
import Register from './components/auth/Register';
// pathname: `/flights/${country.name}`

export default function App() {
  return (
    <div className="App">
      <BrowserRouter className='main'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<GetCountries/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>

          <Route path="/countries">
            <Route index element={<GetFlightsByCountryId/>}/>   
            <Route path=":id" element={<EditCountry/>}/>
            <Route path="edit" element={<EditCountry/>}/>
          </Route>

          <Route path="/flights">
            {/* <Route index element={<getall/>}/>    */}
            <Route path=":country" element={<GetFlightsByCountryId/>}/>
          </Route>

          <Route path="*" element={< NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

