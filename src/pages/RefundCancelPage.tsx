import React from "react";

const RefundCancelPage: React.FC = () => {
  return (
    <main className="legal-page container mx-auto px-4 py-8 max-w-4xl">
      <h1>Refund &amp; Cancellation Policy</h1>
      
      <div className="bg-white">
        <p>
          At CORPEAS, we are committed to providing our customers with the highest quality products and services. 
          However, we understand that there may be instances where you need to cancel an order or request a refund. 
          This Refund and Cancellation Policy outlines the terms and conditions governing cancellations and refunds 
          for purchases made through our platform.
        </p>

        <h2>Cancellation Policy</h2>
        <p>
          Orders can be cancelled before the product has been shipped. Once the shipment has been initiated, 
          cancellation will not be possible. To cancel an order, please contact our customer service team 
          at the contact details provided on our website.
        </p>

        <h2>Refund Policy</h2>
        <p>
          Refunds are processed only in case of damaged, defective, or wrongly delivered products. 
          In such cases, we will either replace the product or issue a refund after verifying the complaint. 
          Refunds will be processed within 7-14 business days from the date of approval and will be credited 
          to the original payment method.
        </p>

        <h2>Non-Refundable Situations</h2>
        <p>
          Refunds will not be entertained in the following situations:
        </p>
        <ul>
          <li>Change of mind or decision</li>
          <li>Late delivery due to unforeseen circumstances</li>
          <li>Product not meeting personal expectations</li>
          <li>Any damage post-delivery due to mishandling</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          For any queries regarding cancellations or refunds, please reach out to our customer support team 
          through the contact information provided on our website.
        </p>
      </div>
    </main>
  );
};

export default RefundCancelPage;