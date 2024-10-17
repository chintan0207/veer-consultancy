import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'

const Logout = () => {

    const {showLogoutConfirm,confirmLogout,cancelLogout} =useContext(MyContext)
  return (
    <div>
      {showLogoutConfirm && (
          
          <div className="logout-confirm">
            <p>Are you sure you want to log out?</p>
            <button className="confirm-btn" onClick={confirmLogout}>Yes</button>
            <button className="cancel-btn" onClick={cancelLogout}>No</button>
          </div>
          
        )}
    </div>
  )
}

export default Logout