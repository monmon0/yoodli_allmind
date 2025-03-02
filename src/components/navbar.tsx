import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function NavBar() {
  return (
	<nav>
	<Navbar fluid rounded  className="p-5 dark:bg-gray-900 fixed w-full z-20 top-0 start-0  dark:border-gray-600 backdrop-blur-2xl">
	<Navbar.Brand as={Link} href="/" className="  ">
	  <img  src="https://images.squarespace-cdn.com/content/v1/5d6ed158d1024700012397dc/1659988418946-9ZFW0CB5M8Y58QDEH3VP/image-asset.png?format=1000w" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
	  {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Yoodli</span> */}
	</Navbar.Brand>


	  <div className="flex md:order-2 gap-5 ">
	  <button type="button" className="text-slate-900 hidden sm:block">Sign In</button>

	  <button type="button" className=" hidden sm:block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Yoodli</button>
	  <button className="hidden sm:block relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
	 
	  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
	 			 Talk to Sales
					</span>
		</button>

	<Navbar.Toggle className="mx-10" />




      </div>

	<Navbar.Collapse>
	  <Navbar.Link href="#" className="hover bg:" active>
		Home
	  </Navbar.Link>
	  <Navbar.Link as={Link} href="#">
	  For Business
	  </Navbar.Link>
	  <Navbar.Link href="#">Pricing</Navbar.Link>
	  <Navbar.Link href="#">About</Navbar.Link>
	  <Navbar.Link href="#">Use Cases</Navbar.Link>
	  <Navbar.Link href="#">Resources</Navbar.Link>
	</Navbar.Collapse>


	

	
  </Navbar>
  

	</nav>

    // <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 backdrop-blur-2xl">
	// 	<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 backdrop-blur-md">
	// 	<a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
	// 			<img src="https://images.squarespace-cdn.com/content/v1/5d6ed158d1024700012397dc/1659988418946-9ZFW0CB5M8Y58QDEH3VP/image-asset.png?format=1000w" className="h-8" alt="Yoodli Logo" />
	// 	</a>


	
	
    // <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
	// 				<span className="sr-only">Open main menu</span>
	// 				<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
	// 						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
	// 				</svg>
    // </button>

    // <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-5">
	// 			<button type="button" className="text-slate-900 hidden sm:block">Sign In</button>
	// 			<button type="button" className=" hidden sm:block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Yoodli</button>
	// 			<button className="hidden sm:block relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
	// 				<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
	// 			 Talk to Sales
	// 				</span>
	// 				</button>

	// 	</div>
		
	// 	<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
	// 		<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
	// 			<li>
	// 				<a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Product</a>
	// 			</li>
	// 			<li>
	// 				<a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-grey-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">For Business</a>
	// 			</li>
	// 			<li>
	// 				<a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
	// 			</li>
	// 			<li>
	// 				<a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
	// 			</li>
	// 			<li>
	// 				<a href="#" className="block py-2 px-3 text-gray-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Use Cases</a>
	// 			</li>
	// 			<li>
	// 				<a href="#" className="block py-2 px-3 text-gray-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
	// 			</li>
	// 		</ul>
	// 	</div>
	// 	</div>
	// </nav>
  );
}
