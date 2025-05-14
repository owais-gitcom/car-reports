import React from 'react'
import '../Pages/Support.css'
import { Link } from 'react-router-dom';

import QuickCarReportAccordion from '../Pages/FaqSection';



const Support = () => {
  return (
    <>

<div className="about-container">
      <h2 className="about">Support</h2>
      <div className="breadcrumb">
        <h5 className="Home">
          <Link to="/">HOME</Link> / Support
        </h5>
      </div>
    </div>



    <div>

<h2 className='h1'>Support Center</h2>

<p className='p'>Welcome to the Quick Car Reports Support Center. We’re dedicated to providing you with the best possible assistance for all your vehicle history report and VIN check
  <br/>needs. Whether you’re experiencing issues, have questions about our services, or need guidance on using our platform, our support team is here to help. Your satisfaction
  <br/>is our priority, and we’re committed to ensuring you have a seamless and positive experience with Quick Car Reports.
</p>
    </div>



<h2 className='h2'>Contact US</h2>

<div className='about2'> 
<ul>
          <li><strong>Email</strong>: info@quickcarreports.com</li>
          <li><strong>Phone</strong>:1-800-123-4567</li>
          <li><strong>Live Chat</strong>:  Click the chat icon at the bottom right corner of our website to start a live chat with one of our representatives.</li>
        </ul>

</div>


 <div className="App">
      <QuickCarReportAccordion />
    </div>


 <div>
      
<h2 className='h2'>Feedback</h2>

<p className='p'>We deeply value your feedback and suggestions as they help us enhance our services. If you have any comments, ideas, or recommendations on how we can improve, we
  <br/>would love to hear from you. Your insights are crucial to our ongoing efforts to provide the best possible experience. Please take a moment to share your thoughts with us
  <br/>by filling out our Feedback Form.
</p>
    </div>



    <h2 className='h2'>Stay Connected</h2>

    <div className='about2'> 
      <p className='p1'>Follow us on social media for updates, promotions, and more:</p>
      <ul>
  <li><strong>Facebook</strong>: <Link to="/support" > Quick Car Reports</Link> </li>
  <li><strong>Twitter</strong>: <Link to="/support" > Quick Car Reports</Link> </li>
  <li><strong>Instagram</strong>:<Link to="/support" > Quick Car Reports</Link> </li>
</ul>

</div>

<p className='p1'>Thank you for choosing Quick Car Reports. Drive with confidence knowing you have all the information you need.</p>

    </>
  )
}

export default Support
