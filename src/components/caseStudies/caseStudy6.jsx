import React from "react";
import card6 from "../../assets/images/portfolio-images/card-6.png";
const MQChatbot = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">MQ_Chatbot Workflow</h1>

      {/* Workflow Diagram */}
      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 max-w-5xl mx-auto mb-12">
        <h2 className="text-xl font-semibold mb-4">Workflow Overview</h2>
        <div className="flex justify-center">
          {/* Replace with your MQ Chatbot workflow image */}
          <img src={card6} alt="Case Study Image" className="w-full h-auto mb-8 rounded-lg" />
      
        </div>
      </div>

      {/* How it Works */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-xl font-semibold mb-4">How it works</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>User enters a natural language command (e.g., “Create queue OrderQ”).</li>
          <li>The command is processed by an AI agent that interprets intent.</li>
          <li>The agent converts it into an IBM MQ REST API request.</li>
          <li>MQ API executes the request (create, delete, or list queues).</li>
          <li>Confirmation or error response is returned to the user via chatbot.</li>
        </ul>
      </div>

      {/* Key Features */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Natural language support for MQ queue management</li>
          <li>Supports queue creation, deletion, and listing</li>
          <li>AI-powered intent recognition</li>
          <li>Secure interaction with IBM MQ REST APIs</li>
          <li>Can be integrated inside IBM App Connect Toolkit</li>
        </ul>
      </div>

      {/* Step-by-Step Process */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-xl font-semibold mb-4">Step-by-Step Process</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
          <li>User types a command in plain English.</li>
          <li>AI agent parses the command and identifies the action (create/delete/list).</li>
          <li>The request is mapped into MQ REST API format.</li>
          <li>API call is executed securely against the MQ queue manager.</li>
          <li>Result is logged and sent back to the user.</li>
        </ol>
      </div>

      {/* Tools & Integrations */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-xl font-semibold mb-4">Tools & Integrations</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>IBM MQ REST API</li>
          <li>AI Model (Ollama / Open-Source LLM)</li>
          <li>Node.js / React for chatbot interface</li>
          <li>IBM App Connect Toolkit (for plugin deployment)</li>
        </ul>
      </div>
    </div>
  );
};

export default MQChatbot;
