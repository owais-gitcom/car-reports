import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Pages/Home.css';

// Add this CSS in your component file or a separate CSS file
const styles = `
  .accordion-button:not(.collapsed) {
    color: #ffffff; /* White text */
    background-color: rgb(54, 117, 49) !important; /* Bootstrap green color */
  }
  .accordion-button:focus {
    box-shadow: none;
  }
`;

const QuickCarReportAccordion = () => {
  const faqItems = [
    {
      question: "What is Quick car Reports Vehicle History Report?",
      answer: "A Quick Car Report Lab vehicle history report provides a detailed overview of a vehicle’s past, including title issues, odometer readings, accident history, structural damage, liens, theft records, and manufacturer recalls. Our primary goal is to empower automotive market participants by offering transparent and accessible information through a VIN check. Quick Car Report Lab aims to facilitate informed decision-making for buyers and sellers, focusing on fraud prevention and building trust. We strive to make comprehensive vehicle history reports, including VIN checks, an essential tool in the automotive landscape. Our service is designed to be efficient and cost-effective, reinforcing Quick Car Report Lab’s commitment to enhancing transparency, reliability, and confidence in vehicle transactions."
    },
    {
      question: "Is Quick Car Report Vehicle History Reports Legit?",
      answer: "Yes, the Quick Car Report Lab Vehicle History Report is a legitimate vehicle data service. Its accreditation as an official access provider for NMVTIS ensures it meets rigorous federal standards, underscoring the credibility and accuracy of its reports. Quick Car Report Lab sources data from a centralized database that aggregates information from state motor vehicle agencies, salvage yards, and insurance carriers, enhancing the reliability of the vehicle history provided. This legitimacy establishes each Quick Car Report Lab car report as a trusted resource for vehicles in North America."
    },
    {
      question: "Do Quick Car Reports have information on every vehicle?",
      answer: "While Quick Car Report Lab aims to provide information on a wide range of vehicles, some details may occasionally be unavailable or have limited coverage due to state regulations and reporting practices. For the most accurate and current information, we recommend checking vehicle report availability on our platform. As an NMVTIS-compliant provider, we offer all data reported to NMVTIS, including title records, salvage records, and title brands. Additionally, Quick Car Report Lab incorporates data outside NMVTIS, such as theft records, lien records, impound/export records, and sale records."
    },
    {
      question: "Who can benefit from Quick Car Reports vehicle history reports?",
      answer: "We offer vehicle history reports for a diverse audience, including consumers seeking reliable information before a purchase, sellers aiming for transparent transactions, and industry professionals navigating the automotive market. Our goal is to empower all stakeholders with accurate insights into a vehicle’s past. Our reports are available to anyone needing the history of a used vehicle. Whether you’re buying a used vehicle and wish to uncover its complete history and potential issues, or you’re a seller wanting to showcase your car’s value, our reports are a valuable resource. By providing comprehensive insights, we help buyers make informed decisions, ensuring they understand the vehicle’s history before purchasing."
    },
    {
        question: "What are the Data Products offered by Quick Car Reports?",
        answer: "Quick Car Report Lab leads in providing comprehensive Automotive Data Solutions tailored to various automotive business needs. Our Advanced Vehicle Data APIs facilitate the integration of specifications, market values, vehicle history, and automotive images for streamlined operations. Additionally, our Market Data Feeds deliver real-time market intelligence with daily updates on millions of listings and insights from thousands of dealerships. Committed to accuracy and reliability, Quick Car Report Lab empowers users and businesses in the automotive industry, ensuring transparency and informed decision-making."
      }
  ];

  return (

    <>


    <div className="container mt-3">
      {/* Add the style tag to inject our CSS */}
      <style>{styles}</style>
      
      <h2 className='h2'>Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
        {faqItems.map((item, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>
              {item.question}
            </Accordion.Header>
            <Accordion.Body>
              {item.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>

    </>
  );
};

export default QuickCarReportAccordion;