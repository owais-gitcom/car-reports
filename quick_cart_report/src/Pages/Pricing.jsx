import React from 'react'
import '../Pages/Pricing.css'
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
  <>
  <div className="about-container">
      <h2 className="about">Pricing</h2>
      <div className="breadcrumb">
        <h5 className="Home">
          <Link to="/">HOME</Link> / Pricing
        </h5>
      </div>
    </div>


    <div className="container my-5 text-center">
  <h1 className='heading'>GET VEHICLE HISTORY REPORT</h1>
  <h2 className='chooseplan mb-5'>Choose a Plan</h2>

  <div className="row justify-content-center">
    {/* Premium Plan */}
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="plan-card shadow rounded-4 p-4 position-relative h-100">
        <span className="badge position-absolute top-0 start-50 translate-middle-x">
          MOST POPULAR
        </span>
        <h3 className="card-title mt-4">PREMIUM PLAN</h3>
        <h1 className="display-4">$45.30</h1>
        <p className='report'>1 Report</p>
        <ul className="list-unstyled">
          <li>VEHICLE SPECIFICATION</li>
          <li>DMV TITLE HISTORY</li>
          <li>ONLINE LISTING HISTORY</li>
          <li>JUNK & SALVAGE INFORMATION</li>
          <li>ACCIDENT INFORMATION</li>
          <li>HALF INSPECTION REPORT</li>
          <li>ODOMETER READING</li>
          <li>MAINTENANCE & INSPECTION</li>
          <li>DAMAGE OR THEFT</li>
          <li>FULL INSPECTION REPORT</li>
        </ul>
        <button className="button">BUY NOW</button>
      </div>
    </div>

    {/* Basic Plan */}
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="plan-card shadow rounded-4 p-4 position-relative h-100">
        <span className="badge position-absolute top-0 start-50 translate-middle-x">
          ECONOMIC
        </span>
        <h3 className="card-title mt-4">BASIC PLAN</h3>
        <h1 className="display-4">$34.99</h1>
        <p className='report'>1 Report</p>
        <ul className="list-unstyled">
          <li>VEHICLE SPECIFICATION</li>
          <li>DMV TITLE HISTORY</li>
          <li>ONLINE LISTING HISTORY</li>
          <li>JUNK & SALVAGE INFORMATION</li>
          <li>ACCIDENT INFORMATION</li>
          <li>HALF INSPECTION REPORT</li>
        </ul>
        <button className="button">BUY NOW</button>
      </div>
    </div>
  </div>
</div>



  </>
  )
}

export default Pricing
