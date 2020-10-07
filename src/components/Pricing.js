import React from 'react'
import {Link} from 'react-router-dom'
import {FaFire} from 'react-icons/fa'
import {Button} from './Button'
import {BsXDiamondFill} from 'react-icons/bs'

function Pricing() {
  return (
    <div>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <div className="pricing__heading">
            <div className="pricing__container">
              <Link to="/sign-up"
              className='pricing__container-card'>
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Starter</h3>
                  <h4>£9.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>100 Transactions</li>
                    <li>2% Cash Back</li>
                    <li>£10,000 Limit</li>
                  </ul>
                  <Button buttonSize='btn--wide' buttonColor='primary'>
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link to="/sign-up"
              className='pricing__container-card'>
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Gold</h3>
                  <h4>£39.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>1000 Transactions</li>
                    <li>2.5% Cash Back</li>
                    <li>£100,000 Limit</li>
                  </ul>
                  <Button buttonSize='btn--wide' buttonColor='primary'>
                    Choose Plan
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
