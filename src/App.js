import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Extra/Header';
import Home from './components/HomeC/Home';

import Footer from './components/Extra/Footer';
import PatientLogin from './components/HomeC/Patient/PatientLogin'; // Import your PatientLogin component
import PForgotPassword from './components/HomeC/Patient/PForgotPassword';
import PrForgotPassword from './components/HomeC/Provider/PrForgotPassword';
import ProviderLogin from './components/HomeC/Provider/ProviderLogin';
import DonorLogin from './components/HomeC/Donor/DonorLogin';  // Import your ProviderLogin component
import DForgotPassword from './components/HomeC/Donor/DForgotPassword'; 
import About from './components/AboutC/About';
import Emergency from './components/Emergency/Emergency';
import Contact from './components/Contact/Contact';
import PatientRegister from './components/HomeC/Patient/PatientRegister';
import ProviderRegister from './components/HomeC/Provider/ProviderRegister';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content-wrap">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/emergency" element={<Emergency />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="/patient" element={<PatientLogin />} />
            <Route path="/patient-register" element={<PatientRegister />} />
            <Route path="/provider" element={<ProviderLogin />} />
            <Route path="/donor" element={<DonorLogin />} />
            <Route path="/forgot-password" element={<PForgotPassword />} />
            <Route path="/donor-forgot-password" element={<DForgotPassword/>} />
            <Route path="/donor-login" element={<DonorLogin/>} />
            <Route path="/login" element={<PatientLogin/>} />
            <Route path="/provider-login" element={<ProviderLogin />} />
            <Route path="/provider-forgot-password" element={<PrForgotPassword />} />
            <Route path="/patientback-login" element={<PatientLogin />} />
            <Route path="/provider-register" element={<ProviderRegister />} />
            <Route path="/providerback-login" element={<ProviderLogin />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
