
import React from 'react'
import './Counting.scss'
import CountUp from 'react-countup'

const Counting = () => {
  return (
    <div className="count-main">


        <div className="count-detail">

            <div className="count-left">
                <h5>We Provide Special Care <br /> To Make Easy Your Dream</h5>
                <h5>The market leading visa & <br /> immigration firm</h5>
            </div>
            <div className="count-right">

              <div className="circleone">
                <span>Visa Approvals</span>
                <span>
                  <CountUp
                   start={0}
                   end={600}
                   duration={3}
                   separator=" "
                   decimals={0}
                   decimal=","
                   suffix='+'
                   enableScrollSpy={true}/>
                </span>
                <p>Helping people secure their visas successfully.</p>
              </div>
              <div className="circletwo">
              <span>Happy Clients</span>
              <span>
                  <CountUp
                   start={0}
                   end={600}
                   duration={3}
                   separator=" "
                   decimals={0}
                   decimal=","
                   suffix='+'
                   enableScrollSpy={true}/>
                </span>
              <p>Helping clients reach their destinations!</p>
              </div>
              <div className="circlethree">
              <span>Years of Experience</span>
              <span>
                  <CountUp
                   start={0}
                   end={1}
                   duration={3}
                   separator=" "
                   decimals={0}
                   decimal=","
                   suffix='+'
                   enableScrollSpy={true}/>
                </span>
              <p>Providing expert consultancy since many years.</p>
              </div>
              <div className="circlefour">
              <span>Consultations Held</span>
              <span>
                  <CountUp
                   start={0}
                   end={100}
                   duration={3}
                   separator=" "
                   decimals={0}
                   decimal=","
                   suffix='+'
                   enableScrollSpy={true}/>
                </span>
              <p>Trusted advice for clients worldwide.</p>
              </div>
              <div className="circlefive">
              <span>Successful Applications</span>
              <span>
                  <CountUp
                   start={0}
                   end={400}
                   duration={3}
                   separator=" "
                   decimals={0}
                   decimal=","
                   suffix='+'
                   enableScrollSpy={true}/>
                </span>
              <p>Join Veer Consultancy satisfied clients with approved visas.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Counting
