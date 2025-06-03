"use client"

import { useEffect,  useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, ArrowRight, Search, Contact,Video, Briefcase, Wallet ,Rocket} from "lucide-react"
import { useRouter } from "next/navigation"

export default function MissionStats() {
  
  const [dashOffset, setDashOffset] = useState(1000)

  useEffect(() => {
    // Use CSS animations instead of anime.js
    const interval = setInterval(() => {
      setDashOffset((prev) => (prev === 1000 ? 0 : 1000))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const router=useRouter();
  return (
    <section className="py-20  px-4 md:px-10 bg-gradient-to-b from-snow-white to-mint-green">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-slate-gray mb-6">Crafting Impactful Digital Experiences for Brands</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Market Craft, we believe exceptional marketing is crafted with purpose, 
              not just pushed with data. Our tailored strategies blend creativity, precision, 
              and performance to help businesses grow with confidence.
              
            </p>

            {/* Heartbeat SVG */}
           <div className="relative h-20 mb-8">
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 400 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,90 L40,60 L80,70 L120,40 L160,50 L200,20 L240,30 L280,10 L320,35 L360,15 L400,5"
      stroke="#1C75BC"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="1000"
      strokeDashoffset={dashOffset}
      style={{ transition: "stroke-dashoffset 1.5s ease-in-out" }}
    />
  </svg>
</div>


            {/* Mission Cards */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <Search className="w-6 h-6" />,
                  title: "Strategic SEO",
                  description: "We craft visibility — helping your brand rise on search engines and attract the right audience.",
                  color: "#FF3B30",
                },
                {
                  icon: <Video className="w-6 h-6" />,
                  title: "Engaging Content Creation",
                  description: "Stories that stick. We create content that speaks your brand’s voice and connects with real people.",
                  color: "#8A2BE2",
                },
                {
                  icon: <Rocket className="w-6 h-6" />,
                  title: "Precision Advertising",
                  description: "Crafted campaigns across Google & Meta — designed to convert, scale, and sustain growth.",
                  color: "#34C759",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0c2842]">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>         
            
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-8"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Crafting Brand Success", value: "3 YRS+", color: "#34C759", icon: <Briefcase className="w-6 h-6" /> },
                  { label: "Leads Captured", value: "50k+", color: "#ff6f61", icon: <Contact className="w-6 h-6" /> },
                  { label: "Orders Generated", value: "4M PKR+", color: "#2A5C82", icon: <Wallet className="w-6 h-6" /> },
                  { label: "Satisfied Clients", value: "6+", color: "#2c3e50", icon: <Users className="w-5 h-6" /> },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-md p-5 text-center flex flex-col items-center justify-center"
                  >
                    <div style={{ color: stat.color }} className="mb-2">
                      {stat.icon}
                    </div>
                    <div style={{ color: stat.value}} className="mb-2">
                      {stat.value}
                    </div>

                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>


            {/* Impact Chart */}
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-xl font-bold text-[#0c2842] mb-4">How Market Craft Delivers Results</h3>

              <div className="space-y-4">
                {[
                  { label: "Ad Campaign ROI Growth", percentage: 80, color: "#34C759" },
                  { label: "Lead-to-Sale Conversion Rate", percentage: 65, color: "#2A5C82" },
                  { label: "Website Engagement Uplift", percentage: 85, color: "#8A2BE2" },
                  { label: "Brand Reach Expansion", percentage: 90, color: "#FF9500" },
                ].map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">{item.label}</span>
                      <span className="font-medium" style={{ color: item.color }}>
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: 0.2 * index }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* join mc Card */}
           <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} className="transform perspective-1000">
              <Card className="p-6 border-2 border-[#2A5C82]/20 shadow-lg bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#2A5C82]/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-[#2A5C82]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-soft-blue">Ready to Craft a Brand That Converts?</h3>
                    <p className="text-gray-600 mb-2">Join our network</p>
                  </div>
                </div>
                <Button  onClick={() => router.push('/roles')} className="w-full mt-4 bg-soft-blue hover:bg-[#1a3a5f] text-white">
                  Join Market Craft<ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


