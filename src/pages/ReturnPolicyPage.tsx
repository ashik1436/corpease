import React from "react";

const ReturnPolicyPage: React.FC = () => {
  return (
    <main className="legal-page container mx-auto px-4 py-8 max-w-4xl">
      <h1>Return Policy</h1>
      
      <div className="bg-white">
        <p>
          At CORPEAS, we strive to ensure complete customer satisfaction with every purchase. 
          If you are not completely satisfied with your purchase, we're here to help with our return policy.
        </p>

        <h2>Eligibility for Returns</h2>
        <p>
          Items can be returned within 7 days of delivery, provided they meet the following conditions:
        </p>
        <ul>
          <li>The item is in its original packaging</li>
          <li>The item is unused and in the same condition as received</li>
          <li>All accessories and freebies are included</li>
          <li>The return is accompanied by the original invoice</li>
        </ul>

        <h2>Non-Returnable Items</h2>
        <p>
          Certain items cannot be returned for hygiene and safety reasons:
        </p>
        <ul>
          <li>Perishable food items</li>
          <li>Personal care products</li>
          <li>Opened consumables</li>
          <li>Customized or personalized items</li>
        </ul>

        <h2>Return Process</h2>
        <p>
          To initiate a return, please contact our customer service team with your order details and reason for return. 
          Once approved, you will receive return instructions and a return shipping label (if applicable). 
          Items must be shipped back within 3 days of return approval.
        </p>

        <h2>Refunds</h2>
        <p>
          Upon receipt and inspection of the returned item, we will process your refund within 7-14 business days. 
          Refunds will be issued to the original payment method. Shipping charges are non-refundable.
        </p>

        <h2>Damaged or Defective Items</h2>
        <p>
          If you receive a damaged or defective item, please report it within 24 hours of delivery. 
          We will arrange for a replacement or refund at no additional cost.
        </p>
      </div>
    </main>
  );
};

export default ReturnPolicyPage;