import React from 'react'
import '../Pages/About.css'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import about from '../img/about-US-01-1495x1536.png'


const About = () => {
  return (
    <>

    <div className="about-container">
      <h2 className="about">About Us</h2>
      <div className="breadcrumb">
        <h5 className="Home">
          <Link to="/">HOME</Link> / About Us
        </h5>
      </div>
    </div>
 


    <Container>
  <Row>
    <Col className="about1" lg="6">
      <h5>About Us</h5>
      <p >
        Welcome to Quick Car Reports, your trusted partner in vehicle history reports and VIN checks. Our mission is to provide you with comprehensive, reliable, and instant car history reports to ensure you make informed decisions when buying or selling a vehicle.

        At Quick Car Reports, we understand that purchasing a car is a significant investment. Whether you’re a first-time buyer, a seasoned car enthusiast, or a dealership, having access to accurate vehicle information is crucial. Our platform offers detailed reports that include:

        <ul>
          <li><strong>Accident History</strong>: Discover if the vehicle has been involved in any accidents and the extent of the damage.</li>
          <li><strong>Ownership Records</strong>: Check the number of previous owners and the duration of each ownership.</li>
          <li><strong>Service History</strong>: Access maintenance records to ensure the car has been properly serviced.</li>
          <li><strong>Title Information</strong>: Verify the vehicle’s title status to avoid any legal complications.</li>
          <li><strong>Mileage Verification</strong>: Ensure the accuracy of the vehicle’s mileage to detect potential odometer fraud.</li>
        </ul>
      </p>
    </Col>
    <Col className="aboutimage" lg="6">
      <img src={about} alt="Mechanic with clipboard" />
    </Col>
  </Row>
</Container>

<p className='p' >At Quick Car Reports, we are committed to transparency, integrity, and customer satisfaction. Our team of experts is dedicated to continuously improving our services to <br/> meet your needs. We believe in empowering our users with the knowledge they need to make confident and informed decisions.</p>


<h2 className='h1'>Why Choose Quick Car Reports?</h2>

<div className='about2'> 
  <ul>
    <li><strong>Instant Access</strong>: Get detailed vehicle history reports within minutes.</li>
    <li><strong>Comprehensive Data</strong>: Our reports include information from a wide range of reliable sources.</li>
    <li><strong>User-Friendly Interface</strong>: Our platform is designed to be intuitive and easy to navigate.</li>
    <li><strong>Customer Support</strong>: Our dedicated support team is available to assist you with any questions or concerns.</li>
    <li><strong>Affordability</strong>: We offer competitive pricing to ensure our services are accessible to everyone.</li>
  </ul>
</div>


<h2 className='h1'>Meet Our Team</h2>

<p className='p1 '>Our team comprises industry experts with years of experience in automotive research, data analysis, and customer service. Each team member is passionate about <br/> helping you make informed vehicle purchasing decisions. We work together to provide you with the best possible service and support.</p>

<h2 className='h1'>Get Started Today</h2>

<p className='p1'>Whether you’re buying a used car, selling your vehicle, or just curious about a car’s history, Quick Car Reports is here to help. Simply enter the VIN, and we’ll do the rest. <br/> Experience peace of mind with our reliable and comprehensive vehicle history reports.</p>


<h2 className='h1'>Contact Us</h2>

<p className='p1'>Have questions or need assistance? Our customer support team is here to help. Feel free to reach out to us at [contact email] or call us at [contact number]. You can also  <br/> visit our FAQ page for more information.</p>


<p className='p1'>Thank you for choosing Quick Car Reports. Drive with confidence knowing you have all the information you need.</p>

    </>
  )
}

export default About
