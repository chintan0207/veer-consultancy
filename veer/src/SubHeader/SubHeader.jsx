import React, { useContext } from 'react'
import "./SubHeader.scss"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import MyContext from '../Common/Context/MyContext';
const SubHeader = () => {

    const { location } = useContext(MyContext);

    if (location.pathname !== '/') {
        return null
    }



    return (
        <div className='sub-header'>
            <div className='sh'>
                <div className='sub-header-content'>
                    <div className='left'>
                        <FaLocationDot className='icon' />
                        <span>301,Dhun Complex Nizampura,vadodara-390002</span>
                    </div>

                    <div className='right'>
                        <FaPhone className='icon' />
                        <span>+919987564844</span>
                        <span className='line'>|</span>
                        <IoIosMail className='icon' size={"20px"} />
                        <span>abroadvisa2220@gmail.com</span>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default SubHeader