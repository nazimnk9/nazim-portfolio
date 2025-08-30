"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Palette, Zap, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code following best practices",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating beautiful, intuitive interfaces that provide excellent user experiences",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed, responsiveness, and seamless interactions",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams and communicating technical concepts clearly",
  },
]

const personalTraits = [
  "Problem Solver",
  "Highly Motivated",
  "Strong Analytical Skills",
  "Corporate Communication",
  "Team Minded",
  "Function Structured",
]

const interests = ["Swimming", "Reading", "Camping", "Shopping", "Football", "Gardening", "Travel"]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".about-title",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Content animations
      gsap.fromTo(
        ".about-content",
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Highlight cards animation
      gsap.fromTo(
        ".highlight-card",
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".highlights-grid",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Traits animation
      gsap.fromTo(
        ".trait-item",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".traits-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="about-title text-4xl lg:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <div className="about-content space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate Frontend Developer from Dhaka, Bangladesh, with a strong foundation in Computer Science
                and Engineering. I specialize in creating modern, responsive web applications using React.js, Next.js,
                and TypeScript.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With hands-on experience at Revenco, I've contributed to building scalable e-commerce platforms and
                enterprise resource planning systems. I believe in writing clean, maintainable code and creating
                seamless user experiences.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Personal Traits</h4>
              <div className="traits-container flex flex-wrap gap-2">
                {personalTraits.map((trait, index) => (
                  <span
                    key={index}
                    className="trait-item px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-3">Interests & Hobbies</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full border border-green-500/30"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="about-content">
            <h3 className="text-2xl font-bold text-white mb-6">What I Bring</h3>
            <div className="highlights-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <Card
                    key={index}
                    className="highlight-card bg-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{highlight.title}</h4>
                          <p className="text-sm text-gray-400">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="about-content text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-white font-bold text-lg">EN</span>
              </div>
              <p className="text-gray-300">English</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-white font-bold text-lg">বাং</span>
              </div>
              <p className="text-gray-300">Bengali</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
