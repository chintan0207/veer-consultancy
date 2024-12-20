import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'
import './Droplist.scss'

const Droplist = () => {
  const { setShowLogoutConfirm,logopen,setLogopen,Navigate } = useContext(MyContext)
  return (
    <div>
      {logopen && (
        <div className="logout-overlay" onClick={() => setLogopen(!logopen)}>
          <div className="drop-list">
            <span>
              <li onClick={()=>Navigate('/admin')}>Admin</li>
              <li onClick={() => setShowLogoutConfirm(true)}>Logout</li>
            </span>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default Droplist
