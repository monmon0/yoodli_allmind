'use client'

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const APISTORIES = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"

import FancyTestimonialsSlider from "../components/testimonial";
import CaseStudies from "../components/Casestudy"
import ModalVideo from "../components/modal-video";
import Tabs from "./tabs"
import ParallaxScenario from "../components/products"
import FeaturesSection from "../components/features"
import Footer from "../components/footer"
import VideoSection from "../components/video"
import LogoCarousel from "./logos-scroll"
import NavBar from "../components/navbar";
import VideoDemo from "../components/video-demo";

// make function to convert from unix to actual time

export default function Home() {

	const logos = ["https://static.vecteezy.com/system/resources/previews/028/667/072/non_2x/google-logo-icon-symbol-free-png.png",
								"https://static.vecteezy.com/system/resources/previews/028/667/072/non_2x/google-logo-icon-symbol-free-png.png",
								"https://static.vecteezy.com/system/resources/previews/028/667/072/non_2x/google-logo-icon-symbol-free-png.png",
								"https://static.vecteezy.com/system/resources/previews/028/667/072/non_2x/google-logo-icon-symbol-free-png.png",
								"https://static.vecteezy.com/system/resources/previews/028/667/072/non_2x/google-logo-icon-symbol-free-png.png",
							 ]

	const pressLogos = [
	{ title: "Inc.", bgColor: "bg-blue-500", textColor: "text-white" },
	{ title: "GeekWire", bgColor: "bg-indigo-600", textColor: "text-white" },
	{ title: "WSJ", bgColor: "bg-blue-500", textColor: "text-white" },
];

	const logos2 = [
	{ name: "Microsoft", src: "https://static.vecteezy.com/system/resources/previews/027/127/493/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png", alt: "Forbes Logo" },
	{ name: "Forbes.", src: "https://static.cdnlogo.com/logos/f/42/forbes.png", alt: "Forbes Logo" },
	{ name: "Google Cloud", src: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Inc._magazine_logo.png", alt: "Google Cloud Logo" },
	{ name: "WSJ", src: "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Logo.png", alt: "WSJ Logo" },
	{ name: "KOMO 4", src: "https://komonews.com/resources/media/e918e5cc-8ac0-4f78-aa85-dba6333dc16a-full36x25_komo_logo_news_color.png?1658446401643", alt: "KOMO 4 Logo" },
	{ name: "GeekWire", src: "data:image/png;base64,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", alt: "GeekWire Logo" },
	{ name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Axios_logo_%282020%29.svg/2560px-Axios_logo_%282020%29.svg.png", alt: "Microsoft Logo" },
	{ name: "Axios", src: "https://logos-world.net/wp-content/uploads/2023/01/The-Wall-Street-Journal-Symbol.png", alt: "Axios Logo" }
];

	useEffect(() => {

	}, [])


	return (
		<div className="items-center min-h-screen  gap-16 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 justify-center">
				

		<NavBar/>

	{/* Hero section  */}
	<section className="relative bg-gradient-to-r from-blue-100 to-white py-40 text-center items-center">
	<div className="max-w-5xl mx-auto text-center items-center">
				<h1 className="text-4xl font-bold text-gray-900">
					AI Roleplays for 

					<span className="text-blue-500 inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
					<ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block ml-2">
								<li> Job Interviews</li>
								<li> Public Speaking</li>
								<li> Pitch Certification</li>
								<li> Sales Onboarding</li>
								<li> Manager Training</li>
								<li aria-hidden="true">Important Meetings</li>
						</ul>
				</span>
				</h1>

				{/* flex space-x-16 animate-loop-scroll gap-4 */}
				<div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-6 md:space-y-0 md:space-x-12">
          <div className="text-lg text-gray-700 md:w-1/2 px-10">
            <p>
              Improve your communication skills with private, real-time, and
              judgment-free roleplay coaching — powered by AI.
            </p>
            <p className="mt-4">Like <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Grammarly</span>, but for speech!</p>

						<div className=" mt-16 flex justify-center gap-4">
						<button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out flex items-center gap-2 ">
							 Start role-playing
						</button>

						<button className="hidden md:block border border-blue-500 text-blue-500 px-6 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white flex items-center gap-2">
						🤝 Get Yoodli for your team
						</button>

				</div>
      </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <VideoSection />
          </motion.div>
        </div>
				
			</div>


	
	</section>

		< LogoCarousel/>
			{/* testimonials  */}
			<div className="flex flex-col py-30 items-center mx-20 gap-5">
				<h1  className="text-lg font-medium text-gray-900 dark:text-white "> and their employees...</h1>
					<FancyTestimonialsSlider />
			</div>


			<CaseStudies/>
			


		<section className="py-12  text-white">
			<div className="container mx-auto text-center">
				<h2 className="text-xl font-semibold mb-8 text-gray-900" >Featured in</h2>
				<div className="flex flex-wrap justify-center items-center gap-6 p-6">
				{logos2.map((logo, index) => (
					<motion.img
						key={index}
						src={logo.src}
						loading="lazy"
						alt={`Logo ${index + 1}`}
						className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						whileHover={{ scale: 1.1 }}
					/>
				))}
		</div>
			</div>
		</section>

		<div className="relative w-full max-w-2xl mx-auto justify-center item-center">
		<h1 className="text-3xl font-large text-gray-900 dark:text-white justify-center item-center text-center">Check out a demo in action 👍</h1>

			<VideoDemo/>
		</div>

		
		<div className="flex justify-center items-center gap-6 p-6">
			{pressLogos.map((press, index) => (
				<div
					key={index}
					className={`w-40 h-20 flex justify-center items-center ${press.bgColor} ${press.textColor} rounded-2xl shadow-2xl font-bold text-xl transition-transform duration-300 hover:scale-105`}
				>
					{press.title}
				</div>
			))}
		</div>

		< Tabs />
		
		{/* figure out the parallax part */}

	 	< FeaturesSection />

		</main>
		<Footer />
				

		</div>
	);
}

	{/* Chat UI */}
			{/* <div className=" right-10 top-16 bg-white shadow-lg p-4 rounded-lg max-w-xs">
				<div className="text-sm font-semibold text-gray-700">Agnes Beans</div>
				<p className="text-gray-600">Hey there! Tell me more about what you're selling...</p>
			</div>
			<div className=" right-5 top-32 bg-white shadow-lg p-4 rounded-lg max-w-xs">
				<div className="flex items-center gap-2">
					<img
						src="/user.jpg"
						alt="Esha Joshi"
						className="w-6 h-6 rounded-full"
					/>
					<div className="text-sm font-semibold text-gray-700">Esha Joshi</div>
				</div>
				<p className="text-gray-600">I'd love to tell you about how Yoodli can 10x your sales teams</p>
			</div> */}