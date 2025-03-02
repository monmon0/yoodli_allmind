

const caseStudies = [
  {
    image: "https://yoodli.wpcomstaging.com/wp-content/uploads/2024/08/Google-Cloud-1.png", // Replace with actual image path
    title: "How Google Cloud used Yoodli AI to rollout new GTM pitch certification to...",
    tags: ["Internal Training", "Pitch Certification", "Sales Enablement"],
  },
  {
    image: "https://yoodli.wpcomstaging.com/wp-content/uploads/2024/08/Google-Cloud-1.png", // Replace with actual image path
    title: "Sandler and Yoodli Partner to Offer Generative AI Sales Coaching to Sales...",
    tags: ["Generative AI", "Leadership Coaching", "Sales Enablement"],
  },
  {
    image: "https://yoodli.wpcomstaging.com/wp-content/uploads/2024/08/Google-Cloud-1.png", // Replace with actual image path
    title: "Korn Ferry and Yoodli Partner to Bring AI-powered Communication...",
    tags: ["Generative AI", "Leadership Training", "Professional Success"],
  },
];

export default function CaseStudies() {
  return (
    <div className="bg-[#0a0a2b] py-12 px-6 text-white text-center">
      <h2 className="text-3xl font-bold my-10">Check out our case studies</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={study.image} alt={study.title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">{study.title}</h3>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-sm rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">See all</button>
      </div>
    </div>
  );
}
