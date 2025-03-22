const HowItWorks = () => {
    return (
      <section className="py-16 px-6   text-center ">
        {/* Label */}
        <div className="inline-block px-4 py-1 m-auto text-center text-sm font-medium text-black bg-purple-100 rounded-full">
          How it works
        </div>
  
        {/* Heading */}
        <h2 className="text-4xl text-center font-bold text-black mt-4">
        Starting is effortless.
        </h2>
  
        {/* Subtext */}
        <p className="text-gray-500 text-center mt-2 text-lg">
        Follow three simple steps for a smooth experience.
        </p>
  
        {/* Steps Container */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Step 1 */}
          <div className="bg-purple-50 p-6 rounded-[30px] shadow-sm h-64 w-full max-w-xs mx-auto flex flex-col justify-start">
            <h3 className="text-4xl font-bold text-black text-left">1</h3>
            <h4 className="text-xl font-semibold text-black mt-2 text-left">
            Analysis & Planning
            </h4>
            <p className="text-gray-500 mt-2 text-sm text-left">
            We assess your business needs, pinpoint workflow bottlenecks, and develop a custom AI strategy to enhance efficiency.
            </p>
          </div>
  
          {/* Step 2 */}
          <div className="bg-purple-50 p-6 rounded-[30px] shadow-sm h-64 w-full max-w-xs mx-auto flex flex-col justify-start">
            <h3 className="text-4xl font-bold text-black text-left">2</h3>
            <h4 className="text-xl font-semibold text-black mt-2 text-left">
            Development & Deployment
            </h4>
            <p className="text-gray-500 mt-2 text-sm text-left">
            Our experts design, build, and integrate AI solutions that fit seamlessly into your operations for maximum impact.
            </p>
          </div>
  
          {/* Step 3 */}
          <div className="bg-purple-50 p-6 rounded-[30px] shadow-sm h-64 w-full max-w-xs mx-auto flex flex-col justify-start">
            <h3 className="text-4xl font-bold text-black text-left">3</h3>
            <h4 className="text-xl font-semibold text-black mt-2 text-left">Refinement & Growth</h4>
            <p className="text-gray-500 mt-2 text-sm text-left">
            We fine-tune and optimize the AI system based on real-world performance, ensuring continuous improvement and lasting success.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;