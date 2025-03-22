import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "AI Inbound Calls",
    description: "AI Voice Agents handle calls 24/7, answering questions, routing inquiries, and booking appointments to keep your customers satisfied.",
    image: "/img/call.webp",
    type: "portrait",
  },
  {
    title: "AI Outbound Calls",
    description: "AI Voice Agents automatically engage leads, qualify them, book appointments and send confirmation email and reminders.",
    image: "/img/call2.webp",
    type: "portrait",
  },
  {
    title: "AI Digital Marketing/Sales Automation & Optimization",
    description: "Get 10x leads, qualify the leads, nurture the leads and increase revenue with AI enhanced solutions.",
    image: "/img/call3.jpeg",
    type: "landscape",
  },
];

const Services = () => {
  return (
    <section className="pb-16 px-6">
      <div className="mx-auto  w-full max-w-[400px] text-center">
         <Link
          href="#why-work-with-us"
          className="bg-gray-100 mt-24 mx-auto text-purple-700 px-6 py-3 rounded-full font-medium hover:bg-purple-200 transition cursor-pointer"
        >
         Why work with us?
        </Link>
      </div>
      
      <section className="py-16 px-6 text-center">
  {/* Label */}
  <div className="inline-block px-4 py-1 text-sm font-medium text-black bg-purple-100 rounded-full">
    Solutions
  </div>

  {/* Heading */}
  <h2 className="text-4xl font-bold text-black mt-4">
    How we will improve your business
  </h2>
</section>


      <div className="flex flex-col items-center gap-8">
        {/* Portrait Services (First Two) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services
            .filter((service) => service.type === "portrait")
            .map((service, index) => (
                <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition md:w-[500px] aspect-[4/4.5] mx-auto cursor-pointer group"

              >
              
                {/* Image Wrapper for Zoom-Out Effect */}
                <div className="w-full h-full overflow-hidden">
                  <div className="w-full h-full transform scale-110 group-hover:scale-100 transition-transform duration-500 ease-in-out">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={650}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-3xl font-bold">{service.title}</h3>
                  <p className="text-gray-300 mt-2 text-lg">{service.description}</p>

                  {/* Get Started Button */}
                  <a
                    href="https://calendly.com/primeedgeai/30min"
                    className="mt-4 text-white font-bold flex items-center gap-2 group transition-colors hover:text-gray-400"
                  >
                    Get Started
                    <ArrowRight className="w-5 transition-transform group-hover:translate-x-2" />
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* Landscape Service (Last One) */}
        {services
          .filter((service) => service.type === "landscape")
          .map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition w-full max-w-[1030px] h-[460px] mx-auto cursor-pointer group"
            >
              {/* Image Wrapper for Zoom-Out Effect */}
              <div className="w-full h-full overflow-hidden">
                <div className="w-full h-full transform scale-110 group-hover:scale-100 transition-transform duration-500 ease-in-out">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={900}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Black Overlay Covering Full Image */}
              <div className="absolute inset-0 w-full h-full bg-black/60"></div>

              {/* Text Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end w-1/2 text-white">
                <h3 className="text-3xl font-bold">{service.title}</h3>
                <p className="mt-2 text-gray-300 text-lg">{service.description}</p>

                {/* Get Started Button */}
                <a
                  href="https://calendly.com/primeedgeai/30min"
                  className="mt-4 font-bold flex items-center gap-2 group transition-colors hover:text-gray-400"
                >
                  Get Started
                  <ArrowRight className="w-5 transition-transform group-hover:translate-x-2" />
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Services;
