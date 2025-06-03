"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ContactFormModal({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [formData, setFormData] = useState({ name: "",phone: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here, you can integrate with your backend/email service
    setSubmitted(true)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xl bg-white max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-dark-slate-gray">Contact Us</DialogTitle>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone} 
            onChange={handleChange} required />
            
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="bg-soft-coral text-white hover:bg-[#2DC653] w-full">
              Send Message
            </Button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center py-10">
            <CheckCircle className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-center text-dark-slate-gray">Thank you! We`&apos;`ll get back to you soon.</h3>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
