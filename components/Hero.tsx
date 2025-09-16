"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin)
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        ".hero-image",
        {
          scale: 0,
          rotation: -180,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
        },
      )
        .fromTo(
          ".hero-title",
          {
            x: -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=1",
        )
        .fromTo(
          ".hero-subtitle",
          {
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .fromTo(
          ".hero-description",
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .fromTo(
          ".hero-buttons",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .fromTo(
          ".hero-contact",
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.2",
        )

      // Floating animation for the profile image
      gsap.to(".hero-image", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut",
      })
    }
  }

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut",
      })
    }
  }

  return (
    <div ref={heroRef} className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="hero-image relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 p-1 bg-gradient-to-r from-blue-400 to-purple-400">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <Image
                  //src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_55PP.jpg-qVIOffzVnb4ZYY5RRJWRXJo9y1xwm9.jpeg"
                  src="/images/nazim-profile.png"
                  alt="Md. Nazim Ahmed"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center lg:text-left space-y-6">
          <div>
            <h1 className="hero-title text-5xl lg:text-7xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Md. Nazim
              </span>
              <br />
              <span className="text-white">Ahmed</span>
            </h1>
            <h2 className="hero-subtitle text-2xl lg:text-3xl font-semibold text-gray-300 mb-6">Frontend Developer</h2>
            <p className="hero-subtitle text-lg text-blue-400 font-medium">• Javascript • TypeScript • React.js • Next.js </p>
          </div>

          <p className="hero-description text-lg text-gray-300 leading-relaxed max-w-2xl">
            Creative and detail-oriented Frontend Developer, passionate about building modern, scalable, user-centric web
            applications by transforming complex problems into elegant solutions using the latest web technologies.
          </p>

          {/* Contact Info */}
          <div className="hero-contact grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>nazimahmedprovat@gmail.com</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <Phone className="w-4 h-4 text-green-400" />
              <span>+8801679632572</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-2 sm:col-span-2">
              <MapPin className="w-4 h-4 text-red-400" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              View My Work
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 bg-transparent cursor-pointer"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="hero-contact flex justify-center lg:justify-start space-x-6">
            <a
              href="https://github.com/nazimnk9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/nazimnk9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
