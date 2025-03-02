"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const scenarios = [
  {
    id: 1,
    title: "Why should we buy your product?",
    partner: "Client",
    persona: "Skeptical",
    bgImage: "/bg1.jpg",
  },
  {
    id: 2,
    title: "How does your service compare to others?",
    partner: "Investor",
    persona: "Curious",
    bgImage: "/bg2.jpg",
  },
  {
    id: 3,
    title: "Tell us about your company vision.",
    partner: "Journalist",
    persona: "Neutral",
    bgImage: "/bg3.jpg",
  },
];

export default function ParallaxScenario() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [activeBg, setActiveBg] = useState(scenarios[0].bgImage);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const activeScenario = scenarios.find((_, index) => {
        const section = document.getElementById(`scenario-${index}`);
        return section && section.offsetTop <= scrollPosition;
      });

      if (activeScenario) setActiveBg(activeScenario.bgImage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Fixed Background */}
      <div
        className="fixed top-0 left-0 w-1/2 h-full bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${activeBg})` }}
      />

      {/* Right Section */}
      <div className="absolute right-0 w-1/2 py-32 space-y-20">
        {/* Title at the Top */}
        <motion.h1
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How Yoodli AI Roleplays Work
        </motion.h1>

        {/* Text Boxes with Parallax Effect */}
        {scenarios.map((scenario, index) => (
          <motion.div
            key={scenario.id}
            id={`scenario-${index}`}
            className="p-6 bg-white rounded-xl shadow-lg w-3/4 mx-auto"
            style={{ y: parallaxY }}
          >
            <p className="text-sm text-gray-500">Topic</p>
            <h3 className="text-lg font-bold">{scenario.title}</h3>

            <p className="mt-3 text-sm text-gray-500">Conversation Partner</p>
            <div className="text-xl font-semibold flex items-center justify-between">
              {scenario.partner}
              <span>🔍</span>
            </div>

            <p className="mt-3 text-sm text-gray-500">Persona</p>
            <div className="text-xl font-semibold flex items-center justify-between">
              {scenario.persona}
              <span>⬇️</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
