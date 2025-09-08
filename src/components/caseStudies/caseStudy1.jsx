import React from "react";
import card2 from "../../assets/images/portfolio-images/card-2.png";

const CaseStudy1 = () => {
  return (
    <div className="bg-gray-900 text-gray-100 p-10 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        
        <img src={card2} alt="Case Study Image" className="w-full h-auto mb-8 rounded-lg" />
        <h1 className="text-3xl font-bold mb-6">How it works</h1>
        {/* Description */}
        <p className="mb-6">
          This project creates an <strong>automated Daily Sales Summary system</strong> that
          fetches data from a PostgreSQL database, processes it into a structured report,
          and delivers insights through Slack notifications and email summaries. The workflow
          runs every day at <strong>9 PM</strong>, ensuring stakeholders receive timely
          updates on orders, revenue, and top-performing products. It also includes an
          alert mechanism for <strong>low sales days</strong>.
        </p>

        {/* Key Features */}
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Automated daily trigger at 9 PM</li>
          <li>Fetches today’s sales data, yesterday’s data, and top-selling products</li>
          <li>
            Calculates key metrics like revenue growth, average order value, and customer count
          </li>
          <li>Sends a Slack notification with highlights</li>
          <li>Generates a detailed HTML report and emails it via Gmail</li>
          <li>Includes a low-revenue alert if daily sales fall below a threshold</li>
        </ul>

        {/* Step by Step */}
        <h2 className="text-2xl font-semibold mb-4">Step-by-step</h2>
        <ol className="list-decimal pl-6 space-y-4 mb-10">
          <li>
            <strong>Schedule Trigger</strong>
            <p>The workflow starts with a Schedule Trigger set for 9 PM daily.</p>
          </li>

          <li>
            <strong>Data Fetching</strong>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                <strong>Get Daily Sales Data:</strong> Queries orders for today (total orders,
                revenue, AOV, highest/lowest order).
              </li>
              <li>
                <strong>Get Top Products:</strong> Retrieves top 5 best-selling products by
                units sold.
              </li>
              <li>
                <strong>Get Yesterday Data:</strong> Collects order count and revenue from the
                previous day.
              </li>
            </ul>
          </li>

          <li>
            <strong>Data Formatting</strong>
            <p className="mt-2">Each query result is tagged with a <code>_source</code> label using small Code nodes:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><code>format_sales_data</code> → adds <code>_source: daily_sales</code></li>
              <li><code>format_product_data</code> → adds <code>_source: top_products</code></li>
              <li><code>format_yesterday_data</code> → adds <code>_source: yesterday_data</code></li>
            </ul>
            <p className="mt-2">All formatted data is merged together for unified processing.</p>
          </li>

          <li>
            <strong>Processing &amp; Metrics Calculation</strong>
            <p className="mt-2">Process Sales Data node combines all inputs and calculates:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Revenue growth % vs yesterday</li>
              <li>Performance emojis (🚀, 📊, 📈)</li>
              <li>Formatted top products list</li>
              <li>Has orders / No orders condition</li>
            </ul>
          </li>

          <li>
            <strong>Notifications</strong>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                <strong>Slack Notification:</strong> Posts a concise summary with orders,
                revenue, growth %, and top product.
              </li>
              <li>
                <strong>Check Low Revenue Alert:</strong> If revenue &lt; 500, triggers an email
                alert.
              </li>
            </ul>
          </li>

          <li>
            <strong>Report Generation</strong>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                <code>create_html_summary:</code> Generates a styled HTML report with metrics,
                tables, and visuals.
              </li>
              <li>
                <code>send_summary_to_gmail:</code> Sends the HTML summary to the configured
                email.
              </li>
              <li>
                <code>low_sales_notification:</code> Sends a special Gmail alert if revenue falls
                below the threshold.
              </li>
            </ul>
          </li>
        </ol>

        {/* API Keys */}
        <h2 className="text-2xl font-semibold mb-4">API Keys Required</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Postgres Database Credentials:</strong> For fetching orders and product data
          </li>
          <li>
            <strong>Slack API Token:</strong> To send notifications to the sales channel
          </li>
          <li>
            <strong>Gmail OAuth2:</strong> To send detailed daily reports and alerts via email
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CaseStudy1;
