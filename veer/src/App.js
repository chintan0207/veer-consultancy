import React from 'react'
import Header from './Common/Header/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Search from './Common/Search/Search'
import MyContextProvider from './Common/Context/MyContextProvider'
import ContactBatch from './Common/ContactBatch/ContactBatch'
import Contact from './Contact/Contact'
import Login from './Common/Login/Login'
import Register from './Common/Register/Register'
import Loader from './Common/Loader/Loader'
import Error from './Common/Error/Error'
import Footer from './Footer/Footer'
import ScrollToTop from "react-scroll-to-top";
import { FaCircleArrowUp } from "react-icons/fa6";
import SubHeader from './SubHeader/SubHeader'
import GoToTop from './Common/Gototop/GoToTop'
import ServiceCardModal from './service-modal/ServiceCardModal'
import Explore from './Explore/Explore'
import CountryPage from './CountryPage/CountryPage'
import Admin from './Admin/Admin'
import ErrorPage from './Common/ErrorPage/ErrorPage'
import Droplist from './Common/Droplist/Droplist.jsx'
import Logout from './Common/Logout/Logout.jsx'
import LayoutDoc3 from './Common/Layout3/LayoutDoc3.jsx'


const App = () => {
  return (

    <BrowserRouter>
      <MyContextProvider>
        <SubHeader />
        <Header />
        <Login />
        <Loader />
        <Error />
        <Register />
        <ContactBatch />
        <ServiceCardModal />
        <Droplist />
        <Logout />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service/:servicename/:countryname' element={<CountryPage />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/admin' element={<Admin />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/confirm" element={<LayoutDoc3 />} />


        </Routes>
        <ScrollToTop smooth component={<FaCircleArrowUp size={40} color="#ff0000" />} />
        <GoToTop />
        <Footer />
      </MyContextProvider>
    </BrowserRouter>


  )
}

export default App