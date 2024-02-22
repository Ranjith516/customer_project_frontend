import React, { useState } from "react";
import { offers, payments, postpaid, prepaid, serviceActivationSetup } from "./FaqData";

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [faqData, setFaqData] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    switch (category) {
      case "offers":
        setFaqData(offers);
        break;
      case "payments":
        setFaqData(payments);
        break;
      case "postpaid":
        setFaqData(postpaid);
        break;
      case "prepaid":
        setFaqData(prepaid);
        break;
      case "serviceActivationSetup":
        setFaqData(serviceActivationSetup);
        break;
      default:
        setFaqData([]);
    }
  };

  return (
    <div>
      <div className="faq-container pt-5">
      <h2>FAQs</h2>
      <div className="faq-categories">
        <button  style={{backgroundColor:'lightgoldenrodyellow',borderRadius:'35px'}} onClick={() => handleCategoryClick("offers")}>Offers</button>
        <button  style={{backgroundColor:'lightgoldenrodyellow',borderRadius:'35px'}} onClick={() => handleCategoryClick("payments")}>Payments</button>
        <button  style={{backgroundColor:'lightgoldenrodyellow',borderRadius:'35px'}} onClick={() => handleCategoryClick("postpaid")}>Postpaid</button>
        <button  style={{backgroundColor:'lightgoldenrodyellow',borderRadius:'35px'}} onClick={() => handleCategoryClick("prepaid")}>Prepaid</button>
        <button  style={{backgroundColor:'lightgoldenrodyellow',borderRadius:'35px'}} onClick={() => handleCategoryClick("serviceActivationSetup")}>Service Activation & Setup</button>
      </div>
      <div className="faq-list">
        {faqData.length > 0 ? (
          <ul>
            {faqData.map((faq, index) => (
              <li key={index}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </li>
            ))}
          </ul>
        ) : (

          <p>Select a category to view FAQs.<br></br></p>
        
        )}
      </div>
      </div>
    </div>
  );
};

export default FAQ;
