/* eslint-disable react/jsx-no-undef */

import React, { useContext } from 'react'
import './Layoutdoc.scss';
import { FaAngleDoubleRight } from "react-icons/fa";
import MyContext from '../Context/MyContext';
const Layoutdoc = () => {

  const { pageData, countryName,handlepersonal} = useContext(MyContext);
  console.log(countryName)

  return (

    <div className="box-container">
      <div className="box-content">
        <div className="left-content">
          <div className='left-1'>
            <h3>Required Document</h3>
            {
              pageData?.country
                .filter((item) => item.name === countryName)
                .map((item, index) => {
                  return (
                    <>{item.documents.map((doc, index) => {
                      return (
                        <div className='list' key={index}>
                          <FaAngleDoubleRight className='list-icon' size={"15px"} />
                          <span>{doc}</span>
                        </div>
                      )
                    })}</>
                  )
                })

            }
          </div>
          <div className='left-2'>
            <h3>Pricing Details</h3>
            {
              pageData?.country
                .filter((item) => item.name === countryName)
                .map((item) => {
                  return (
                    <>{item.pricing.map((doc, index) => {
                      return (
                        <div className='list' key={index}>
                          <FaAngleDoubleRight className='list-icon' size={"15px"} />
                          <span>{doc.name} : Rs. {doc.price}</span>
                        </div>
                      )
                    })}</>
                  )
                })

            }
          </div>
        </div>
        <div className="right-content">
          <h2>{pageData?.title}</h2>
          {
            pageData?.country
              .filter((item) => item.name === countryName)
              .map((item) => {
                return (
                  <>{item.details.map((doc, index) => {
                    return (
                      <div className='list' key={index}>
                        <FaAngleDoubleRight className='list-icon' size={"15px"} />
                        <span>{doc}</span>
                      </div>
                    )
                  })}</>
                )
              })

          }

        </div>


      </div>
          
          <button  onClick={handlepersonal}>Next</button>
    </div>



  )
}

export default Layoutdoc
