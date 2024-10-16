import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const MyContextProvider = ({ children }) => {
  const Navigate = useNavigate()

  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false)

  const [ropen, setRopen] = useState(false)

  const [loading, setLoading] = useState(false)

  const [sneck, setSneck] = useState(false)
  const [msg, setMsg] = useState('');

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [cardName, setCardName] = useState("");

  // for stepper
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  // for service details store
  const [api, setApi] = useState([])

  // for dynamic coutrypage data start

  const [pageData, setPageData] = useState(null);
  const [countryName, setCountryName] = useState(null);
  // for dynamic coutrypage data end


  const [bgColor, setBgColor] = useState('step1');


  const openModal = (name) => {

    setIsOpenModal(true);

    const modalElement = document.getElementById('smodal')
    if (modalElement) {
      modalElement.style.animation = "s-modalin 0.5s ease";

      setCardName(name);
      document.querySelector('body').style.overflow = "hidden";
    }
  };

  const closeModal = () => {

    const modalElement = document.getElementById('smodal');
    if (modalElement) {
      modalElement.style.animation = "s-modalout 0.4s ease";
      // Wait for the animation to finish before updating the state and overflow
      setTimeout(() => {
        document.querySelector('body').style.overflow = "unset";
        setIsOpenModal(false);
      }, 400); // Match the duration of the animation
    }

  };


  // for search bar start

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);

  // for search bar end

  //for api calling start
  useEffect(() => {
    axios.get('http://localhost:3034/api/service-details')
      .then((a) => setApi(a.data))
  }, [])
  // for api calling end


  // for pagination start

  const [currentPage, setCurrentPage] = useState(() => {
    const store = localStorage.getItem('step')
    return store ? parseInt(store) : 1
  })
  const [postsPerPage, setPostsPerPage] = useState(8)


  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage

  const currentPosts = api.slice(firstPostIndex, lastPostIndex)
  const totalPosts = api.length
  //for pagination end


  // for saving token state start
  const [token, setToken] = useState(() => {
    const storetoken = sessionStorage.getItem('token')
    return storetoken ? storetoken : ''

  })
  // for saving token state start

  // for account data save state start
  const [userdata, setUserdata] = useState(() => {
    const storeUser = sessionStorage.getItem('userdata')
    return storeUser ? JSON.parse(storeUser) : null
  });

  // handle login start
  const handleLogin = (data) => {
    sessionStorage.setItem('token', data.data);
    // sessionStorage.setItem('userdata', JSON.stringify(data.accountInfo));
    // setUserdata(data.accountInfo)
    setToken(data.data);

    setMsg(data.message)
    setIsOpen(false)
    setSneck(true)
  };
  // handle login end


  // handle logout start
  const handleLogout = () => {

    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userdata');
    setToken('');
    setUserdata(null)
    window.location.reload()
    setShowLogoutConfirm(true);
  }
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const confirmLogout = () => {
    handleLogout(true); // Call the logout handler
    setShowLogoutConfirm(false); // Hide the confirmation prompt
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false); // Cancel logout and hide the prompt
  };
  // handle logout end

  const [dropOpen, setDropOpen] = useState(false)

  // for admin table start

  const [contacts, setContacts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [newsletters, setNewsletters] = useState([])
  const [passportData, setPassportData] = useState([])
  const [save, setSave] = useState("contact")
  const [updateTableData, setUpdateTableData] = useState({})

  const getContactData = async () => {
    const { data } = await axios.get('http://localhost:3034/contacts')
    // console.log(data);
    setContacts(data.contacts)
  }
  const getInquiryData = async () => {
    const { data } = await axios.get('http://localhost:3034/inquiries')
    setInquiries(data.inquiries)
  }
  const getNewsletterData = async () => {
    const { data } = await axios.get('http://localhost:3034/allnewsletters')
    setNewsletters(data.newsletters)
  }
  const getPassportVerifyData = async () => {
    const { data } = await axios.get('http://localhost:3034/allpassportverify')
    setPassportData(data.passportData)
  }

  const deleteContactById = async (id) => {
    const { data } = await axios.delete(`http://localhost:3034/contact/${id}`)
    console.log(data);
    getContactData()
  }

  const deleteInquiryById = async (id) => {
    const { data } = await axios.delete(`http://localhost:3034/inquiry/${id}`)
    console.log(data);
    getInquiryData()

  }

  const deleteNewsLetterById = async (id) => {
    const { data } = await axios.delete(`http://localhost:3034/newsletter/${id}`)
    console.log(data);
    getNewsletterData()
  }

  const deletePassportById = async (id) => {
    const { data } = await axios.delete(`http://localhost:3034/passportverify/${id}`)
    console.log(data);
    getPassportVerifyData()

  }

  const findPById = async (id) => {
    const { data } = await axios.get(`http://localhost:3034/passport/${id}`)
    console.log(data.data);
    setUpdateTableData(data.data);
  }

  const updateById = async (id, obj) => {
    const { data } = await axios.delete(`http://localhost:3034/passport/${id}`, obj)
    console.log(data);
  }


  useEffect(() => {
    getContactData()
    getInquiryData()
    getNewsletterData()
    getPassportVerifyData()
  }, []);



  return (
    <MyContext.Provider value={{
      sneck, setSneck, ropen, msg, setMsg, loading, setLoading,
      setRopen, isOpen, setIsOpen, Navigate, location, isOpenModal, openModal,
      closeModal, cardName, setCardName, bgColor, setBgColor, currentStep, setCurrentStep,
      complete, setComplete, searchTerm, setSearchTerm, data, setData, api, setApi, currentPage, setCurrentPage,
      postsPerPage, setPostsPerPage, currentPosts, totalPosts, lastPostIndex, firstPostIndex,
      contacts, setContacts, inquiries, newsletters, passportData, save, setSave, deleteContactById,
      deleteInquiryById, deleteNewsLetterById, deletePassportById, updateById, findPById, updateTableData,
      pageData, setPageData, countryName, setCountryName,
      token, setToken, userdata, setUserdata, handleLogout, handleLogin, dropOpen, setDropOpen,
      showLogoutConfirm, setShowLogoutConfirm, confirmLogout, cancelLogout

    }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider