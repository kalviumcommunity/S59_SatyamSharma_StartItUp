import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navebar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import VerifiedUser from './Pages/VerifiedUser';
import Publish from './Pages/Publish';
import Streaming from './components/Streaming';
import Feedback from './components/Feedback';
import Trending from './Pages/Trending';
import ProfileCard from './Pages/Connect';
import InvestorPro from './Pages/InvestorPro';
import LoginForm from './Pages/Login';
import FounderPro from './Pages/FounderPro';
import Collection from './components/Collection';
import Public from './Pages/Public';
import Admin from './Pages/Admin';
import Investment from './Pages/Investment';
import InvestmentDetails from './Pages/InvestmentDetails';
import Tokenization from './Pages/Tokenization';
import Contact from './Pages/Contact';
import RequestBox from './Pages/RequestBox';
import AddOn from './Pages/AddOn';
import FounderDetails from './Pages/FounderDetails';
import Register from './Pages/Register';
import { useAppContext } from './Appcontext';
import LogoutPage from './Pages/Logout';
import Chat from './components/Chat';
import User from './Pages/User';
import AboutPg from './Pages/AboutPg';
import ContactUs from './Pages/ContactUs';

function App() {
  const { token, id,investorId,publishId, nam, email, pic, userId, password,presentDataId,presentVerfId,mainData,trendingPg,verify } = useAppContext();

 
  console.log("This Is verif Id",presentVerfId,"this is verfiy data",verify, publishId, investorId)
  
  return (
    <div className='bg-black'>
      <Navebar/>
      <Routes>
       
        <Route path='/' element={<Home />} />
        <Route path='contactUs' element={<ContactUs />} />
        <Route path='aboutUs' element={<AboutPg />} />
        <Route path='verifiedUser' element={<VerifiedUser />} />
        <Route path='publishUser' element={<Publish />} />
        <Route path='streaming' element={<Streaming />} />
        <Route path='feedback' element={<Feedback nam={"FeedBack"} />} />
        <Route path='trending' element={<Trending />} />
        <Route path='Connect' element={<ProfileCard />} />
        <Route path='Chat' element={<Chat />} />
        <Route path='user' element={<User />} />
        <Route path='Connect/investorsPro' element={<InvestorPro />} />
        <Route path='Login' element={<LoginForm />} />
        <Route path='Logout' element={<LogoutPage />} />
        <Route path='Connect/founderPro' element={<FounderPro />} />
        <Route path='collection' element={<Collection />} />
        <Route path='public' element={<Public />} />
        <Route path='report' element={<Feedback nam={"Issue"} />} />
        <Route path='admin' element={<Admin />} />
        <Route path='publishUser/investment' element={<Investment />} />
        <Route path='publishUser/investment/InvestmentDetails' element={<InvestmentDetails />} />
        <Route path='publishUser/tokenization' element={<Tokenization />} />
        <Route path='publishUser/contact' element={<Contact />} />
        <Route path='publishUser/addOn' element={<AddOn />} />
        <Route path='publishUser/requestBox' element={<RequestBox />} />
        <Route path='publishUser/founderDetails' element={<FounderDetails />} />
        <Route path='publishUser/instructions' element={<RequestBox />} />
        <Route path='register' element={<Register />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;