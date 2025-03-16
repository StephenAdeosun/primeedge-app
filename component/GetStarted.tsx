import { PhoneCall, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="flex flex-col items-center text-center mt-[30px] py-16 px-6">
      {/* Logo & Title */}
      <div className="mb-6">
        <h2 className="text-purple-700 text-2xl font-semibold flex items-center justify-center space-x-2">
          <span className="rounded-full border-2 border-purple-700 w-6 h-6 flex items-center justify-center">
            <svg className="w-4 h-4 text-purple-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15V9a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 9v6a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z"/>
            </svg>
          </span>
          <span>PrimeEdge AI</span>
        </h2>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Ready to automate your business?
      </h1>

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        {/* Free Consultation Button */}
        <a href="#" className="flex items-center space-x-2 bg-purple-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-purple-800 transition">
          <PhoneCall className="w-5 h-5" />
          <span>Get a Free Consultation</span>
        </a>

        {/* Project Inquiry Button */}
        <a href="#" className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-900 transition">
          <MessageSquare className="w-5 h-5" />
          <span>Tell us about your project</span>
        </a>
      </div>

      {/* Small Text Under Buttons */}
      <div className="mt-3 flex flex-col sm:flex-row gap-4 text-gray-500 text-sm">
        <span>40+ booked this month</span>
        <span>Got an idea in mind?</span>
      </div>
    </section>
  );
};

export default CTASection;
