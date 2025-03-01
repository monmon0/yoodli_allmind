'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const APISTORIES = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"

interface Story {
  [propName: string]: any; // bad typing
}
// make function to convert from unix to actual time

export default function Home() {


  // const [stories, setStory] = useState<Story[]>([]);
  // const [titles, setTitle] = useState<string[]>([]);
  // const [titlesFiltered, setTitleF] = useState<string[]>([]);
  const logosRef = useRef(null);
  useEffect(() => {
    if (logosRef.current) {
      let ul = logosRef.current;
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }
  }, [])




  return (
    <div className="items-center min-h-screen  gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2  pb-20">
        
        

  <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 backdrop-blur-md">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://images.squarespace-cdn.com/content/v1/5d6ed158d1024700012397dc/1659988418946-9ZFW0CB5M8Y58QDEH3VP/image-asset.png?format=1000w" className="h-8" alt="Yoodli Logo" />
    </a>
  
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-5">
        <button type="button" className="text-slate-900">Sign In</button>
        {/* <button type="button" className="relative text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Yoodli</button> */}
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Yoodli</button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
         Talk to Sales
          </span>
          </button>
        
        {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Talk to Sales</button> */}
        

        
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Product</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-grey-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">For Business</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Use Cases</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>

 
  <section className="relative bg-gradient-to-r from-blue-100 to-white py-60 text-center">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          AI Roleplays for 
          {/* <span className="text-blue-500">job interviews</span> */}
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
        
        <p className="mt-4 text-lg text-gray-600">
          Improve your communication skills with private, real-time, and
          judgment-free roleplay coaching — powered by AI. Like Grammarly, but
          for speech!
        </p>
        <div className="mt-16 flex justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">
            Start roleplaying
          </button>
          <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg shadow-md">
            Get Yoodli for your team
          </ button>
        </div>
      </div>
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
    </section>

    

<div class="flex overflow-hidden space-x-16">
  <div class="flex space-x-16 animate-loop-scroll gap-20">
    <img loading="lazy" src="https://pngimg.com/d/google_PNG19644.png" width = "10%" class="max-w-none" alt="Image 1" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 2" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 3" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 4" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67017079-51e1-4245-9bf1-b5957eb66c74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 5" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 6" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 7" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5731a5a7-689f-49ae-abf1-6e6dc00c2043?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 8" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 9" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 10" />
  </div>
  <div class="flex space-x-16 animate-loop-scroll" aria-hidden="true">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 1" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 2" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 3" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 4" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67017079-51e1-4245-9bf1-b5957eb66c74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 5" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 6" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 7" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5731a5a7-689f-49ae-abf1-6e6dc00c2043?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 8" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 9" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 10" />
  </div>
</div>

        
      </main>
          
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>

    </div>
  );
}
