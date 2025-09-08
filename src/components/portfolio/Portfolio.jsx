import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "N8N Automation",
    title: "Order Prediction and Notification Workflow",
    description:
      "This project demonstrates how to use n8n to predict the next order date for customers based on their past purchases. The workflow integrates order history data, applies prediction logic, and notifies customers when they are likely due for their next order.",
    link: "/n8n_portfolio/caseStudies/caseStudy2",
  },
  {
    id: 2,
    image: card2,
    category: "N8N Automation",
    title: "Order Prediction and Notification Workflow",
    description:
      "This workflow automates order prediction and customer notifications. It analyzes past customer orders, predicts the next order date, and sends reminders through Gmail and WhatsApp. Predictions and statuses are logged in Google Sheets.",
    link: "/n8n_portfolio/caseStudies/caseStudy1",
  },
  {
    id: 3,
    image: card3,
    category: "N8N Automation",
    title: "Low Stock Notification Workflow",
    description:
      "This workflow runs daily at 9 AM, checks stock levels in Google Sheets, and if any SKU is below the threshold and not yet notified, it sends a reorder email via Gmail and updates the sheet to mark it as “Notified.”",
    link: "/n8n_portfolio/caseStudies/caseStudy3",
  },
  {
    id: 4,
    image: card4,
    category: "N8N Automation",
    title: "Inventory Update & Notifications ",
    description:
      "This workflow listens for new Shopify orders, updates product inventory in Google Sheets, and sends real-time notifications to customers and the internal team. It ensures stock levels are always synchronized and stakeholders are instantly informed.",
    link: "/n8n_portfolio/caseStudies/caseStudy4",
  },
  {
    id: 5,
    image: card5,
    category: "N8N Automation",
    title: "BotBrew Workflow",
    description:
      "This BotBrew workflow accelerates integration development by automating repetitive tasks across the SDLC lifecycle. It processes a given specification (such as a PDF) and branches into three parallel legs — ACE Flow Builder, Queue Creation, and Mapping. These outputs together help developers save time and ensure accuracy when building integration solutions in IBM App Connect and IBM MQ.",
    link: "/n8n_portfolio/caseStudies/caseStudy5",
  },
  {
    id: 6,
    image: card6,
    category: "N8N Automation",
    title: "MQ Chatbot Workflow",
    description:
      "MQ_Chatbot is an AI-powered assistant that lets users manage IBM MQ queues using simple natural language commands through a chatbot interface. ",
    link: "/n8n_portfolio/caseStudies/caseStudy6",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      {/*<div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
      */}
    </div>
  );
};

export default Portfolio;
