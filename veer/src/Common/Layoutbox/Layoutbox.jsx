
import React, { useContext } from 'react'
import './Layoutbox.scss'
import MyContext from '../Context/MyContext'
import Layoutdoc from '../LayoutDoc/Layoutdoc'
import LayoutDoc2 from '../Layout2/LayoutDoc2'


const Layoutbox = () => {

    const {setLayout,layout} =useContext(MyContext)
  return (
    

    <div className="lbox-main">

        <div className="lbox-content">

        <div className="lbox-left">

            <span style={{color:layout==='document'&&"rgba(255, 0, 0, 0.292)"}} onClick={()=>setLayout('document')}>Documents Required</span>
            <span style={{color:layout==='personal'&&"rgba(255, 0, 0, 0.292)"}} >Personal Details</span>
            <span style={{color:layout==='contact'&&"rgba(255, 0, 0, 0.292)"}}  >Contact Details</span>
            <span style={{color:layout==='upload'&&"rgba(255, 0, 0, 0.292)"}}  >Upload Required Documents </span>
            <span style={{color:layout==='payment'&&"rgba(255, 0, 0, 0.292)"}}> Payment Information</span>
            
        </div>
        <div className="lbox-right">
           {
            layout==='document' &&  <Layoutdoc/>} 
           {layout==='personal' && <LayoutDoc2/>}
           {layout==='contact' && <LayoutDoc2/>}
           {layout==='upload' && <LayoutDoc2/>}
           {layout==='payment' && <LayoutDoc2/>}


        </div>
        </div>
        
    </div>
  )
}

export default Layoutbox
