"use client"

import { useEffect, useRef ,useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

import Image from "next/image"
import ContactFormModal from "./contactform"


export default function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null)
  
  
  const [showContactForm, setShowContactForm] = useState(false)

    useEffect(() => {
      const imgElement = imageRef.current;

      if (imgElement) {
        imgElement.classList.add("floating-animation");
      }

      return () => {
        if (imgElement) {
          imgElement.classList.remove("floating-animation");
        }
      };
    }, []);


  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-20 bg-gradient-to-b from-dark-slate-gray to-mint-green overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#34C759] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#8A2BE2] blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="z-10 w-full md:w-1/2 space-y-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
            Market Craft  <span className="text-mint-green">Crafting Digital Futures</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-gray-200 max-w-xl">
            Combining the power of data-driven marketing with creativity and precision to fuel digital growth for modern brands
          </p>
        </motion.div>

        {/* Feature list */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="space-y-3"
        >
          {[
            "Result-Focused Ad Campaigns Across Meta & Google",
            "High Convertion Content & Visual Storytelling",
            "Smart Funnels & Retargeting That Convert",
            "Insights Campaign Management & Analytics",
          ].map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="w-5 h-5 text-mint-green mr-2 flex-shrink-0" />
              <span className="text-gray-200">{feature}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button  onClick={() => setShowContactForm(true)} className="bg-gradient-to-r from-mint-green to-[#2A5C82] hover:from-[#2A5C82] hover:to-[#34C759] text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 group">
            <span className="relative flex items-center">
              Start Your Marketing Journey
              <ArrowRight className="ml-2 w-5 h-5" />
              <span className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-pulse"></span>
            </span>
          </Button>

        
        </motion.div>
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <div ref={imageRef} className="relative w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="relative z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#34C759]/5 to-[#8A2BE2]/5 rounded-full blur-2xl"></div>
              <Image
                src="/logo/marketcraftlogo.png"
                alt="Marketcraft"
                width={500}
                height={0} // height will auto-adjust
                className="relative z-10 h-auto w-[500px]"
                priority
              />
            </div>
          </motion.div>

          {/* Animated elements around the image */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-4 h-4 rounded-full bg-[#34C759] animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-3 h-3 rounded-full bg-[#8A2BE2] animate-ping animation-delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/4 w-5 h-5 rounded-full bg-[#2A5C82] animate-ping animation-delay-2000"></div>
          </div>

          {/* Stats badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="hidden md:block absolute -left-16 top-1/10 bg-white/90 backdrop-blur-sm p-1 rounded-lg shadow-md"
          >
            <div className="text-[#006CB5]  font-bold text-xl">85%+</div>
            <div className="text-xs text-gray-600">Conversion <br/> Boost</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className=" hidden md:block absolute -right-16 top-2/3 bg-white/90 backdrop-blur-sm p-1 rounded-lg shadow-lg"
          >
            <div className="text-[#006CB5] font-bold text-xl">4.9★</div>
            <div className="text-xs text-grey-600">Satisfactory <br/> client</div>
          </motion.div>
        </div>
      </div>
      <ContactFormModal open={showContactForm} setOpen={setShowContactForm} />

    </section>
  )
}
