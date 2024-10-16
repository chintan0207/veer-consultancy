import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'
import './Droplist.scss'

const Droplist = () => {
  const { setShowLogoutConfirm, dropOpen, setDropOpen } = useContext(MyContext)
  return (
    <div>
      {dropOpen && (
        <div className="logout-overlay" onClick={() => setDropOpen(!dropOpen)}>
          <div className="drop-list">
            <span>
              <li>Account</li>
              <li onClick={() => setShowLogoutConfirm(true)}>Logout</li>
            </span>
          </div>
        </div>)
      }
    </div>
  )
}

export default Droplist
