"use client"; // Required in Next.js App Router

import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  { name: "GTM Enablement", id: "gtm", img: "https://yoodli.ai/assets/graphic_main_salesenablement.webp"},
  { name: "Learning & Development", id: "learning", img: "https://yoodli.ai/assets/graphic_main_managertraining.webp"},
  { name: "Partner Enablement", id: "partner", img: "https://yoodli.ai/assets/graphic_main_coaching_companies.webp" },
  { name: "Corporate Communications", id: "corporate", img:"https://yoodli.ai/assets/graphic_main_corpcomms.webp" },
];

const contentData = {
  gtm: [
    "Upload your custom content, best practices, methodology",
    "Ramp and certify reps with near-realistic roleplays",
    "Quantify performance, export reports, and track progress over time",
  ],
  learning: [
    "Develop soft skills with AI-driven feedback",
    "Customize training modules for different teams",
    "Monitor learning progression and skill improvement",
  ],
  partner: [
    "Train partners on your brand messaging",
    "Ensure consistent delivery across all channels",
    "Track partner engagement and certification",
  ],
  corporate: [
    "Improve internal communication with AI coaching",
    "Train employees on effective leadership communication",
    "Measure engagement and presentation effectiveness",
  ],
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("gtm");

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Heading (Visible on all devices) */}
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
        How will you use Yoodli?
      </h2>

      {/* Desktop View - Tabs (Hidden on Mobile) */}
      <div className="hidden md:block">
        {/* Tabs */}
        <div className="flex justify-center space-x-6 border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative text-lg font-semibold pb-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-blue-700 after:w-full after:h-[3px] after:bg-blue-700 after:absolute after:-bottom-1 after:left-0"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Desktop Content Section */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-100 rounded-lg shadow-lg p-6 mt-6 flex flex-col md:flex-row justify-between items-center"
        >
          {/* Text Content */}
          <div className="md:w-1/2">
            <ul className="space-y-3 text-gray-800">
              {contentData[activeTab].map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-700">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-4 text-blue-700 font-semibold hover:underline">
              Learn more
            </button>
          </div>

          {/* Image & Buttons - Show Only Active Tab Image */}
          <div className="relative md:w-1/2 flex flex-col items-center">
            <img
              src={tabs.find((tab) => tab.id === activeTab)?.img}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="mt-4 space-y-2">
              <button className="bg-white shadow-md px-4 py-1 rounded-md flex items-center space-x-2">
                <span>❄</span> <span>Cold call</span>
              </button>
              <button className="bg-white shadow-md px-4 py-1 rounded-md flex items-center space-x-2">
                <span>🔥</span> <span>Inbound</span>
              </button>
              <button className="bg-white shadow-md px-4 py-1 rounded-md flex items-center space-x-2">
                <span>💡</span> <span>Discovery</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile View - Stacked Cards (Hidden on Desktop) */}
      <div className="mt-6 space-y-6 block lg:hidden">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center gap-4"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={tab.img}
                alt={tab.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">{tab.name}</h3>
              <ul className="space-y-2 text-gray-800 mt-2">
                {contentData[tab.id].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-700">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-4 text-blue-700 font-semibold hover:underline">
                Learn more
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
