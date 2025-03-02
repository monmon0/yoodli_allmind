export default function Footer() {
  return (
    <footer className="bg-[#F4F4FF] text-[#0C0C48] py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-bold text-sm mb-4">FOR BUSINESS</h3>
        <ul className="text-sm space-y-2">
          <li className="hover:text-blue-500">GTM Enablement</li>
          <li className="hover:text-blue-500">Learning & Development</li>
          <li className="hover:text-blue-500">Partner Enablement</li>
          <li className="hover:text-blue-500">Corporate Communications</li>
          <li className="hover:text-blue-500">Leadership</li>
          <li className="hover:text-blue-500">Engineering</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-sm mb-4">ABOUT</h3>
        <ul className="text-sm space-y-2">
          <li className="hover:text-blue-500">Our Team</li>
          <li className="hover:text-blue-500">Careers</li>
          <li className="hover:text-blue-500">AI Roleplays</li>
          <li className="hover:text-blue-500">FAQ</li>
          <li className="hover:text-blue-500">Webinars</li>
          <li className="hover:text-blue-500">Status</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-sm mb-4">USE CASES</h3>
        <ul className="text-sm space-y-2">
          <li className="hover:text-blue-500">Conversation Roleplays</li>
          <li className="hover:text-blue-500">Interview Preparation</li>
          <li className="hover:text-blue-500">Presentation Practice</li>
          <li className="hover:text-blue-500">Online Meetings</li>
          <li className="hover:text-blue-500">Toastmasters</li>
          <li className="hover:text-blue-500">Speech Coaches</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-sm mb-4">RESOURCES</h3>
        <ul className="text-sm space-y-2">
          <li className="hover:text-blue-500">Blog</li>
          <li className="hover:text-blue-500">Our Partnerships</li>
          <li className="hover:text-blue-500">Press</li>
          <li className="hover:text-blue-500">Help Center</li>
          <li className="hover:text-blue-500">Sample Speeches</li>
          <li className="hover:text-blue-500">Community</li>
        </ul>
      </div>
    </div>
    <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-xs">© 2025 Yoodli, Inc.</p>
      <div className="flex space-x-4 text-xs">
        <a href="#" className="hover:text-blue-500">Contact Us</a>
        <a href="#" className="hover:text-blue-500">Privacy Policy</a>
        <a href="#" className="hover:text-blue-500">Terms of Service</a>
        <a href="#" className="hover:text-blue-500">Cookie Preferences</a>
      </div>
    </div>
  </footer>
  );
}
