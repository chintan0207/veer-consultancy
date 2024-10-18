import React, { useEffect, useState, useMemo, useContext } from 'react';
import './Header.scss';
import { IoSearchOutline } from "react-icons/io5";
import MyContext from '../Context/MyContext';
import { MdLogin } from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";

const Header = () => {
  const { Navigate, location, setIsOpen, searchTerm, setSearchTerm, token, logopen,setLogopen} = useContext(MyContext)
  const items = useMemo(() => ['passport', 'student visa', 'visitor visa', 'work permit', 'ielts', 'pte', 'aadhar card', 'pan card', 'election card', 'driving license'], []);
  const [right, setRight] = useState(items[0]);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const searchmatch = location.pathname.match('/search')

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1600);

    return () => clearInterval(interval);
  }, [items.length]);

  useEffect(() => {
    setRight(items[index]);
    setAnimate(true);

    const timeout = setTimeout(() => setAnimate(false), 700);

    return () => clearTimeout(timeout);
  }, [index, items]);

  return (
    <>
      <header>

        <div className='header'>
          <div className='left' onClick={() => Navigate('/')}>Veer Consultancy</div>
          <div className='left' onClick={() => Navigate('/')}>Veer<br /> Consultancy</div>

          {!searchmatch && <div className='center' onClick={() => Navigate('/search')}>
            <span className='icon'><IoSearchOutline /></span>
            <span className={`search ${animate ? 'animate' : ''}`}>
              search for "{right}"
            </span>
          </div>}

          {searchmatch && <div className='centers'>
            <input type='text' autoFocus placeholder='search for student visa and more...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

            <IoSearchOutline />
          </div>
          }

          <div className='right'>
            {token ?
              <div className="accounti">
                <span onClick={() => setLogopen(!logopen)}> Account  <RiArrowDropDownFill /></span>
              </div> :
              <button className='btn1' onClick={() => setIsOpen(true)}><MdLogin />Login</button>
            }
            {!searchmatch && <button className='btn2' onClick={() => Navigate('/explore')}>Explore</button>}

          </div>


        </div>

        {/*for search bar in mobile */}

        {!searchmatch && <div className='centerm' onClick={() => Navigate('/search')}>
          <IoSearchOutline />
          <span className={`search ${animate ? 'animate' : ''}`}>
            search for "{right}"
          </span>
        </div>
        }

        {searchmatch && <div className='centermo'>
          <input type='text' autoFocus placeholder='search for student visa and more...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <IoSearchOutline />
        </div>
        }


      </header>

    </>
  );
};

export default Header;
