import React, { useContext, useEffect } from 'react'
import "./LayoutDoc3.scss"
import MyContext from '../Context/MyContext';
import gif from '../../Assets/images/tick-13644_256.gif'
import axios from 'axios';

const LayoutDoc3 = () => {

    const{Navigate,url,handleSubmit,setPaymentStatus,setErrorMessage}=useContext(MyContext)

    const orderId = new URLSearchParams(window.location.search).get('orderId');
    
  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const { data } = await axios.post(`${url}/verify-payment`, { orderId });

        if (data.success) {
          setPaymentStatus('Confirmation Successful!');
          // Perform additional actions like redirecting to the order confirmation page or clearing the cart
          handleSubmit()
        } else {
          setPaymentStatus('Payment failed.');
          setErrorMessage(data.message || 'Failed to verify payment.');
          // You can also choose to redirect to a failure page or show an error message
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
        setPaymentStatus('An error occurred while verifying the payment.');
        setErrorMessage(error.response?.data?.error || error.message);
      }
    };

    if (orderId) {
      verifyPayment();
    } else {
      setPaymentStatus('Order ID not found.');
    }
  }, [orderId, Navigate,url,handleSubmit,setErrorMessage,setPaymentStatus]);
    return (
        <div className="confirm-main">

             <div className="confirm-content">

                <div className="confirm">
                    {/* <CheckCircleIcon/> */}

                    <p>  <img src={gif} alt=''/> </p>

                    <h5>Payment Successfully Completed!</h5>

                    <span>A confirmation has been sent to your email for further details.</span>

                    <button onClick={() => Navigate('/')}>Close</button>
                </div>
             </div>

        </div>
    )
}

export default LayoutDoc3