import { PhoneCall, TrendingUp, Database } from "lucide-react";
import Link from "next/link";

const Expectations = () => {
  return (
    <section className="text-center my-12 py-12 px-6">
      {/* Heading */}
      <p className="text-gray-500 italic flex items-center justify-center gap-2 text-sm">
        <span className="relative before:absolute before:-top-1 before:-left-4 before:w-6 before:h-6 before:bg-transparent before:border-gray-400 before:border-t before:border-l before:rounded-tl-lg">
          you can expect
        </span>
      </p>

      {/* Cards */}
      <div className="flex justify-center gap-8 mt-4 flex-wrap">
        {/* Card 1 */}
        <div className="bg-gray-100 rounded-2xl px-8 py-10 w-80 h-44 shadow-md flex flex-col justify-center">
          <p className="text-purple-600 text-4xl font-semibold flex items-center gap-2">
            <PhoneCall size={28} />
            ~100%
          </p>
          <p className="text-black font-medium text-lg mt-2">calls answered </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 rounded-2xl px-8 py-10 w-80 h-44 shadow-md flex flex-col justify-center">
          <p className="text-purple-600 text-4xl font-semibold flex items-center gap-2">
            <TrendingUp size={28} />
            ~250%
          </p>
          <p className="text-black font-medium text-lg mt-2">boost in appointments</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 rounded-2xl px-8 py-10 w-80 h-44 shadow-md flex flex-col justify-center">
          <p className="text-purple-600 text-4xl font-semibold flex items-center gap-2">
            <Database size={28} />
            +45%
          </p>
          <p className="text-black font-medium text-lg mt-2">boost in lead conversion </p>
        </div>
      </div>
     
    </section>
  );
};

export default Expectations;
