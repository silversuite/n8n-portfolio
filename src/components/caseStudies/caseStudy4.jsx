import React from "react";
import card4 from "../../assets/images/portfolio-images/card-4.png";
export default function ShopifyOrderWorkflow() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Workflow Header Card */}
        <div className="bg-slate-800 p-6 rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold mb-4">Shopify Order Workflow</h1>
          <img src={card4} alt="Case Study Image" className="w-full h-auto mb-8 rounded-lg" />
        
        </div>

        {/* How it works */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">How it works</h2>
          <p className="text-lg leading-relaxed text-slate-300">
            This workflow ensures inventory stays accurate whenever{" "}
            <strong>new orders are placed in Shopify</strong>. It validates SKUs,
            deducts stock from <strong>Google Sheets</strong>, sends{" "}
            <strong>SMS order confirmations via Twilio</strong>, notifies the{" "}
            <strong>team on Slack</strong>, and finally{" "}
            <strong>responds back to Shopify</strong> with a success or failure
            message. This keeps both customers and internal teams instantly
            updated.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
          <ul className="list-disc ml-6 space-y-2 text-lg text-slate-300">
            <li>Webhook listener for new Shopify orders</li>
            <li>Validates SKUs and deducts stock from Google Sheets</li>
            <li>Handles missing SKU or insufficient stock errors</li>
            <li>Sends SMS confirmations via Twilio to customers</li>
            <li>Notifies sales team in Slack</li>
            <li>Updates Google Sheets inventory in real time</li>
            <li>Sends JSON response back to Shopify</li>
          </ul>
        </section>

        {/* Step by Step */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Step-by-step</h2>
          <ol className="list-decimal ml-6 space-y-3 text-lg text-slate-300">
            <li>
              <strong>Shopify Webhook:</strong> Captures order details such as
              SKU, quantity, phone, and order number.
            </li>
            <li>
              <strong>Read Inventory:</strong> Google Sheets node fetches SKU
              list and stock levels.
            </li>
            <li>
              <strong>Check SKU & Quantity:</strong> Code node validates SKU,
              deducts stock, or flags an error if invalid.
            </li>
            <li>
              <strong>Error Handling:</strong> If error, workflow returns{" "}
              <code>400</code> JSON error response to Shopify.
            </li>
            <li>
              <strong>Send SMS via Twilio:</strong> Customer receives an SMS
              confirmation of the order.
            </li>
            <li>
              <strong>Slack Notification:</strong> Posts order update to sales
              team channel.
            </li>
            <li>
              <strong>Update Inventory:</strong> Deducts ordered quantity from
              SKU row in Google Sheets.
            </li>
            <li>
              <strong>Respond to Shopify:</strong> Sends success JSON back to
              Shopify:{" "}
              <code className="bg-slate-700 px-1 py-0.5 rounded text-slate-200">
                {"{ status: 'processed successfully' }"}
              </code>
            </li>
          </ol>
        </section>

        {/* API Keys Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">API Keys Required</h2>
          <ul className="list-disc ml-6 space-y-2 text-lg text-slate-300">
            <li>Shopify Webhook URL</li>
            <li>Google Sheets OAuth2 Credentials</li>
            <li>Twilio API Token</li>
            <li>Slack API Token</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
