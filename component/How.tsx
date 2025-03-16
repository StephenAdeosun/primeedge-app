const HowItWorks = () => {
    return (
      <section className="py-16 px-6   text-center ">
        {/* Label */}
        <div className="inline-block px-4 py-1 m-auto text-center text-sm font-medium text-black bg-purple-100 rounded-full">
          How it works
        </div>
  
        {/* Heading */}
        <h2 className="text-4xl text-center font-bold text-black mt-4">
          Getting started is simple
        </h2>
  
        {/* Subtext */}
        <p className="text-gray-500 text-center mt-2 text-lg">
          A simple, three-step process to make your life easier.
        </p>
  
        {/* Steps Container */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Step 1 */}
          <div className="bg-purple-50 p-6 rounded-[30px] shadow-sm h-64 w-full max-w-xs mx-auto flex flex-col justify-start">
            <h3 className="text-4xl font-bold text-black text-left">1</h3>
            <h4 className="text-xl font-semibold text-black mt-2 text-left">
              Discovery & Strategy
            </h4>
            <p className="text-gray-500 mt-2 text-sm text-left">
              We identify your business goals, analyze communication challenges,
              and find inefficiencies to craft a tailored solution for your needs.
            </p>
          </div>
  
          {/* Step 2 */}
          <div className="bg-purple-50 p-6 rounded-[30px] shadow-sm h-64 w-full max-w-xs mx-auto flex flex-col justify-start">
            <h3 className="text-4xl font-bold text-black text-left">2</h3>
            <h4 className="text-xl font-semibold text-black mt-2 text-left">
              Creation & Launch
            </h4>
            <p className="text-gray-500 mt-2 text-sm text-left">
              Our team designs, builds, and implements a custom AI solution that
              seamlessly integrates with your existing systems and workflows.
            </p>
          </div>
  
          {/* Step 3 */}
          <div className="bg-purple-50 p-6 rounded-[30px] shadow-sm h-64 w-full max-w-xs mx-auto flex flex-col justify-start">
            <h3 className="text-4xl font-bold text-black text-left">3</h3>
            <h4 className="text-xl font-semibold text-black mt-2 text-left">Optimize</h4>
            <p className="text-gray-500 mt-2 text-sm text-left">
              We rigorously test the AI system in real-world scenarios, refining
              it until it delivers outstanding results for your business.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;