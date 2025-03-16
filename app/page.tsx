import React from 'react' 
import Hero from '@/component/Hero'
import Expectations from '@/component/Expect'
import Services from "@/component/Services";
import How from "@/component/How"
import TestimonialMarquee from '@/component/Testimonial';
import WhyWorkWithUs from '@/component/Why';
import FAQ from '@/component/FAQ';
import GetStarted from "@/component/GetStarted"

export default function page() {
  return (
    <div>
      <Hero />
      <Expectations/>
      <div id='services'>
      <Services />
      </div>
      <div id='how-it-works'>

      <How/>
      </div>
    <div id='why-work-with-us'>
      <WhyWorkWithUs/>
      </div>
      <TestimonialMarquee/>
      <FAQ/>
      <div id='contact'>

      <GetStarted/>
      </div >

    </div>
  )
}
