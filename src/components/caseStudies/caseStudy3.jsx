import React from "react";
import card3 from "../../assets/images/portfolio-images/card-3.png";

export default function LowStockWorkflow() {
  return (
    <div className="bg-gray-900 text-gray-100 p-10 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Workflow Diagram */}
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Low Stock Notification Workflow</h2>
          <img src={card3} alt="Case Study Image" className="w-full h-auto mb-8 rounded-lg" />
        
        </div>

        {/* How it works */}
        <section>
          <h1 className="text-3xl font-bold mb-4">How it works</h1>
          <p className="mb-4">
            This workflow ensures suppliers are automatically notified whenever{" "}
            <strong>stock levels fall below a threshold</strong>. It checks inventory
            records in <strong>Google Sheets</strong> daily at <strong>9 AM</strong>,
            sends <strong>Gmail reorder alerts</strong>, and updates the sheet to mark SKUs
            as <em>Notified</em>. This prevents missed reorders and keeps inventory
            replenishment smooth.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Automated check every day at 9 AM</li>
            <li>Reads stock levels from Google Sheets</li>
            <li>Flags items with quantity below threshold (e.g., 5)</li>
            <li>Prevents duplicate notifications using a “Notified” status</li>
            <li>Sends supplier alerts via Gmail</li>
            <li>Updates Google Sheets with notification status</li>
          </ul>
        </section>

        {/* Step by Step */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Step-by-step</h2>
          <ol className="list-decimal pl-6 space-y-6">
            <li>
              <strong>Schedule Trigger (9 AM)</strong>
              <p>
                The workflow starts automatically every morning at <b>9 AM</b>.
              </p>
            </li>

            <li>
              <strong>Read Inventory</strong>
              <p>
                A Google Sheets node <code>read_inventory</code> retrieves all stock
                records including SKU, Quantity, and Notification Status.
              </p>
            </li>

            <li>
              <strong>Check Threshold</strong>
              <p>
                A Code node <code>check_threshold</code> loops through items and tags SKUs
                with <code>notify = "YES"</code> if Quantity is below <b>5</b>.
              </p>
            </li>

            <li>
              <strong>Loop Over Items</strong>
              <p>
                The <code>splitInBatches</code> node processes each SKU individually for
                notification checks.
              </p>
            </li>

            <li>
              <strong>Check Notified</strong>
              <p>
                An IF node <code>check_notified</code> ensures alerts are sent only if:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>SKU requires notification (<code>notify = YES</code>)</li>
                <li>Supplier has not been notified already</li>
              </ul>
            </li>

            <li>
              <strong>Send Gmail Notification</strong>
              <p>
                The Gmail node <code>send_gmail_notification</code> sends an email alert to
                the supplier with the SKU and current stock level.
              </p>
            </li>

            <li>
              <strong>Update Inventory</strong>
              <p>
                The Google Sheets node <code>update_inventory</code> updates the SKU record
                with <code>Supplier_Notification_Status = "Notified"</code> to prevent
                duplicate alerts.
              </p>
            </li>
          </ol>
        </section>

        {/* Tools & Integrations */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tools & Integrations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>n8n Schedule Trigger – runs daily at 9 AM</li>
            <li>Google Sheets – stores SKU inventory & notification status</li>
            <li>Code node – checks quantity thresholds</li>
            <li>IF node – ensures only new low-stock SKUs trigger alerts</li>
            <li>Gmail API – sends reorder notifications</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
