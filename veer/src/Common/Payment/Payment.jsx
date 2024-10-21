import React, { useContext } from 'react'
import MyContext from '../Context/MyContext';
import axios from 'axios';
import './Payment.scss'
import gif1 from '../../Assets/images/loading.png'

const Payment = () => {

    const{url,setLoading,amountpaid} = useContext(MyContext)
    
  const handlePayment = async () => {

    
    try {
      setLoading(true)
      const { data } = await axios.post(
        `${url}/create-payment`,
        {
          amount:amountpaid,
          orderId: `order_${new Date().getTime()}`,
        },
      
      );

      if (data.success) {
        window.location.href = data.data; 
      } else {
        alert('Failed to initiate payment. Please try again.');
      }
    } catch (error) {
      console.error('Payment Error:', error.response?.data?.error || error.message);
      alert('An error occurred during payment. Please try again.');
    }finally{
      setLoading(false)
    }
  };    
  return (
    <div  className='payment-main'>

        <div className="payment-content">

               <div className="payment-page">
                  <img src={gif1} alt=''/>
               <h5>“You’re almost done! Please proceed to the payment page to complete your request.”</h5>
              <span> The amount to be paid for this service is
                
               <b>  &#8377;{amountpaid}  </b>
                
              </span>
              <button onClick={handlePayment}>Continue to Payment</button>

               </div>

        </div>

           
    </div>
  )
}

export default Payment
