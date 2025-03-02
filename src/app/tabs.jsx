"use client"; // Required in Next.js App Router

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { name: "GTM Enablement", id: "gtm" },
  { name: "Learning & Development", id: "learning" },
  { name: "Partner Enablement", id: "partner" },
  { name: "Corporate Communications", id: "corporate" },
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
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
        How will you use Yoodli?
      </h2>

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

      {/* Content Section */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-100 rounded-lg shadow-lg p-6 mt-6 flex justify-between"
      >
        {/* Text Content */}
        <div>
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

        {/* Image & Buttons */}
        <div className="relative">
          <div className="bg-blue-500 w-28 h-28 rounded-full absolute top-0 left-0 -z-10"></div>
          <img
            src="/profile-placeholder.png"
            alt="Profile"
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
  );
}
