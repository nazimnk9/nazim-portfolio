"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nazimahmedprovat@gmail.com",
    href: "mailto:nazimahmedprovat@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+8801679632572",
    href: "tel:+8801679632572",
    color: "text-emerald-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
    color: "text-indigo-500",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/nazimnk9",
    color: "hover:text-slate-300",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/nazimnk9",
    color: "hover:text-blue-500",
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [showToast, setShowToast] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-title",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".contact-title",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".contact-card",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".contact-form",
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.name.trim() && formData.email.trim() && formData.message.trim()) {
      setIsSubmitting(true)

      try {
        const response = await fetch("https://formspree.io/f/mnnbzvko", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        })

        if (response.ok) {
          setShowToast(true)
          setFormData({ name: "", email: "", message: "" })
        } else {
          console.error("Form submission failed")
        }
      } catch (error) {
        console.error("Error submitting form:", error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim()

  return (
    <div ref={sectionRef} className="min-h-screen py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="contact-title text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="contact-title text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/50">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Contact Information</h3>

              <div className="contact-grid space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card
                      key={index}
                      className="contact-card bg-slate-900/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 flex items-center justify-center`}
                          >
                            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${info.color}`} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-slate-400 text-xs sm:text-sm">{info.label}</p>
                            {info.href !== "#" ? (
                              <a
                                href={info.href}
                                className="text-white hover:text-blue-400 transition-colors duration-200 font-medium text-sm sm:text-base break-all"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-white font-medium text-sm sm:text-base">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    )
                  })}
                </div>
              </div>

              <Card className="bg-slate-900/50 border-slate-700">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Address</h4>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Plot#22 & 25, BSBL Shaymolima (2nd phase),
                    <br />
                    Shaymoli Housing Society, Dhaka Uddan,
                    <br />
                    Mohammadpur, Dhaka - 1207
                    <br />
                    Bangladesh
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/50">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Send a Message</h3>

              {showToast && (
                <div className="mb-6 animate-in slide-in-from-top duration-300">
                  <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-4 sm:px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3 border border-emerald-400/30">
                    <CheckCircle className="w-6 h-6 text-emerald-100 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Message Sent Successfully!</p>
                      <p className="text-xs sm:text-sm text-emerald-100">I'll get back to you soon.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} method="POST" className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200 text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200 text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200 resize-none text-sm sm:text-base"
                    placeholder="Enter your message"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base cursor-pointer ${
                    isFormValid && !isSubmitting
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                      : "bg-slate-600 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400 text-sm sm:text-base">
            © 2024 Md. Nazim Ahmed. Built with Next.js, GSAP, and Three.js
          </p>
        </div>
      </div>
    </div>
  )
}
