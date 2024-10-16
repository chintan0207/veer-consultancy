import React from 'react'
import './Banner.scss'
import Inquiry from '../Inquiry/Inquiry'

const Banner = () => {
    return (
        <div className='bi'>
            <div className='first'>
                <div className='heading'>
                    <h1 className='b-heading'>STUDY ABROAD</h1>
                    <span className='b-span'>We are your pathfinder at each step of Abroad Education Process</span>
                </div>
            </div>
            <div className="second">
                <Inquiry />
            </div>
        </div>

    )
}

export default Banner