import React from "react";
import card5 from "../../assets/images/portfolio-images/card-5.png";
export default function BotBrewWorkflow() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        BotBrew Workflow
      </h1>

      {/* Workflow Image */}
      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 max-w-5xl mx-auto mb-12">
      <img src={card5} alt="Case Study Image" className="w-full h-auto mb-8 rounded-lg" />
        
      </div>

      {/* How it works */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">How it works</h2>
        <p className="leading-relaxed text-gray-300 mb-4">
          This BotBrew workflow accelerates integration development by automating
          repetitive tasks across the <strong>SDLC lifecycle</strong>. It processes a given
          specification (such as a PDF) and branches into three parallel legs —
          ACE Flow Builder, Queue Creation, and Mapping. These outputs together
          help developers save time and ensure accuracy when building
          integration solutions in IBM App Connect and IBM MQ.
        </p>
        <p className="leading-relaxed text-gray-300">
          By eliminating repetitive setup and enforcing standards, BotBrew reduces
          errors and ensures faster delivery of integration projects, making it a
          powerful assistant for developers.
        </p>
      </div>

      {/* Key Features */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <strong>ACE Flow Builder:</strong> Automatically generates ACE12
            message flow skeletons from specifications, ensuring correct node
            connections and structure.
          </li>
          <li>
            <strong>Queue Creation:</strong> Reads required queues from the input
            specification and creates them in IBM MQ using REST APIs.
          </li>
          <li>
            <strong>Mapping:</strong> Extracts mapping details from
            specifications and generates ready-to-use ESQL code for
            transformations.
          </li>
          <li>
            Parallel execution ensures all three tasks (flows, queues, mapping)
            are built simultaneously, reducing manual effort.
          </li>
          <li>
            Provides consistency across projects by enforcing standards in flow
            design, ESQL, and queue management.
          </li>
          <li>
            Saves significant developer time, allowing focus on complex
            business logic rather than repetitive setup.
          </li>
        </ul>
      </div>

      {/* Step-by-step */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step-by-step</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-300">
          <li>
            <strong>Schedule Trigger</strong> – The workflow runs automatically
            at a set time to process input specifications.
          </li>
          <li>
            <strong>ACE Flow Builder:</strong> Parses the specification and
            generates message flow skeletons with connected nodes.
          </li>
          <li>
            <strong>Queue Creation:</strong> Reads MQ queue requirements and
            creates them using REST APIs, ensuring required queues exist before
            deployment.
          </li>
          <li>
            <strong>Mapping:</strong> Extracts mapping logic and produces ESQL
            code for message transformations.
          </li>
          <li>
            <strong>Outputs:</strong> All three artifacts (flows, queues, ESQL)
            are produced in parallel and made ready for developer use.
          </li>
        </ol>
      </div>

      {/* Tools & Integrations */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Tools & Integrations</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>IBM App Connect Enterprise (ACE 12) – Flow generation</li>
          <li>IBM MQ – Queue management via REST APIs</li>
          <li>Custom Code nodes – Logic for parsing, flow generation, mapping</li>
          <li>n8n Workflow Engine – Orchestrates parallel execution</li>
          <li>BotBrew AI Agent – Reads specifications and drives automation</li>
        </ul>
      </div>
    </div>
  );
}
