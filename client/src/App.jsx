import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navebar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import VerifiedUser from './Pages/VerifiedUser';
import Publish from './Pages/Publish';
import Streaming from './components/Streaming';
import Feedback from './Pages/Feedback';
import Trending from './Pages/Trending';
import ProfileCard from './Pages/Connect';
import InvestorPro from './Pages/InvestorPro';
import LoginForm from './Pages/Login';
import FounderPro from './Pages/FounderPro';
import Collection from './components/Collection';
import Public from './Pages/Public';

function App() {
  return (
    <div className='bg-black'>
      <Navebar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='verifiedUser' element={<VerifiedUser />} />
        <Route path='publishUser' element={<Publish />} />
        <Route path='streaming' element={<Streaming />} />
        <Route path='feedback' element={<Feedback />} />
        <Route path='trending' element={<Trending />} />
        <Route path='Connect' element={<ProfileCard />} />
        <Route path='Connect/investorsPro' element={<InvestorPro />} />
        <Route path='Login' element={<LoginForm />} />
        <Route path='Connect/founderPro' element={<FounderPro />} />
        <Route path='collection' element={<Collection />} />
        <Route path='public' element={<Public />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;