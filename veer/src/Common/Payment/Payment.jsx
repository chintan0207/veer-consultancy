import React, { useContext } from 'react'
import MyContext from '../Context/MyContext';
import './Payment.scss'
import gif1 from '../../Assets/images/loading.png'

const Payment = () => {

    const{amount,handleupi } = useContext(MyContext)
    
  

    
    
  return (
    <div  className='payment-main'>

        <div className="payment-content">

               <div className="payment-page">
                  <img src={gif1} alt=''/>
               <h5>“You’re almost done! Please proceed to the payment page to complete your request.”</h5>
              <span> The amount to be paid for this service is
                
               <b>  &#8377;{amount}  </b>
                
              </span>
              <button  onClick={handleupi}>Continue to Payment</button>


             
               </div>

        </div>

           
    </div>
  )
}

export default Payment
