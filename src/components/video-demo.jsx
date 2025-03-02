"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function VideoDemo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("video-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mx-10 flex justify-center items-center">
      <motion.div
        id="video-section"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl p-4"
      >
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-64 sm:h-96"
            src="https://www.youtube.com/embed/4O1vnWR9dzM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
