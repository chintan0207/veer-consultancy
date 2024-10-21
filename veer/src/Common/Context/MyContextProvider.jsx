import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const MyContextProvider = ({ children }) => {
  const Navigate = useNavigate()

  const location = useLocation()
  const url = "http://localhost:3034"

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

  // for droplist open start
  const [logopen, setLogopen] = useState(false)

  //for droplist open end

  //for layout page open start

  const [layout, setLayout] = useState('document')

  const handlepersonal = () => {
    setLayout('stage1');
  }
  //for layout page open end

  //for payment page start

  const [paymentStatus, setPaymentStatus] = useState('Verifying payment...');
  const [errorMessage, setErrorMessage] = useState(null);

  const [amountpaid, setAmountpaid] = useState(2000)
  // for payment page end

  // for admin table start

  const [contacts, setContacts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [newsletters, setNewsletters] = useState([])
  const [passportData, setPassportData] = useState([])
  const [detailsData, setDetailsData] = useState([])

  const [save, setSave] = useState("contact")

  // for get alldata
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
  const getDetailsData = async () => {
    const { data } = await axios.get('http://localhost:3034/details')
    setDetailsData(data.data)
  }

  // for delete data by id
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
  const deleteDetailsById = async (id) => {
    const { data } = await axios.delete(`http://localhost:3034/details/${id}`)
    console.log(data);
    getDetailsData()
  }

  // get single data by id
  const findPById = async (id) => {
    const { data } = await axios.get(`http://localhost:3034/passport/${id}`)
    console.log(data.data);
    setEditedData(data.data);
    // console.log(data.data._id)
    setEditingId(data.data._id)
  }
  // for update data by id
  const updateById = async (id, obj) => {
    const { data } = await axios.patch(`http://localhost:3034/passport/${id}`, obj)
    console.log(data);
    getPassportVerifyData()
    setEditingId(null)
  }

  useEffect(() => {
    getContactData()
    getInquiryData()
    getNewsletterData()
    getPassportVerifyData()
    getDetailsData()
  }, []);

  const [editedData, setEditedData] = useState({
    birthPlace: '', employeementType: '', profession: '',
    education: '', policeStation: ''
  });
  const [editingId, setEditingId] = useState(null);
  // admin table end

  return (
    <MyContext.Provider value={{
      sneck, setSneck, ropen, msg, setMsg, loading, setLoading,
      setRopen, isOpen, setIsOpen, Navigate, location, isOpenModal, openModal,
      closeModal, cardName, setCardName, bgColor, setBgColor, currentStep, setCurrentStep,
      complete, setComplete, searchTerm, setSearchTerm, data, setData, api, setApi, currentPage, setCurrentPage,
      postsPerPage, setPostsPerPage, currentPosts, totalPosts, lastPostIndex, firstPostIndex,
      pageData, setPageData, countryName, setCountryName,
      token, setToken, userdata, setUserdata, handleLogout, handleLogin, handlepersonal,
      layout, setLayout, logopen, setLogopen, cancelLogout, confirmLogout, showLogoutConfirm, setShowLogoutConfirm,
      paymentStatus, setPaymentStatus, errorMessage, setErrorMessage, amountpaid, setAmountpaid, url,
      // admin table
      contacts, setContacts, inquiries, newsletters, passportData, save, setSave, deleteContactById,
      deleteInquiryById, deleteNewsLetterById, deletePassportById, updateById, findPById,
      deleteDetailsById, detailsData, getDetailsData, deleteDetailsById, editedData, setEditedData,
      editingId, setEditingId, updateById
    }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider