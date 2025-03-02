

export default function FeaturesSection() {
  return (
    <>
      <section className="relative bg-[#0C0C48] text-white py-16 px-6">
        <div className="absolute top-0 left-0 w-full h-16 bg-white rounded-b-full"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex justify-center mb-4">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="font-bold text-lg">Built around your method</h3>
              <p className="text-sm">Yoodli trains employees using your brand voice and best practices</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="font-bold text-lg">Always fresh</h3>
              <p className="text-sm">Yoodli auto-updates as your learning content changes</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <span className="text-3xl">🔗</span>
              </div>
              <h3 className="font-bold text-lg">Consistency across your org</h3>
              <p className="text-sm">Provide consistent training at scale</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img 
              src="/aicpa-soc.png" 
              alt="AICPA SOC Certification" 
              width={100} 
              height={100} 
              className="rounded-full"
            />
            <h3 className="font-bold text-lg">Yoodli is SOC 2 Type 2 certified</h3>
            <p className="text-sm">
              Visit our <a href="#" className="underline text-blue-300">Trust Center</a> to learn more
            </p>
            <button className="bg-gradient-to-r from-blue-400 to-purple-500 text-white py-2 px-6 rounded-full text-sm font-semibold">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
      
      <footer className="bg-[#F4F4FF] text-[#0C0C48] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-sm mb-4">FOR BUSINESS</h3>
            <ul className="text-sm space-y-2">
              <li>GTM Enablement</li>
              <li>Learning & Development</li>
              <li>Partner Enablement</li>
              <li>Corporate Communications</li>
              <li>Leadership</li>
              <li>Engineering</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-4">ABOUT</h3>
            <ul className="text-sm space-y-2">
              <li>Our Team</li>
              <li>Careers</li>
              <li>AI Roleplays</li>
              <li>FAQ</li>
              <li>Webinars</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-4">USE CASES</h3>
            <ul className="text-sm space-y-2">
              <li>Conversation Roleplays</li>
              <li>Interview Preparation</li>
              <li>Presentation Practice</li>
              <li>Online Meetings</li>
              <li>Toastmasters</li>
              <li>Speech Coaches</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-4">RESOURCES</h3>
            <ul className="text-sm space-y-2">
              <li>Blog</li>
              <li>Our Partnerships</li>
              <li>Press</li>
              <li>Help Center</li>
              <li>Sample Speeches</li>
              <li>Community</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs">© 2025 Yoodli, Inc.</p>
          <div className="flex space-x-4 text-xs">
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Preferences</a>
          </div>
        </div>
      </footer>
    </>
  );
}
