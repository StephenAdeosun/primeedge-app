"use client";
import React from "react";

const testimonials = [
  { 
    name: "Lush & Wellness ", 
    role: "Columbia, MD", 
    text: "PrimeEdge AI's Dr Wale and his team just set up my AI inbound and outbound calls. AI is now answering my calls and booking my appointments. I am impressed",
    image: "/img/pic1.avif" 

  },
  { 
    name: " Akin O.", 
    role: "CEO, Akin's Auto", 
    text: "We saw instant improvements in lead generation and client engagement. The AI solutions work flawlessly, and the support is top-notch! A must-have for any business!",
    image: "/img/pic.avif" 

  },
  {
    name: "EZEKIEL O.",  
    role: "Medical Office", 
    text: "PrimeEdge AI's AI solutions have helped us automate our calls and increase our lead conversion rates by 45%. We are now able to focus on growing our business.",
    image: "/img/pic2.avif"
  }
 
 
];

export default function TestimonialMarquee() {
  return (
    <div className="relative  w-full mt-[30px] py-24 md:mb-[84px]">
      {/* Header */}
      <div className="text-center max-w-[913px] mx-auto mb-[30px] mt-[14px]">
        <h2 className="text-[40px] font-[400] text-[#13134F]">Real Results, Real Impact</h2>
        <p className="text-[#6F6F94] mt-2 text-[20px]">
        Businesses trust <span className="text-[#6d28d9] font-semibold">PrimeEdge AI</span>  {"  "} 
        to automate their workflows with intelligent AI solutions. 
        </p>
      </div>

      {/* Marquee Wrapper with Shadows (Only on Testimonials) */}
      <div className="relative overflow-hidden w-full">
        {/* White Gradient Shadows (Ensures header is NOT affected) */}
        <div className="absolute inset-y-0 left-0 md:w-[500px] bg-gradient-to-r from-[#F8F9FC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 md:w-[500px] bg-gradient-to-l from-[#F8F9FC] to-transparent z-10 pointer-events-none"></div>

        {/* First Marquee */}
        <div className="flex w-max animate-scroll space-x-8">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div key={index} className="w-[26rem] h-[14rem] bg-white rounded-2xl p-8 min-w-[26rem] flex flex-col justify-between ">
              <p className="text-[#13134F] text-md">{t.text}</p>
              <div className="flex items-center mt-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                <div className="ml-4">
                  <p className="font-bold text-[#13134F] text-xl">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
