"use client";
import { useEffect, useRef } from "react";

const logos = [
  "https://pngimg.com/d/google_PNG19644.png",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Indeed_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/9c/BDO_logo.svg",
  "https://appexchange.salesforce.com/image_host/52086cab-4528-4362-9229-8a5f19ed9c9c.png",
  "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Logo.png",
  "https://seeklogo.com/images/D/dale-carnegie-logo-2F6D8A9011-seeklogo.com.png",
  "https://logos-world.net/wp-content/uploads/2022/01/University-of-Washington-Logo.png",
];

export default function LogoCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // const scroll = scrollRef.current;
    // const start = Date.now();
    // const speed = 50; // Adjust speed of the scroll

    // function step() {
    //   if (!scroll) return;
    //   const elapsed = Date.now() - start;
    //   scroll.scrollLeft = (elapsed / speed) % scroll?.scrollWidth;
    //   requestAnimationFrame(step);
    // }
    

    // step();
  }, []);

  return (
    <div className="relative overflow-hidden bg-white py-6">
      <h2 className="text-center text-xl font-bold text-gray-900 mb-10">
        🚀 Trusted by the world's best companies...
      </h2>
      <div className="overflow-hidden w-full">
        <div
          ref={scrollRef}
          className="flex space-x-12 animate-infinite-scroll"
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Company Logo"
              className="h-12 w-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
