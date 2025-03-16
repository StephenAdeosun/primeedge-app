"use client";

import Link from "next/link";
import { PhoneCall } from "lucide-react";

const Hero = () => {
  return (
    <section className="text-center pt-24 py-20 px-4 mt-[70px] relative"> {/* Added pt-24 to push down */}
      {/* Background Dotted Pattern */}
      <div className="absolute inset-0 bg-[url('/dots.svg')] opacity-10 pointer-events-none"></div>

      {/* Tagline */}
      <p className="text-gray-600 text-sm flex items-center justify-center gap-2 mb-4 relative z-10">
        <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
        Automate. Optimize. Grow
      </p>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold max-w-[710px] m-auto leading-[60px] relative z-10">
      Automate Calls, <span className="bg-purple-100 text-purple-700 px-2 border-l-2">Engage Leads</span> and Scale Your Business Effortlessly  
        <br />
        
      </h1>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap relative z-10">
        <Link
          href="#"
          className="bg-purple-600 text-white flex items-center gap-2 px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition cursor-pointer"
        >
          <PhoneCall size={20} />
          Book A Call
        </Link>

        <Link
          href="#services"
          className="bg-gray-100 text-purple-700 px-6 py-3 rounded-full font-medium hover:bg-purple-200 transition cursor-pointer"
        >
          Our Services
        </Link>

        <Link
          href="#why-work-with-us"
          className="bg-gray-100 text-purple-700 px-6 py-3 rounded-full font-medium hover:bg-purple-200 transition cursor-pointer"
        >
          Why Work With Us ?
        </Link>
      </div>
      
    </section>
  );
};

export default Hero;
