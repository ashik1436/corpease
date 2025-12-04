import React from "react";

const ShippingPolicyPage: React.FC = () => {
  return (
    <main className="legal-page container mx-auto px-4 py-8 max-w-4xl">
      <h1>Shipping Policy</h1>
      
      <div className="bg-white">
        <p>
          At CORPEAS, we aim to deliver your orders promptly and securely. This Shipping Policy outlines 
          our procedures and guidelines regarding the shipment of products ordered through our platform.
        </p>

        <h2>Processing Time</h2>
        <p>
          All orders are processed within 1-2 business days. Orders placed on weekends or holidays 
          will be processed on the next business day.
        </p>

        <h2>Shipping Methods</h2>
        <p>
          We offer the following shipping options:
        </p>
        <ul>
          <li>Standard Delivery: 5-7 business days</li>
          <li>Express Delivery: 2-3 business days (available at additional cost)</li>
        </ul>

        <h2>Shipping Charges</h2>
        <p>
          Shipping charges are calculated at checkout based on the weight of the package and delivery location. 
          Free shipping is available on orders above ₹999.
        </p>

        <h2>Delivery Areas</h2>
        <p>
          We currently deliver to all major cities and towns across India. Delivery to remote locations 
          may take additional time.
        </p>

        <h2>Order Tracking</h2>
        <p>
          Once your order is shipped, you will receive a confirmation email with tracking information. 
          You can track your order status through the link provided in the email.
        </p>

        <h2>Delivery Issues</h2>
        <p>
          In case of failed delivery attempts, our courier partner will attempt redelivery twice. 
          If delivery is still unsuccessful, the package will be returned to us and a refund will be processed.
        </p>

        <h2>International Shipping</h2>
        <p>
          Currently, we do not offer international shipping. All deliveries are limited to addresses within India.
        </p>

        <h2>Contact Us</h2>
        <p>
          For any shipping-related queries, please contact our customer support team through the 
          contact information provided on our website.
        </p>
      </div>
    </main>
  );
};

export default ShippingPolicyPage;