import { Check, X } from "lucide-react";

const WhyWorkWithUs = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-12 lg:px-20 bg-white">
      {/* Header Section */}
      <div className="text-center mb-10 md:mb-16">
        <div className="inline-block px-4 py-1 m-auto text-center text-sm font-medium text-black bg-purple-100 rounded-full">
          Why choose us?
        </div>
        <h2 className="text-2xl md:text-xl lg:text-5xl font-[600] mt-4 md:mt-6 leading-tight">
          How We Compare to <br className="hidden md:block" /> Other Agencies
        </h2>
      </div>

      {/* Comparison Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-12">
        {/* Other Agencies */}
        <div className="border border-gray-300 p-6 md:p-8 mx-auto md:mx-0 rounded-2xl md:rounded-3xl bg-gray-50 max-w-xs md:max-w-md lg:max-w-lg w-full shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">
            Other Agencies
          </h3>
          <ul className="space-y-3 md:space-y-4 text-sm md:text-lg text-gray-500">
            {[
              "Limited knowledge of AI",
              "Use of outdated tools",
              "Same solutions for every client",
              "Big promises, poor results",
              "No thorough testing",
              "No access to the latest technology",
              "Little or no support after project completion",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2 md:space-x-3">
                <X className="w-5 md:w-6 h-5 md:h-6 text-gray-600" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Company */}
        <div className="border border-purple-400 p-6 md:p-8 mx-auto md:mx-0 rounded-2xl md:rounded-3xl bg-purple-50 max-w-xs md:max-w-md lg:max-w-lg w-full shadow-lg">
          <div className="mb-4">
            <h2 className="text-purple-700 text-2xl font-semibold flex items-center space-x-2">
              <span className="rounded-full border-2 border-purple-700 w-6 h-6 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-purple-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15V9a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 9v6a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z" />
                </svg>
              </span>
              <span>PrimeEdge AI</span>
            </h2>
          </div>
          <ul className="space-y-3 md:space-y-4 text-sm md:text-lg text-gray-900">
            {[
              "Experts in AI technology",
              "Use of modern and advanced tools",
              "Custom solutions for each client",
              "Delivering results, not just promises",
              "Thorough testing before launch",
              "Access to the latest AI innovations",
              "Ongoing support even after the project",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2 md:space-x-3">
                <Check className="w-5 md:w-6 h-5 md:h-6 text-green-500" />
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
