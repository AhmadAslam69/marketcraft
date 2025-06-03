"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"




const blogPosts = [
  {
    slug: "why-digital-marketing-matters-2025",
    title: "Why Every Brand Needs a Digital Marketing Strategy in 2025",
    content:
      `
            In 2025, a strong digital marketing strategy isn’t optional — it’s essential.

            Brands without a clear digital strategy often struggle with inconsistent messaging, poor engagement, and missed revenue opportunities.

            ---

            ### The Rise of AI in Marketing

            Digital marketing today includes:
            - Social media campaigns  
            - Paid advertising (Meta, Google)  
            - Email funnels  
            - Influencer collaborations  
            - SEO and content marketing

            With AI tools like predictive analytics and audience segmentation, brands can now:
            - Understand customer behavior in real-time  
            - Deliver personalized experiences  
            - Increase conversion rates

            ---

            ### Long-Term Growth Through Strategy

            A well-executed digital strategy means:
            - Better ROI  
            - Stronger brand recall  
            - Sustainable long-term growth

            ---

            ### Final Thoughts

            If your brand hasn’t adopted a digital-first mindset yet — now is the time.

            The brands that act today will lead tomorrow.
            `,
            
    category: "Strategy",
    image: "/strategy.png",
  },
  {
     slug: "social-proof-marketing-trust", // ← ADD THIS
     title: "Learn how brands can use reviews, user-generated content, and influencer mentions to drive conversions and build instant credibility.",
    content:
      `In the age of digital decision-making, **social proof is the new currency of trust**.

        From online reviews to Instagram shoutouts — what others say about your brand now matters more than what you say about yourself.

        ---

        ### What is Social Proof?

        Social proof is the psychological phenomenon where people copy the actions of others, assuming those actions reflect the correct behavior. In marketing, this includes:

        - ⭐ Customer reviews & testimonials  
        - 📸 User-generated content (UGC)  
        - 🤝 Influencer endorsements  
        - 🏆 Trust badges and certifications  
        - 👥 Follower count and engagement metrics

        ---

        ### Why It Works So Well

        In a world full of ads, people are naturally skeptical. But when they see **real people sharing real experiences**, trust builds instantly.

        - 93% of consumers say online reviews impact their buying decisions  
        - UGC-based ads get **4x higher click-through rates**  
        - Testimonials increase **conversion rates by 34%** on average

        ---

        ### Types of Social Proof You Should Use

        1. **Customer Testimonials**  
          Share short quotes from satisfied customers on your website and social media.

        2. **Video Reviews & Reactions**  
          A customer unboxing your product? Gold. These authentic videos drive emotional engagement.

        3. **Influencer Collaborations**  
          Choose influencers aligned with your brand values — micro-influencers often outperform celebrities in engagement.

        4. **UGC Campaigns**  
          Run hashtag challenges or giveaways encouraging customers to share photos or videos using your product.

        5. **Real-time Stats**  
          “24 people bought this today” or “5 customers viewing this right now” — urgency + social proof = results.

        ---

        ### Best Practices to Leverage Social Proof

        - Keep it authentic (don’t fake testimonials)  
        - Highlight diverse customers to connect with a wide audience  
        - Add social proof to high-conversion areas like product pages & checkout  
        - Repurpose reviews across email, ads, and social content

        ---

        ### Final Thought

        Social proof isn’t just a marketing trick — it’s a **trust accelerator**.

        When potential buyers see real people loving what you offer, they’re far more likely to convert. So instead of telling your audience how great you are — let your customers do it for you.

        Let trust sell.

            `,
            
    category: "Technology",
    image: "/social.jpg",
  },
  
   {
    slug: "visual-content-marketing-impact",
    title: "The Power of Visual Content in Digital Advertising",
    content: `
        Visuals aren’t just accessories in digital marketing — they’re the main attraction.

        In 2025, attention spans are shorter and competition is fiercer. **Visual content is what stops the scroll and drives action.**

        ---

        ### Why Visuals Work Better

        - 90% of information transmitted to the brain is visual  
        - Posts with visuals get **650% more engagement** than text-only posts  
        - Viewers retain 95% of a message when it's seen in a video, vs. 10% when read as text

        Humans process visuals 60,000x faster than text — and in marketing, **speed is power**.

        ---

        ### Visual Content Types That Convert

        1. **Short-form Videos (Reels, Shorts, TikToks)**  
          Bite-sized, mobile-friendly, and algorithm-favored.

        2. **High-quality Product Photography**  
          Your product’s first impression starts with a photo. Make it count.

        3. **Explainer Animations**  
          Perfect for SaaS, fintech, or any complex offering. Simplifies and engages.

        4. **Infographics**  
          Great for turning data-heavy content into digestible visuals.

        5. **UGC & Behind-the-Scenes**  
          Raw and real content builds brand authenticity and trust.

        ---

        ### Visual Branding Essentials

        - **Consistent color palette**  
        - **Readable fonts**  
        - **On-brand icons and illustrations**  
        - **Optimized for mobile-first viewing**

        Make sure every visual speaks the language of your brand.

        ---

        ### Bonus: Visuals & Performance Marketing

        - Facebook ads with videos generate 3x more leads  
        - Carousel ads increase click-through rate by 72%  
        - Landing pages with videos can boost conversions by up to 86%

        ---

        ### Final Thought

        Your content is only as powerful as it looks.

        **If it doesn’t catch attention, it doesn’t convert.**

        So invest in great visuals. Because in digital marketing — what they see is how they decide.

            `,
    category: "Marketing",
    image: "/visual.jpg",
  }

]

export default function BlogDetailsPage() {
  const params = useParams()
  const slug = params?.slug

  const blog = blogPosts.find((item) => item.slug === slug)

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-red-500">
        Blog post not found.
      </div>
    )
  }

  return (
    <section className="py-20 px-4 md:px-10 bg-gradient-to-b from-mint-green to-snow-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="relative h-100 w-full overflow-hidden rounded-lg">
            <Image
              fill
              src={blog.image}
              alt={blog.title}
              className="object-cover"
            />
            <div className="absolute top-3 left-3 bg-soft-coral text-white text-xs px-2 py-1 rounded">
              {blog.category}
            </div>
          </div>

          <h1 className="text-4xl font-bold text-dark-slate-gray">
            {blog.title}
          </h1>

          <p className="text-gray-700 whitespace-pre-line leading-7">
            {blog.content}
          </p>

          <div className="pt-8">
            <Link href="/">
              <Button variant="outline" className="text-soft-coral border-soft-coral">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
