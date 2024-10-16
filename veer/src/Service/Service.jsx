import React from 'react'
import './Service.scss'
import Servicescard from './Servicescard';
import { services } from '../JsonAarrays/CardsDetails';

const Service = () => {
    return (
        <div className='services'>
            <div className='services-content'>
                <span>
                    Services
                </span>
                <div className='service-container'>
                    {services.map((obj, index) => {
                        return (<Servicescard obj={obj} key={index} />)
                    })}
                </div>

            </div>
        </div>
    )
}

export default Service