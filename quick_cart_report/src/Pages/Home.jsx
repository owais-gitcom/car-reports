import React from 'react';
import './Home.css';

import bgimage from '../img/14925739_rm309-adj-05.jpg';
import car from '../img/ford-ranger-2023-0103.png';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import vindecode from '../img/vin-decode.jpg'


import tik from '../img/2705.svg'

import HistoryCheck from '../img/title-icon.png';
import TheftCheck from '../img/accident-icon.png';
import RebuildCheck from '../img/vehicle-info-icon.png';

import ProblemCheck from '../img/gears-icon.png';
import SaleListings from '../img/shield-icon.png';
import LienCheck from '../img/key-icon.png';


import MarketValue from '../img/market-value1.png';
import OwnershipCost from '../img/ownershipcost1.png';
import DataProducts from '../img/vehical.png';


import QuickCarReportAccordion from '../Pages/FaqSection';





const Home = () => {
  return (
    <>
    <div className="hero-section">
      <div className="overlay-bg" />
      
      <div className="hero-content slide-left">
        <h1>
          Instant & Reliable <br />
          Vehicle History <br />
          Reports - <span>Drive with Confidence!</span>
        </h1>
        <p>
          With just one click, you can access a detailed Vehicle History Report.
          Quick Car Reports makes it simple and efficient to get all the information you need about a vehicle.
        </p>
        <Link to="#">
          <button className="get-report">GET REPORT</button>
        </Link>
      </div>

      <div className="hero-car slide-right">
        <img src={car} alt="Car" />
      </div>
    </div>


<div className="two-column-container">
  <div className="left-column">
    <h2 className="h2 text-center">Quick Car Reports - Instant Vehicle History & Inspection Reports</h2>
    <p className="p">
      Quick Car Reports provides fast, reliable, and comprehensive vehicle history and inspection reports to 
      help buyers make informed decisions. Our reports include accident history, service records, mileage 
      verification, and ownership details, ensuring transparency and confidence in every car purchase. Whether 
      you're a buyer, seller, or dealer, Quick Car Reports delivers the insights you need—quickly and accurately.
    </p>
    <h5 className='h5'>Why Choose Quick Car Reports?</h5>

    <p className='instant '><img src={tik} alt="" />Instant vehicle history checks</p>
    <p className='instant '><img src={tik} alt="" />Accurate and up-to-date reports</p>
    <p className='instant '><img src={tik} alt="" />Easy-to-use platform</p>
    <p className='instant '><img src={tik} alt="" />Trusted by car buyers and dealers</p><br/>

    <p className='Get' >Get your report in seconds and drive with confidence!</p>
   


  </div>
  <div className="right-column">
    <img src={vindecode} alt="Vehicle history report" className="img-fluid rounded" />
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






{/* Full Story */}

<div className="FullStory">
  <h1 className="Fullheading">Get The Full Story On Any Vehicle</h1>
  <p className="Fullpara2">
    Quick Car Report Lab is an official access provider for the National Motor Vehicle Title 
    Information System (NMVTIS) and collaborates with government agencies,<br/> non-profits, and industry 
    sources to deliver one of the most comprehensive vehicle history reports in the US.
  </p>

  <Container>
    <Row className="image gy-4">
      {[{
        img: HistoryCheck,
        title: "Title History Check",
        desc: "Check the VIN for a chronological history of registrations across US states."
      }, {
        img: TheftCheck,
        title: "Active Theft Check",
        desc: "Protect against legal issues by verifying that the vehicle hasn’t been reported stolen."
      }, {
        img: RebuildCheck,
        title: "Salvage Rebuild Check",
        desc: "Check records from junkyards or salvage auctions for potential rebuilding and resale."
      }, {
        img: ProblemCheck,
        title: "Title Problem Check",
        desc: "Look for title brands that indicate potential issues like altered odometer readings or flood damage."
      }, {
        img: SaleListings,
        title: "Past Sale Listings",
        desc: "Review the car’s sales history for information on previous sale dates and prices."
      }, {
        img: LienCheck,
        title: "Open Lien Check",
        desc: "Verify the car’s status by checking for any unresolved liens."
      }].map((item, idx) => (
        <Col key={idx} xs={12} sm={6} lg={4}>
          <div className="feature-box">
            <img src={item.img} alt={item.title} className="feature-icon" />
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-text">{item.desc}</p>
          </div>
        </Col>
      ))}
    </Row>

    <div className="wrapper mt-4">
      <button className="btn-outline-green">Check Vin</button>
    </div>
  </Container>
</div>



 {/* Full Story  */}



 {/* Vehicle Data Tools */}


 <div className='FullStory'>
      <h1 className='Fullheading'>Explore Other Vehicle Data Tools</h1>

      <p className='Fullpara'>Quick Car Report Lab has meticulously compiled original datasets on market values, 
        ownership costs, vehicle images, and more.</p>
</div>


<Container className="vehicle-section">
  <Row>
    <Col lg="4" md="6" sm="12" className="imagetool">
      <img src={MarketValue} alt="Market Value" className="tool-img" />
      <h1 className="history2">Free Market Value Check</h1>
      <p className="check">
        Assess the estimated current market value<br />
        of a specific vehicle.
      </p>
      <div className="wrapper">
        <button className="btn-outline-green">Check Market Value</button>
      </div>
    </Col>

    <Col lg="4" md="6" sm="12" className="imagetool">
      <img src={OwnershipCost} alt="Ownership Cost" className="tool-img" />
      <h1 className="history2">Free Ownership Cost Check</h1>
      <p className="check">
        Estimate the 5-year ownership cost for any<br />
        popular vehicle.
      </p>
      <div className="wrapper">
        <button className="btn-outline-green">Check Ownership Cost</button>
      </div>
    </Col>

    <Col lg="4" md="6" sm="12" className="imagetool">
      <img src={DataProducts} alt="Data Products" className="tool-img" />
      <h1 className="history2">Vehicle Data Products</h1>
      <p className="check">
        Automotive businesses can utilize our flexible<br />
        vehicle data solutions.
      </p>
      <div className="wrapper">
        <button className="btn-outline-green">Check Data Products</button>
      </div>
    </Col>
  </Row>
</Container>


{/* Vehicle Data Tools */}


{/* Quick Car Reports */}

<div className='FullStory'>
  <h1 className='Fullheading'>Quick Car Reports vs. Carfax & Others</h1>
  <p className='Fullpara'> Avoid unnecessary expenses! Choose Quick Car Reports—the reliable service you can count on! We’ve noticed and are
   responding to the sentiment that you might feel <br/> taken advantage of by Carfax. It’s widely known that their 
   vehicle history reports come at a high cost and offer only fundamental details. Quick Car Reports provides
   <br/> comprehensive information at a fraction of the cost, ensuring you get the details you need without 
   breaking the bank.</p>
</div>



    <div className="container">
      

      {/* Main Content */}
      <main className="main-content">
        <div className="report-section">
          <h2 className='REPORTCONTENTS'>REPORT CONTENTS</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th>Quick Car Reports</th>
                <th>CarFax</th>
                <th>AutoCheck</th>
                <th>InstaVIN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Free Photo</td>
                <td><span className="check">✔</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross">✖</span></td>
              </tr>
              <tr>
                <td>Odometer Reading</td>
                <td><span className="check">✔</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross">✖</span></td>
              </tr>
              <tr>
                <td>Accident Check</td>
                <td><span className="check">✔</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross">✖</span></td>
              </tr>
              <tr>
                <td>Title Check</td>
                <td><span className="check">✔</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross">✖</span></td>
              </tr>
              <tr>
                <td>Fraud & Crime Information</td>
                <td><span className="check">✔</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross">✖</span></td>
              </tr>
              <tr>
                <td>Market Price Analysis</td>
                <td><span className="check">✔</span></td>
                <td><span className="check">✔</span></td>
                <td><span className="check">✔</span></td>
                <td><span className="check">✔</span></td>
              </tr>
              <tr>
                <td>Instant Report: Get your report INSTANTLY! NO waiting around</td>
                <td><span className="check">✔</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross">✖</span></td>
              </tr>
              <tr>
                <td>Accurate Data: Using government and third party databases</td>
                <td><span className="check">✔</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross">✖</span></td>
              </tr>
              <tr>
                <td>Savings: THE competitors CHARGE $35 for a single report!</td>
                <td><span className="check">✔</span></td>
                <td><span className="cross">✖</span></td>
                <td><span className="cross" style={{ color:'red', fontSize: '18px' }}>✖</span></td>
                <td><span className="cross">✖</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>


{/* Quick Car Reports */}


{/* collaps  */}


    <div className="App">
      <QuickCarReportAccordion />
    </div>

{/* collaps  */}



{/* footer */}






    

  

{/* footer */}


    </>
  );
};

export default Home;
