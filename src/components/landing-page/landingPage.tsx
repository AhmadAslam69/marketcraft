import HeroSection from "@/components/landing-page/components/hero-section"
import Our_services from "@/components/landing-page/components/services"
import MissionStats from "@/components/landing-page/components/mission-stats"
import HowItWorks from "@/components/landing-page/components/how-it-works"



import Testimonials from "@/components/landing-page/components/testimonials"
import BlogNewsletter from "@/components/landing-page/components/blog-newsletter"


import Navbar from "@/components/layouts/landing-page/navbar"
import Footer from "../layouts/landing-page/Footer"
import { Clients } from "./components/ourclients"

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <HeroSection />

       <section id="services">
        <Our_services />
      </section>

      <MissionStats />
      <HowItWorks />
      
      <Clients/>     
      <Testimonials />



       <section id="blog">
        <BlogNewsletter />
      </section>
      
      <Footer/>
      
    </main>
  )
}
