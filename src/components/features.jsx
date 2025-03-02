import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="relative bg-[#0C0C48] text-white py-16 px-6">
      <div className="absolute top-0 left-0 w-full h-16 bg-white rounded-b-full"></div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
            src="https://accorian.com/wp-content/uploads/2022/08/aicpa-soc-logo-freelogovectors.net_-PNG.png" 
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
  );
}
