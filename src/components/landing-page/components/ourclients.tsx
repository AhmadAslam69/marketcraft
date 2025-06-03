"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

import { CardContent } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"


import Image from "next/image"




export function Clients() {
  
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const cardHoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="w-full py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-mint-green to-snow-white z-0" />

      

      <motion.div
        ref={ref}
        className="container px-4 md:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="flex flex-col items-center text-center mb-10" variants={itemVariants}>
          

          <motion.h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="flex items-end gap-2 text-2xl md:text-3xl font-bold">
                <span className="text-[#006CB5] relative">
                  Trusted By
                  <motion.span
                    className=" absolute -bottom-2 left-0 w-full h-1 bg-[#006CB5]"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                  
                </span>{" "}
                <span className="text-[#4A4A4A]"><p>Growing Brands</p></span>
             </div>
            
          </motion.h2>

          <motion.p
            className="text-cool-gray max-w-[800px] mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
              We’ve proudly partnered with brands that value creativity, growth, and results.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto mb-12">
                  {[
                    {
                      image: "/clients/greenm.jpg",
                      title: "Green Mall",
                      desc: "Pakistan’s trusted store for imported flower bulbs and garden tools.",
                    },
                    {
                      image: "/clients/fs3.jpg",
                      title: "Floral Studio",
                      desc: "Custom floral artistry for events, gifts, and moments.",
                    },
                    {
                      image: "/clients/image.png",
                      title: "Flora Flowers",
                      desc: "Leading flower bouquet brand, known for luxury gifting.",
                    },
                    {
                      image: "/clients/mehdees.jpg",
                      title: "Mehdees",
                      desc: "Premium Attar brand, bringing elegance to life.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover="hover"
                      custom={index}
                    >
                      <motion.div
                        className="border border-gray-200 rounded-xl bg-snow-white/90 backdrop-blur-sm overflow-hidden h-full"
                        variants={cardHoverVariants}
                      >
                        <CardContent className="pt-6 relative">
                          <div className="flex flex-col items-center relative z-10">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={150}       // fixed width in px
                                height={150}      // fixed height in px
                                className="rounded-lg object-cover mb-4 shadow-md"
                              />

                            <h3 className="font-semibold mb-1 text-dark-slate-gray text-center">{item.title}</h3>
                            <p className="text-sm text-cool-gray text-center">{item.desc}</p>
                          </div>
                        </CardContent>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>


        
        </motion.div>

      </motion.div>
    </section>
  )
}
