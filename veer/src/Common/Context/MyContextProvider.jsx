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

  //for detailsForm
  const [detailFormData, setDetailFormData] = useState({});

  // for stepper
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);



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

  // for service details store
  const [api, setApi] = useState([])

  // for dynamic coutrypage data start

  //for api calling start
  useEffect(() => {
    axios.get(`${url}/api/service-details`)
      .then((a) => setApi(a.data))
  }, [])
  // for api calling end


  // for review api start

  const [rapi, SetRapi] = useState([])
  // for review api end

  //for rapi calling start

  useEffect(() => {
    axios.get(`${url}/api/reviews`)
      .then((b) => SetRapi(b.data))
  }, [])

  //for rapi calling end

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
  // for saving token state end



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
    setToken('');
    window.location.reload()
    setShowLogoutConfirm(false);
  }
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);



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

  const [amountpaid, setAmountpaid] = useState()

  const [serviceType, setServiceType] = useState('');
  const [amount, setAmount] = useState(1);
  // for payment page end

  // for admin table start

  const [contacts, setContacts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [newsletters, setNewsletters] = useState([])
  const [detailsData, setDetailsData] = useState([])

  const [save, setSave] = useState("contact")

  // for get alldata
  const getContactData = async () => {
    const { data } = await axios.get(`${url}/contacts`)
    // console.log(data);
    setContacts(data.contacts)
  }
  const getInquiryData = async () => {
    const { data } = await axios.get(`${url}/inquiries`)
    setInquiries(data.inquiries)
  }
  const getNewsletterData = async () => {
    const { data } = await axios.get(`${url}/allnewsletters`)
    setNewsletters(data.newsletters)
  }

  const getDetailsData = async () => {
    const { data } = await axios.get(`${url}/details`)
    setDetailsData(data.data)
  }

  // for delete data by id
  const deleteContactById = async (id) => {
    const { data } = await axios.delete(`${url}/contact/${id}`)
    console.log(data);
    getContactData()
  }
  const deleteInquiryById = async (id) => {
    const { data } = await axios.delete(`${url}/inquiry/${id}`)
    console.log(data);
    getInquiryData()

  }
  const deleteNewsLetterById = async (id) => {
    const { data } = await axios.delete(`${url}/newsletter/${id}`)
    console.log(data);
    getNewsletterData()
  }

  const deleteDetailsById = async (id) => {
    const { data } = await axios.delete(`${url}/details/${id}`)
    console.log(data);
    getDetailsData()
  }

  // get single data by id
  const findPById = async (id) => {
    const { data } = await axios.get(`${url}/passport/${id}`)
    console.log(data.data);
    setEditedData(data.data);
    // console.log(data.data._id)
    setEditingId(data.data._id)
  }
  // for update data by id
  const updateById = async (id, obj) => {
    const { data } = await axios.patch(`${url}/passport/${id}`, obj)
    console.log(data);

    setEditingId(null)
  }

  useEffect(() => {
    getContactData()
    getInquiryData()
    getNewsletterData()
    getDetailsData()
  }, []);

  const [editedData, setEditedData] = useState({
    birthPlace: '', employeementType: '', profession: '',
    education: '', policeStation: ''
  });
  const [editingId, setEditingId] = useState(null);
  // admin table end

  //for razorpay upi start

  const handlepay = async () => {
    try {

      const formData = new FormData();
      formData.append('name', detailFormData.name);
      formData.append('motherName', detailFormData.motherName);
      formData.append('placeOfBirth', detailFormData.placeOfBirth);
      formData.append('education', detailFormData.education);
      formData.append('employeementType', detailFormData.employeementType);
      formData.append('serviceType', detailFormData.serviceType);
      formData.append('email', detailFormData.email);
      formData.append('mobileNo', detailFormData.mobileNo)
      formData.append('alterMobileNo', detailFormData.alterMobileNo)
      formData.append('policeStation', detailFormData.policeStation)
      formData.append('identityProof', detailFormData.identityProof);
      formData.append('birthProof', detailFormData.birthProof);
      formData.append('addressProof', detailFormData.addressProof);

      const { data } = await axios.post(`${url}/details`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (data.success) {
        setMsg(data.message)
        setSneck(true);
      } else {
        setMsg(data.error);
        setSneck(true);
      }
    } catch (error) {
      console.error('Error during order submission:', error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleupi = async () => {
    setLoading(true);

    try {
      // Use axios to make the POST request
      const { data } = await axios.post(`${url}/razorpay`, {
        amount: amount
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (data.success !== true) {
        setSneck(true);
        setMsg(data.error);
      } else {
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY,
          amount: data.amount,
          currency: data.currency,
          image: "https://i.ibb.co/Dwt8gPV/logo.png",
          name: "Veer Consultancy",
          description: "Test Transaction",
          order_id: data.id,
          config: {
            display: {
              blocks: {
                utib: {
                  name: "most recommended using",
                  instruments: [
                    {
                      method: "card",
                      types: ["debit", "credit"]
                    },
                    {
                      method: "upi",
                      flows: ["qr"]
                    },

                    {
                      method: "wallet",

                    },

                    {
                      method: "paylater",

                    }
                  ]
                },

              },

              sequence: ["block.utib", "block.other"],
              preferences: {
                show_default_blocks: true
              }
            }
          },
          handler: async (response) => {
            await handlepay();
            Navigate('/confirm');
          },
          // modal: {
          //   ondismiss: function () {
          //     if (window.confirm("Are you sure you want to close the form?")) {
          //       console.log("Checkout form closed by the user");
          //     } else {
          //       console.log("Complete the Payment");
          //     }
          //   }
          // },
          theme: {
            color: "#F4ACBD",
            hide_topbar: false,
            shape: "rectangular",
            header: {
              color: "#fff",
              text: "Payment"
            }
          }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      }
    } catch (error) {
      alert(error.message);
      console.error("Error during payment process:", error);
    } finally {
      setLoading(false);
    }
  };

  // for razorpay upi end

  return (
    <MyContext.Provider value={{
      sneck, setSneck, ropen, msg, setMsg, loading, setLoading,
      setRopen, isOpen, setIsOpen, Navigate, location, isOpenModal, openModal,
      closeModal, cardName, setCardName, bgColor, setBgColor, currentStep, setCurrentStep,
      complete, setComplete, searchTerm, setSearchTerm, data, setData, api, setApi, currentPage, setCurrentPage,
      postsPerPage, setPostsPerPage, currentPosts, totalPosts, lastPostIndex, firstPostIndex,
      pageData, setPageData, countryName, setCountryName, rapi, SetRapi, serviceType, setServiceType, amount, setAmount,
      token, setToken, userdata, setUserdata, handleLogout, handleLogin, handlepersonal, handlepay, handleupi,
      layout, setLayout, logopen, setLogopen, cancelLogout, showLogoutConfirm, setShowLogoutConfirm,
      paymentStatus, setPaymentStatus, errorMessage, setErrorMessage, amountpaid, setAmountpaid, url,
      detailFormData, setDetailFormData,
      // admin table
      contacts, setContacts, inquiries, newsletters, save, setSave, deleteContactById,
      deleteInquiryById, deleteNewsLetterById, updateById, findPById,
      deleteDetailsById, detailsData, getDetailsData, editedData, setEditedData,
      editingId, setEditingId
    }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider