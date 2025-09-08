import React from "react";
import card1 from "../../assets/images/portfolio-images/card-1.png";

export default function OrderPredictionWorkflow() {
  return (
    <div className="bg-gray-900 text-gray-100 p-10 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
      
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
       
          <h2 className="text-lg font-semibold mb-2">Order Prediction & Notification</h2>
          <img src={card1} alt="Case Study Image" className="w-full h-auto mb-8 rounded-lg" />
        
        </div>

        {/* How it works */}
        <section>
          <h1 className="text-3xl font-bold mb-4">How it works</h1>
          <p className="mb-4">
            This workflow automates <strong>order prediction and customer notifications</strong>{" "}
            . It analyzes past customer orders, predicts the next order date, and
            sends reminders through <strong>Gmail</strong> and <strong>WhatsApp</strong>.
            Predictions and statuses are logged in <strong>Google Sheets</strong>.
          </p>
          <p>
            It runs on two schedules:
            <br />– <strong>2 AM</strong>: Updates predicted order dates
            <br />– <strong>11 AM</strong>: Sends notifications if orders are due soon
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Automated scheduling at 2 AM and 11 AM</li>
            <li>Groups repeat customers by phone number</li>
            <li>Predicts next order date using average gap between past orders</li>
            <li>Saves predictions and statuses into Google Sheets</li>
            <li>Sends personalized notifications via Gmail and WhatsApp</li>
            <li>Low-sales detection ensures alerts only trigger when due</li>
          </ul>
        </section>

        {/* Step by Step */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Step-by-step</h2>

          <ol className="list-decimal pl-6 space-y-6">
            <li>
              <strong>Schedule Triggers</strong>
              <p>
                The workflow runs at <b>2 AM</b> for predictions and at <b>11 AM</b> for
                notifications.
              </p>
            </li>

            <li>
              <strong>Order Prediction Flow (2 AM)</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Reads orders from Google Sheets</li>
                <li>Groups customers by phone number</li>
                <li>Identifies repeat customers</li>
                <li>
                  Predicts next order dates using average gap between previous purchases
                </li>
                <li>Saves predictions back into Google Sheets</li>
              </ul>
            </li>

            <li>
              <strong>Order Notification Flow (11 AM)</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Reads predicted order dates from Google Sheets</li>
                <li>Loops over each customer prediction</li>
                <li>
                  Checks if:
                  <ul className="list-disc ml-6">
                    <li>Next order due in &lt; 4 days</li>
                    <li>No mail sent yet</li>
                  </ul>
                </li>
                <li>Sends Gmail notification</li>
                <li>Sends WhatsApp reminder</li>
                <li>Updates mail status in Google Sheets</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Tools & Integrations */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tools & Integrations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Sheets – Stores orders, predictions, and status logs</li>
            <li>Custom Code nodes – Logic for grouping, filtering, prediction</li>
            <li>Gmail API – Sends email reminders</li>
            <li>WhatsApp Business API – Sends WhatsApp notifications</li>
            <li>n8n Schedule Triggers – Automates workflow runs</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
